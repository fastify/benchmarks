'use strict'

const micro = require('micro')
const dispatch = require('micro-route/dispatch')

const server = micro(
  dispatch('/', 'GET', (req, res) => {
    return micro.send(res, 200, { hello: 'world' })
  })
)

server.listen(3000)
