const fastify = require('fastify')
const server = fastify()

const routes = process.env.routes || 0

for (let i = 0; i < routes; ++i) {
  server.get(`/${i}`, async () => {})
}

server.listen(0, () => {
  server.close()
})
