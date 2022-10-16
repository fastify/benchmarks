'use strict'

const { createServer } = require('http')
const { createApp, eventHandler } = require('h3')

const app = createApp()

app.use('/', () => eventHandler({ hello: 'world' }))

createServer(app).listen(process.env.PORT || 3000)
