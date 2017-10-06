'use strict'

const five = require('take-five')

const server = five()
server.get('/', function (req, res) {
  return res.send({ hello: 'world' })
})

server.listen(3000)
