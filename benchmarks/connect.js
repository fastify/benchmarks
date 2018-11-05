'use strict'

const connect = require('connect')

const app = connect()
app.use(function (req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})

app.listen(3000)
