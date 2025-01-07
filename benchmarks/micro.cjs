'use strict'

const http = require('http')
const { serve } = require('micro')

const server = new http.Server(
  serve(async function () {
    return { hello: 'world' }
  })
)

server.listen(3000)
