'use strict'

const http = require('node:http')
const fulmine = require('fulmine.js')

const app = fulmine()

app.disable('etag')
app.disable('x-powered-by')

app.post('/', fulmine.json(), function (req, res) {
  res.json(req.body)
})

// through node:http, as the rules ask: app.listen() would serve it with µWS
http.createServer(app).listen(3000)
