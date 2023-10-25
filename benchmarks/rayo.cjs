'use strict'

async function run () {
  const { default: rayo } = await import('rayo')

  const app = rayo({ port: 3000 })

  app.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ hello: 'world' }))
  })

  app.start()
}

run()
