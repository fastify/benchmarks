'use strict'

const cero = require('0http')
const { router, server } = cero()

router.get('/', (req, res) => {
  res.end(JSON.stringify({ hello: 'world' }))
})

server.listen(3000)
