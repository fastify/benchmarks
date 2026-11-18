#!/usr/bin/env node

import { access } from 'node:fs/promises'
import { fork } from 'node:child_process'
import ora from 'ora'
import { join } from 'node:path'
import { fire } from './autocannon.js'
import { scenario } from './scenarios.js'
import assert from 'node:assert'

const doBench = async (opts, handler) => {
  const { serversDirectory, resultsDirectory, request } = scenario(opts.scenario)
  const autocannonOpts = { ...opts, ...request }
  const spinner = ora(`Started ${handler}`).start()
  let forked
  try {
    await access(join(serversDirectory, handler + '.cjs'))
    forked = fork(join(serversDirectory, handler + '.cjs'))
  } catch {
    forked = fork(join(serversDirectory, handler + '.mjs'))
  }

  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire(autocannonOpts, handler)
  } catch (error) {
    return console.log(error)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }

  try {
    await fire(autocannonOpts, handler, resultsDirectory)
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
