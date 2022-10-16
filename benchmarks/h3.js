'use strict'

const { createServer } = require('http')
const { createApp, toNodeListener, eventHandler } = require('h3')

const app = createApp()
app.use('/', eventHandler(() => ({ hello: 'world' })))

createServer(toNodeListener(app)).listen(process.env.PORT || 3000)
