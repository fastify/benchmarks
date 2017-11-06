'use strict'

require('make-promises-safe')

const Hapi = require('hapi')

async function start () {
  const server = Hapi.server({ port: 3000, debug: false })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      cache: false,
      response: {
        ranges: false
      },
      state: { parse: false }
    },
    handler: function (request, h) {
      return { hello: 'world' }
    }
  })

  await server.start()
}

start()
