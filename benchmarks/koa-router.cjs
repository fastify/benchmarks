'use strict'

const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

router.get('/', async function (ctx) {
  ctx.body = { hello: 'world' }
})

app.use(router.routes())
app.listen(3000)
