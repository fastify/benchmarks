'use strict'

const http = require('node:http')

const { adapter, response } = require('spirit').node

const app = (req) => {
  return response({ hello: 'world' }).type('json')
}

http.createServer(adapter(app)).listen(3000)
