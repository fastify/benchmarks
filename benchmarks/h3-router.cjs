'use strict'

const { createServer } = require('node:http')
const { createApp, toNodeListener, eventHandler, createRouter, setHeader } = require('h3')

const app = createApp()

const router = createRouter()
  .get('/', eventHandler((ev) => {
    // Unfortunatly, we need to set the content-type manually
    // to level the paying field
    setHeader(ev, 'content-type', 'application/json; charset=utf-8')
    return { hello: 'world' }
  }))

app.use(router)

createServer(toNodeListener(app)).listen(process.env.PORT || 3000)
