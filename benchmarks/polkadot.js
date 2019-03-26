'use strict'

const polkadot = require('polkadot')

polkadot(function (req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000)
