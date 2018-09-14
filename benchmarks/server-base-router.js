require('http')
  .createServer(
    require('server-base-router')({
      '@setup' (ctx) {
        ctx.middlewareFunctions = []
      },
      '/': {
        get (req, res) {
          res.json({ hello: 'world' })
        }
      }
    })
  )
  .listen(3000)
