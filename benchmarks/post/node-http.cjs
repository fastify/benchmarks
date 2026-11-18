'use strict'

const server = require('node:http').createServer(function (req, res) {
  let body = ''
  req.setEncoding('utf8')
  req.on('data', function (chunk) {
    body += chunk
  })
  req.on('end', function () {
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(JSON.parse(body)))
  })
})

server.listen(3000)
