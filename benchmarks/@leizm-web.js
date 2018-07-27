'use strict'

const Connect = require('@leizm/web').Connect

const app = new Connect()

app.use('/', function (ctx) {
  ctx.response.json({ hello: 'world' })
})

app.listen(3000)
