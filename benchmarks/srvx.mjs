import { FastResponse, serve } from 'srvx'

serve({
  fetch: () => FastResponse.json({ hello: 'world' }),
  port: 3000
})
