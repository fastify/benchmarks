'use strict'

const app = require('woodland')()

app.get('/', (req, res) => res.json({ hello: 'world' }))

require('http').createServer(app.route).listen(3000)
