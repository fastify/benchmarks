'use strict'

const Foxify = require('foxify')

const app = new Foxify()

app.disable('x-powered-by')
app.disable('content-length')

app.set('workers', 1)

app.get('/', function (req, res) {
  res.json({hello: 'world'})
})

app.start()
