'use strict'

const Koa = require('koa')
const { bodyParser } = require('@koa/bodyparser')
const app = new Koa()

app.use(bodyParser())
app.use(ctx => {
  ctx.body = ctx.request.body
})

const _server = app.listen(3000)

process.on('SIGINT', () => {
  _server.close()
})
