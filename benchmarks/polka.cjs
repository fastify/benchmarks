'use strict'

const polka = require('polka')

const app = polka()

app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})

app.listen(3000)
