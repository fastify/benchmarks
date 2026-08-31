'use strict'

const restana = require('restana')

const app = restana({ securityHeaders: false })

app.get('/', (_req, res) => {
  res.send({ hello: 'world' })
})

app.start(3000)
