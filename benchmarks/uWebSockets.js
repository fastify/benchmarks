'use strict'

const uWS = require('uWebSockets.js')

uWS.App().get('/', (res, req) => {
  res.writeHeader('content-type', 'application/json; charset=utf-8')
  res.writeHeader('Date', new Date().toUTCString())
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000, () => {})
