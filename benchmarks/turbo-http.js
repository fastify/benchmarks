'use strict'
const turbo = require('turbo-http')

const server = turbo.createServer(function (req, res) {
    res.setHeader('Content-Length', '17')
    res.setHeader('Content-Type', 'application/json')
    res.write(Buffer.from('{"hello":"world"}'))
})

server.listen(3000)