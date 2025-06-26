import pkgJson from '../package.json' with { type: 'json' }
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(import.meta.url);

const packages = {
  '0http': { hasRouter: true, package: '0http' },
  'adonisjs': { hasRouter: true, package: '@adonisjs/http-server' },
  connect: {},
  'connect-router': { extra: true, package: 'router', hasRouter: true },
  express: { hasRouter: true },
  'express-with-middlewares': { extra: true, package: 'express', hasRouter: true },
  fastify: { checked: true, hasRouter: true },
  'fastify-big-json': { extra: true, package: 'fastify', hasRouter: true },
  h3: { package: 'h3' },
  'h3-router': { hasRouter: true, package: 'h3' },
  hapi: { hasRouter: true, package: '@hapi/hapi' },
  hono: { hasRouter: true, package: 'hono' },
  koa: {},
  'koa-router': { extra: true, hasRouter: true, package: '@koa/router' },
  micro: { extra: true },
  'micro-route': { extra: true, hasRouter: true },
  microrouter: { extra: true, hasRouter: true },
  'node-http': { version: process.version },
  polka: { hasRouter: true },
  polkadot: { hasRouter: false },
  rayo: { hasRouter: true },
  restana: { hasRouter: true, package: 'restana' },
  restify: { hasRouter: true },
  'server-base': {},
  'server-base-router': { hasRouter: true },
	'srvx': { package: 'srvx' },
  'take-five': { hasRouter: true },
  'trpc-router': { extra: true, hasRouter: true, package: '@trpc/server' },
  'whatwg-node-server': { package: '@whatwg-node/server' },
}

const _choices = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = pkgJson.dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(resolve(`node_modules/${module}/package.json`)).version
    packages[pkg].version = version
  }
  _choices.push(pkg)
})

export const choices = _choices.sort()
export function list(extra = false) {
  return _choices
    .map(c => {
      return extra === !!packages[c].extra
        ? Object.assign({}, packages[c], { name: c })
        : null
    })
    .filter(c => c)
}
export function info(module) {
  return packages[module]
}
