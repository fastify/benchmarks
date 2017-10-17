'use strict'

const assert = require('assert')
const Trek = require('trek-engine')

const app = new Trek()

app.use(async function ({ res }) {
  res.body = { hello: 'world' }
})

app.on('error', err => {
  assert(err instanceof Error, `non-error thrown: ${err}`)

  if (404 == err.status || err.expose) return

  const msg = err.stack || err.toString()
  console.error()
  console.error(msg.replace(/^/gm, '  '))
  console.error()
})

app.run(3000)
