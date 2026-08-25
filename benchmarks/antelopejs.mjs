import { construct, start } from '@antelopejs/api'
import { Controller, Get, HTTPResult, Listen } from '@antelopejs/interface-api'
import { ImplementInterface } from '@antelopejs/interface-core'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const Runtime = require('@antelopejs/interface-core/runtime')

ImplementInterface(Runtime, {
  GetRuntimeInfo: () => ({ dev: false, projectPath: process.cwd(), env: 'benchmark' }),
  RegisterDevServer: () => {}
})

class BenchmarkController extends Controller('/') {
  index () {
    return new HTTPResult(
      200,
      { hello: 'world' },
      'application/json; charset=utf-8'
    )
  }
}

Get('')(
  BenchmarkController.prototype,
  'index',
  Object.getOwnPropertyDescriptor(BenchmarkController.prototype, 'index')
)

await construct({
  servers: [{ protocol: 'http', host: '::', port: 3000 }],
  strictPort: true
})
start()
await Listen()
