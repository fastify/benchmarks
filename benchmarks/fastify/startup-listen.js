const fastify = require('fastify')
const server = fastify()

server.listen(0, () => {
  server.close()
})
