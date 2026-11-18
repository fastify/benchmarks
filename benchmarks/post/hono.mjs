import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.post('/', async (c) => c.json(await c.req.json()))

serve(app)
