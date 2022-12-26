'use strict'

import pkgJson from '../package.json' assert { type: 'json' }
import { createRequire } from 'module';
import path from 'path';

const packages = {
  '0http': { hasRouter: true, package: '0http' },
  bare: { version: '10.13.0' },
  connect: {},
  'connect-router': { extra: true, package: 'router', hasRouter: true },
  express: { hasRouter: true },
  'express-with-middlewares': { extra: true, package: 'express', hasRouter: true },
  fastify: { checked: true, hasRouter: true },
  'fastify-big-json': { extra: true, package: 'fastify', hasRouter: true },
  foxify: { hasRouter: true },
  galatajs: { hasRouter: true, package: '@galatajs/app' },
  h3: { package: 'h3' },
  'h3-router': { hasRouter: true, package: 'h3' },
  hapi: { hasRouter: true, package: '@hapi/hapi' },
  koa: {},
  'koa-isomorphic-router': { extra: true, hasRouter: true },
  'koa-router': { extra: true, hasRouter: true },
  micro: { extra: true },
  'micro-route': { extra: true, hasRouter: true },
  microrouter: { extra: true, hasRouter: true },
  polka: { hasRouter: true },
  polkadot: { hasRouter: false },
  restana: { hasRouter: true, package: 'restana' },
  restify: { hasRouter: true },
  'server-base': {},
  'server-base-router': { hasRouter: true },
  spirit: { extra: true },
  'spirit-router': { extra: true, hasRouter: true },
  'take-five': { hasRouter: true },
  'total.js': { hasRouter: true },
  'trpc-router': { extra: true, hasRouter: true, package: '@trpc/server' },
  vapr: { hasRouter: true },
  yeps: {},
  'yeps-router': { extra: true, package: 'yeps', hasRouter: true }
}

const require = createRequire(import.meta.url);

const _choices = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = pkgJson.dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(path.resolve(`node_modules/${module}/package.json`)).version
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
