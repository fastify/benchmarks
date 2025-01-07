'use strict'

const server = require('node:http').createServer(function (_req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})

server.listen(3000)
