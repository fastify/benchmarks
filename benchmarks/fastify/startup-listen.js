const fastify = require('fastify')
const server = fastify()

server.listen(0, (err) => {
  server.close()
})
