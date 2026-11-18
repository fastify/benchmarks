'use strict'

const http = require('node:http')
const fulmine = require('fulmine.js')

const app = fulmine()

app.disable('etag')
app.disable('x-powered-by')

app.get('/', function (_req, res) {
  res.json({ hello: 'world' })
})

// through node:http, as the rules ask: app.listen() would serve it with µWS
http.createServer(app).listen(3000)
