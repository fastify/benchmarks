'use strict'

const express = require('express')
const app = express()

const router = express.Router()

router.get('/hello', (req, res) => {
  res.send({ hello: 'world' })
})

app.use('/greet', router)

app.listen(3000)
