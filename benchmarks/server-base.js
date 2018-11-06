require('server-base')({
  '@setup' (ctx) {
    ctx.middlewareFunctions = []
  },
  '/': {
    get (req, res) {
      res.setHeader('content-type', 'application/json; charset=utf-8')
      res.json({ hello: 'world' })
    }
  }
}).start(3000)
