const start = process.hrtime()

const fastify = require('fastify')
const server = fastify()

const loadingTime = process.hrtime(start)

server.listen(0, () => {
  const listenTime = process.hrtime(start)
  require('fs').writeFileSync(`${__filename}.txt`, `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})
