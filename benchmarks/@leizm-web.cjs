'use strict'

const Application = require('@leizm/web').Application

const app = new Application()

app.use('/', function (ctx) {
  ctx.response.json({ hello: 'world' })
})

app.listen(3000)
