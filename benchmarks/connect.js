'use strict'

var connect = require('connect')
var app = connect()

app.use(function (req, res) {
  res.end(JSON.stringify({ hello: 'world' }))
})

app.listen(3000)
