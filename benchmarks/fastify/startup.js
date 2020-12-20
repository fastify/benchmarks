'use strict'

const benchmark = require('benchmark')
const suite = new benchmark.Suite()

const Fastify = require('fastify')

suite.add('raw startup', function (deferred) {
  const server = Fastify()
  server.ready(() => {
    deferred.resolve()
  })
}, { defer: true })

suite.on('cycle', (event) => {
  console.info(String(event.target))
})

suite.run()
