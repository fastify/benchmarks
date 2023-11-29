'use strict'

const server = require('http').createServer(function (req, res) {
  const data = JSON.stringify({ hello: 'world' })
  res.writeHead(200, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(data)
  })
  res.end(data)
})

server.listen(3000)
