'use strict'

const trpc = require('@trpc/server')
const { fastifyTRPCPlugin } = require('@trpc/server/adapters/fastify')

const fastify = require('fastify')()

const appRouter = trpc
  .router()
  .query('', {
    resolve: () => {
      return { hello: 'world' }
    },
  })

fastify.register(fastifyTRPCPlugin, {
  prefix: '',
  trpcOptions: { router: appRouter, createContext: () => {} },
})

fastify.listen({ port: 3000, host: '127.0.0.1' })
