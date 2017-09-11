#!/usr/bin/env node
const { exec, fork } = require('child_process')
const ora = require('ora')
const globalModules = require('global-modules')

let list = [
  'bare',
  'connect',
  'connect-router',
  'express-route-prefix',
  'express-with-middlewares',
  'express',
  'hapi',
  'koa-router',
  'koa',
  'restify',
  'take-five',
  'fastify'
]

const fire = () => {
  return new Promise((resolve, reject) => {
    exec(`node ${globalModules}/fastify-benchmarks/node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000`, (err, stdout, stderr) => {
      err ? reject(err) : resolve(stderr)
    })
  })
}

const doBench = async (handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(`${globalModules}/fastify-benchmarks/benchmarks/${handler}`)
  // Progress status is warming now! #10 -> https://github.com/fastify/fastify-benchmarks/issues/10
  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire()
  } catch (e) {
    console.log(e)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }
  try {
    let result = await fire()
    forked.kill('SIGINT')
    spinner.text = `Results for ${handler}`
    spinner.succeed()
    return result
  } catch (e) {
    console.log(e)
  }
}

const start = (list, inc = 0) => {
  return new Promise(async (resolve, reject) => {
    if (list.length === inc) {
      process.exit()
    }
    let handler = list[inc]
    try {
      let result = await doBench(handler)
      console.log(result, '\n')
      inc++
      start(list, inc)
    } catch (e) {
      reject(e)
    }
  })
}

start(list)
  .catch(err => console.log(err))
