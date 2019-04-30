'use strict'

const { dependencies } = require('../package')

const packages = {
  bare: { version: '10.13.0' },
  connect: {},
  'connect-router': { extra: true, package: 'router', hasRouter: true },
  'egg.js': { hasRouter: true, package: 'egg' },
  express: { hasRouter: true },
  'express-route-prefix': { extra: true, package: 'express', hasRouter: true },
  'express-with-middlewares': {
    extra: true,
    package: 'express',
    hasRouter: true
  },
  fastify: { checked: true, hasRouter: true },
  'fastify-big-json': { extra: true, package: 'fastify', hasRouter: true },
  foxify: { hasRouter: true },
  hapi: { hasRouter: true, package: '@hapi/hapi' },
  koa: {},
  'koa-router': { extra: true, hasRouter: true },
  micro: { extra: true },
  microrouter: { extra: true, hasRouter: true },
  'micro-route': { extra: true, hasRouter: true },
  polka: { hasRouter: true },
  polkadot: { hasRouter: false },
  rayo: { hasRouter: true },
  restify: { hasRouter: true },
  spirit: { extra: true },
  'spirit-router': { extra: true, hasRouter: true },
  'take-five': { hasRouter: true },
  'total.js': { hasRouter: true },
  'trek-engine': { extra: true },
  'trek-router': { extra: true, hasRouter: true },
  vapr: { hasRouter: true },
  'server-base': {},
  'server-base-router': { hasRouter: true },
  yeps: {},
  'yeps-router': { extra: true, package: 'yeps', hasRouter: true }
}

let choices = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(require.resolve(module + '/package.json')).version
    packages[pkg].version = version
  }
  choices.push(pkg)
})

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices
      .map(c => {
        return extra === !!packages[c].extra
          ? Object.assign({}, packages[c], { name: c })
          : null
      })
      .filter(c => c)
  },

  info: module => {
    return packages[module]
  }
}
