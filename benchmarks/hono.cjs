'use strict'

const { serve } = require('@hono/node-server')
const { Hono } = require('hono')

const app = new Hono()

app.get('/', (ctx) => {
  ctx.json({ hello: 'world' })
})

serve({ fetch: app.fetch, port: 3000, hostname: '127.0.0.1' })
