import { createServer } from 'node:http'
import { defineConfig, Server } from '@adonisjs/http-server'
import { Logger } from '@adonisjs/logger'
import { Emitter } from '@adonisjs/events'
import { Encryption } from '@adonisjs/encryption'
import { Application } from '@adonisjs/application'

const app = new Application(new URL('./', import.meta.url), {
  environment: 'web',
  importer: () => {}
})

await app.init()

const encryption = new Encryption({ secret: 'averylongrandom32charslongsecret' })

const server = new Server(
  app,
  encryption,
  new Emitter(app),
  new Logger({ enabled: false }),
  defineConfig({})
)

server.getRouter().get('/', (ctx) => {
  return ctx.response.send({ hello: 'world' })
})

await server.boot()

createServer(server.handle.bind(server)).listen(3000)
