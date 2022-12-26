'use strict'

const restify = require('restify')

const server = restify.createServer()
server.get('/', function (req, res, next) {
  res.send({ hello: 'world' })
  return next()
})

server.listen(3000, function () {})
