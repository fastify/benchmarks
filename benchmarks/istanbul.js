'use strict'
const { createApp } = require('@istanbul/app')
const { createHttpServer, createRouter } = require('@istanbul/http')

const app = createApp()
const server = createHttpServer()
app.register(server)
server.config.host = 'localhost'
createRouter({ prefix: '' }).get('', (req, res) => {
  res.send({
    hello: 'world'
  })
})
app.start()
