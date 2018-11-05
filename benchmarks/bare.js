'use strict'

const server = require('http').createServer(function (req, res) {
  res.setHeader('content-type', 'Content-Type: application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})

server.listen(3000)
