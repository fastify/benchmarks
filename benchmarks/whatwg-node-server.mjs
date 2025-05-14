import { createServer } from 'node:http'
import { createServerAdapter, Response } from '@whatwg-node/server'

createServer(
  createServerAdapter(() => Response.json({ hello: 'world' }))
).listen(3000)
