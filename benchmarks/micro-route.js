'use strict'

const micro = require('micro')
const dispatch = require('micro-route/dispatch')

const handler = (req, res) => micro.send(res, 200, { hello: 'world' })

const server = micro(
  dispatch('/', 'GET', handler)
)

server.listen(3000)
