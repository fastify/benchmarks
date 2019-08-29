'use strict'

const uWS = require('uWebSockets.js')

uWS.App().get('/', (res, req) => {
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000, (token) => {
  if (!token) {
    console.error('Failed to listen to port ' + 3000)
  }
})
