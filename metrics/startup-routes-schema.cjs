const start = process.hrtime()

const fastify = require('fastify')
const server = fastify()

const routes = process.env.routes || 0

for (let i = 0; i < routes; ++i) {
  server.get(
    `/${i}`,
    {
      schema: {
        querystring: {
          [i]: { type: 'string' },
          excitement: { type: 'integer' }
        }
      }
    },
    (_req, reply) => {
      reply.send({})
    }
  )
}

const loadingTime = process.hrtime(start)
server.listen({ port: 0 }, () => {
  const listenTime = process.hrtime(start)
  const path = require('path')
  require('fs').writeFileSync(path.join(__dirname, `${routes}-${path.basename(__filename)}.txt`), `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})
