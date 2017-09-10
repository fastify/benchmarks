'use strict'

var server = require('http').createServer(handle)

server.listen(3000)

function handle (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
}
