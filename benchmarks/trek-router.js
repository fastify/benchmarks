'use strict'

const assert = require('assert')
const Trek = require('trek-engine')
const Router = require('trek-router')

const app = new Trek()
const router = new Router()

router.add('GET', '/', async function ({ res }) {
  res.body = { hello: 'world' }
})

app.use(async ctx => {
  const { req } = ctx
  const [handler, params] = router.find(req.method, req.url)
  if (handler) {
    req.params = params
    return handler(ctx)
  }
})

app.on('error', err => {
  assert(err instanceof Error, `non-error thrown: ${err}`)

  if (err.status === 404 || err.expose) return

  const msg = err.stack || err.toString()
  console.error()
  console.error(msg.replace(/^/gm, '  '))
  console.error()
})

app.run(3000)
