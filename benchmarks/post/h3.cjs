'use strict'

const { H3, readBody, serve } = require('h3')

const app = new H3().post('/', (event) => readBody(event))

serve(app, { port: process.env.PORT || 3000 })
