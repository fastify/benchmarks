'use strict'

var Koa = require('koa')
var app = new Koa()

app.use(async (ctx) => {
  ctx.body = { hello: 'world' }
})

app.listen(3000)
