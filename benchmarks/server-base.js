require('server-base')({
  '@setup' (ctx) {
    ctx.middlewareFunctions = []
  },
  '/': {
    get (req, res) {
      res.json({ hello: 'world' })
    }
  }
}).start(3000)
