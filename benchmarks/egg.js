'use strict'

const { Application } = require('egg')
const app = new Application()

app.config.keys = 'my secret keys'

app.router.get('/', ctx => {
  ctx.body = JSON.stringify({hello:"world"})
})

app.listen(3000)
