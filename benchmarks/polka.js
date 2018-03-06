'use strict'

const polka = require('polka')

const app = polka()

app.get('/', (req, res) => {
  res.end(JSON.stringify({ hello: 'world' }));
})

app.listen(3000)
