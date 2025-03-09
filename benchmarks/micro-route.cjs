'use strict'

const http = require('node:http')
const { send, serve } = require('micro')
const dispatch = require('micro-route/dispatch')

const handler = (_req, res) => send(res, 200, { hello: 'world' })

const server = new http.Server(serve(dispatch('/', 'GET', handler)))

server.listen(3000)
