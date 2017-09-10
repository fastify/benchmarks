'use strict'

var connect = require('connect')
var app = connect()

app.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
})

app.listen(3000)
