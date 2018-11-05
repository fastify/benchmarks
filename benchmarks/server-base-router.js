require('http')
  .createServer(
    require('server-base-router')({
      '@setup' (ctx) {
        ctx.middlewareFunctions = []
      },
      '/': {
        get (req, res) {
          res.setHeader('content-type', 'Content-Type: application/json; charset=utf-8')
          res.json({ hello: 'world' })
        }
      }
    })
  )
  .listen(3000)
