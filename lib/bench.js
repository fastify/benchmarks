#!/usr/bin/env node
'use strict'

const { fork } = require('child_process')
const ora = require('ora')
const path = require('path')
const { fire } = require('./autocannon')

const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(path.join(__dirname, '..', 'benchmarks', handler))
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
    forked.kill('SIGINT')
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

module.exports = start
