const http = require('http')
const App = require('yeps')

const app = new App()

app.then(async ctx => {
  ctx.res.statusCode = 200
  ctx.res.setHeader('content-type', 'application/json; charset=utf-8')
  ctx.res.end(JSON.stringify({ hello: 'world' }))
})

http.createServer(app.resolve()).listen(3000)
