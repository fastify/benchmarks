'use strict'

const server = require('http').createServer(function (req, res) {
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
})

server.listen(3000)
