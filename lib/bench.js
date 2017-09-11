#!/usr/bin/env node
const { fork } = require('child_process')
const ora = require('ora')
const globalModules = require('global-modules')
const { fire } = require('./autocannon')

const doBench = async (handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(`${globalModules}/fastify-benchmarks/benchmarks/${handler}`)
  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire(handler, false)
  } catch (e) {
    console.log(e)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }
  try {
    await fire(handler, true)
    forked.kill('SIGINT')
    spinner.text = `Results saved for ${handler}`
    spinner.succeed()
    return true
  } catch (e) {
    console.log(e)
  }
}

const start = async (list, inc = 0) => {
  if (list.length === inc) return true
  let handler = list[inc]
  try {
    await doBench(handler)
    inc++
    start(list, inc)
  } catch (e) {
    console.log(e)
  }
}

module.exports = start
