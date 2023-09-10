'use strict'

const http = require('node:http')

const { adapter } = require('spirit').node
const route = require('spirit-router')

const hello = () => {
  return { hello: 'world' }
}

const app = route.define([
  route.get('/', hello)
])

http.createServer(adapter(app)).listen(3000)
