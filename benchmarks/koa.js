'use strict'

const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = { hello: 'world' }
})

const _server = app.listen(3000)

process.on('SIGINT', () => {
  _server.close()
})
