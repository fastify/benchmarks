'use strict'

const http = require('http')
const { serve, send } = require('micro')
const { router, get } = require('microrouter')

const hello = async function (req, res) {
  return send(res, 200, { hello: 'world' })
}
const server = new http.Server(serve(router(get('/', hello))))

server.listen(3000)
