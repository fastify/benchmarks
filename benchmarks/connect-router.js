'use strict'

var connect = require('connect')
var router = require('router')()
var app = connect()

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
})

app
  .use(router)

app.listen(3000)
