#!/usr/bin/env node
'use strict'

import { access } from 'node:fs/promises'
import { fork } from 'child_process'
import ora from 'ora'
import { join } from 'path'
import { fire } from './autocannon.js'
import { fileURLToPath } from 'url'
import assert from 'assert'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start()
  let forked
  try {
    await access(join(__dirname, '..', 'benchmarks', handler + '.cjs'))
    forked = fork(join(__dirname, '..', 'benchmarks', handler + '.cjs'))
  } catch {
    forked = fork(join(__dirname, '..', 'benchmarks', handler + '.mjs'))
  }

  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire(opts, handler, false)
  } catch (error) {
    return console.log(error)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }

  try {
    await fire(opts, handler, true)
    assert.ok(forked.kill('SIGINT'))
    spinner.text = `Results saved for ${handler}`
    spinner.succeed()
    return true
  } catch (error) {
    return console.log(error)
  }
}

let index = 0
const start = async (opts, list) => {
  if (list.length === index) {
    return true
  }

  try {
    await doBench(opts, list[index])
    index += 1
    return start(opts, list)
  } catch (error) {
    return console.log(error)
  }
}

export default start
