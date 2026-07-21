'use strict'

const { H3, serve } = require('h3')

const app = new H3().get('/', () => ({ hello: 'world' }))

serve(app, { port: process.env.PORT || 3000 })
