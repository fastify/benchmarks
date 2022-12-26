'use strict'

const micro = require('micro')

const server = micro(async function (req, res) {
  return { hello: 'world' }
})

server.listen(3000)
