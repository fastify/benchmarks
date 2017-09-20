'use strict'

const total = require('total.js')

total.http('release', {
  ip: '127.0.0.1',
  port: 3000
})

total.route('/', function response () {
  this.json({ hello: 'world' })
})
