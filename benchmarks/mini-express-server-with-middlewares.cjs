'use strict'

const { AppServer } = require('mini-express-server')

const app = new AppServer()

app.use(require('cors')())
app.use(require('dns-prefetch-control')())
app.use(require('frameguard')())
app.use(require('hide-powered-by')())
app.use(require('hsts')())
app.use(require('ienoopen')())
app.use(require('x-xss-protection')())

app.get('/', function (req, res) {
  res.json({ hello: 'world' })
})

app.listen(3000)
