'use strict'

const boot = require('@loopback/boot')
const rest = require('@loopback/rest')
const serviceProxy = require('@loopback/service-proxy')

class TrylbApplication extends boot.BootMixin(serviceProxy.ServiceMixin(rest.RestApplication)) {
  constructor (options = {}) {
    super(options)

    this.projectRoot = __dirname

    this.bootOptions = {
      controllers: {
        dirs: ['loopback_controllers'],
        extensions: ['.controller.js'],
        nested: true
      }
    }
  }
}

async function main (options = {}) {
  const app = new TrylbApplication(options)
  await app.boot()
  await app.start()
  return app
}

const config = {
  rest: {
    port: 3000,
    host: process.env.HOST
  }
}

main(config).catch(err => {
  console.error('Cannot start the application.', err)
  process.exit(1)
})
