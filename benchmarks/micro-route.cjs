'use strict'

const http = require('http')
const { send, serve } = require('micro')
const dispatch = require('micro-route/dispatch')

const handler = (req, res) => send(res, 200, { hello: 'world' })

const server = new http.Server(serve(dispatch('/', 'GET', handler)))

server.listen(3000)
