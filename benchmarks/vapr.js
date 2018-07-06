'use strict'

const app = require('vapr')()

app.get('/', () => [
  200,
  { 'content-type': 'application/json' },
  [JSON.stringify({ hello: 'world' })]
])

require('http').createServer(app).listen(3000)
