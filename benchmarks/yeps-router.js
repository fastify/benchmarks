const http = require('http')

const App = require('yeps')
const Router = require('yeps-router')

const app = new App()
const router = new Router()

router.get('/').then(async (ctx) => {
  ctx.res.statusCode = 200
  ctx.res.setHeader('content-type', 'application/json; charset=utf-8')
  ctx.res.end(JSON.stringify({ hello: 'world' }))
})

app.then(router.resolve())

http.createServer(app.resolve()).listen(3000)
