const restify = require('restify')

const server = restify.createServer({ name: '' })
server.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

server.listen(3000)
