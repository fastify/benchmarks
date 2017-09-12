#!/usr/bin/env node
const { fork } = require('child_process')
const ora = require('ora')
const { fire } = require('./autocannon')
const path = require('path')

const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(path.join(__dirname, '..', 'benchmarks', handler))
  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire(opts, handler, false)
  } catch (e) {
    console.log(e)
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
  } catch (e) {
    console.log(e)
  }
}

const start = async (opts, list, inc = 0) => {
  if (list.length === inc) return true
  let handler = list[inc]
  try {
    await doBench(opts, handler)
    inc++
    start(opts, list, inc)
  } catch (e) {
    console.log(e)
  }
}

module.exports = start
