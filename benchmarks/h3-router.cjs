'use strict'

const { createServer } = require('http')
const { createApp, toNodeListener, eventHandler, createRouter } = require('h3')

const app = createApp()

const router = createRouter()
  .get('/', eventHandler(() => ({ hello: 'world' })))

app.use(router)

createServer(toNodeListener(app)).listen(process.env.PORT || 3000)
