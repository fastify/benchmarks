'use strict'

const restana = require('restana')

const app = restana()

app.get('/', (_req, res) => {
  res.send({ hello: 'world' })
})

app.start(3000)
