import { readdirSync } from 'node:fs'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

const scenarios = {
  get: {
    serversDirectory: join(root, 'benchmarks'),
    resultsDirectory: join(process.cwd(), 'results'),
    resultsFile: 'benchmark-results.json',
    heading: '# Benchmarks',
    method: 'autocannon -c 100 -d 40 -p 10 localhost:3000',
    request: {}
  },
  post: {
    serversDirectory: join(root, 'benchmarks', 'post'),
    resultsDirectory: join(process.cwd(), 'results', 'post'),
    resultsFile: 'benchmark-results-post.json',
    heading: '# POST Benchmarks',
    method: 'autocannon -c 100 -d 40 -p 10 -m POST -H content-type=application/json -b \'{"hello":"world"}\' localhost:3000',
    request: {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ hello: 'world' })
    }
  }
}

export const names = Object.keys(scenarios)

export function scenario (name = 'get') {
  if (!Object.hasOwn(scenarios, name)) {
    throw new Error(`Unknown scenario "${name}", expected one of: ${names.join(', ')}`)
  }
  return scenarios[name]
}

export function headings () {
  return Object.values(scenarios).map(({ heading }) => heading)
}

export function servers (name) {
  return new Set(readdirSync(scenario(name).serversDirectory)
    .filter((file) => /\.[cm]js$/.test(file))
    .map((file) => parse(file).name))
}
