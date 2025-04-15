'use strict'

const { initTRPC } = require('@trpc/server')
const { fastifyTRPCPlugin } = require('@trpc/server/adapters/fastify')
const fastify = require('fastify')()

// https://trpc.io/docs/v11/router
const t = initTRPC.create()
const appRouter = t.router({
  hello: t.procedure.query(() => {
    return { hello: 'world' }
  }),
})

fastify.register(fastifyTRPCPlugin, {
  prefix: '',
  trpcOptions: { router: appRouter, createContext: () => {} }
})

// Route URL is composed by prefix + query() first string param.
// In this benchmark, assigning an empty string to both of them is a way for exposing URL "/".
// A more realistic case would be having prefix="/trpc" and query('tasks'),
// which would expose the URL "/trpc/tasks"
fastify.listen({ port: 3000, host: '127.0.0.1' })
