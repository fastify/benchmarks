'use strict'

const Hapi = require('@hapi/hapi')

async function start () {
  const server = Hapi.server({ port: 3000, debug: false })

  server.route({
    method: 'POST',
    path: '/',
    config: {
      cache: false,
      response: {
        ranges: false
      },
      state: { parse: false }
    },
    handler: function (request) {
      return request.payload
    }
  })

  await server.start()
}

start()
