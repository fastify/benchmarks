'use strict'

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.post('/', express.json(), function (req, res) {
  res.json(req.body)
})

app.listen(3000)
