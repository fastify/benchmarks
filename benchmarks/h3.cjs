'use strict'

const { createServer } = require('node:http')
const { createApp, toNodeListener, eventHandler, setHeader } = require('h3')

const app = createApp()
app.use('/', eventHandler((ev) => {
  // Unfortunatly, we need to set the content-type manually
  // to level the paying field
  setHeader(ev, 'content-type', 'application/json; charset=utf-8')
  return { hello: 'world' }
}))

createServer(toNodeListener(app)).listen(process.env.PORT || 3000)
