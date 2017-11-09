'use strict'

const restify = require('restify')

const server = restify.createServer()
server.get('/', function (req, res) {
  res.send({ hello: 'world' })
})

server.listen(3000)
