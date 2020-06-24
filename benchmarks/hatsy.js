const { httpListener } = require('@hatsy/hatsy')
const { createServer } = require('http')

const server = createServer(httpListener(({ response }) => {
  response.setHeader('content-type', 'application/json; charset=utf-8')
  response.end(JSON.stringify({ hello: 'world' }))
}))

server.listen(3000)
