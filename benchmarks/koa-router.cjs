'use strict'

const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

router.get('/', async function (ctx) {
  ctx.body = { hello: 'world' }
})

app.use(router.routes())
app.listen(3000)
