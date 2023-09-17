const start = process.hrtime()

const fastify = require('fastify')
const server = fastify()

const loadingTime = process.hrtime(start)

server.listen({ port: 3000 }, () => {
  const listenTime = process.hrtime(start)
  require('node:fs').writeFileSync(`${__filename}.txt`, `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})
