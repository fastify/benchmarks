'use strict'

const benchmark = require('benchmark')

const suite = new benchmark.Suite()
const { Worker } = require('worker_threads')
const path = require('path')

suite.add('raw startup', function (deferred) {
  new Worker(path.join(__dirname, './startup-listen.js')).on('exit', () => {
    deferred.resolve()
  })
}, { defer: true })

for (let i = 1; i <= 10000; i *= 10) {
  suite.add(`startup with ${i} raw routes`, function (deferred) {
    new Worker(
      path.join(__dirname, './startup-routes.js'),
      {
        env: {
          routes: i
        }
      }
    ).on('exit', () => {
      deferred.resolve()
    })
  }, { defer: true })
}

for (let i = 1; i <= 10000; i *= 10) {
  suite.add(`startup with ${i} querystring schema routes`, function (deferred) {
    new Worker(
      path.join(__dirname, './startup-routes-schema.js'),
      {
        env: {
          routes: i
        }
      }
    ).on('exit', () => {
      deferred.resolve()
    })
  }, { defer: true })
}

suite.on('cycle', (event) => {
  console.info(String(event.target))
})

suite.run({ async: false })
