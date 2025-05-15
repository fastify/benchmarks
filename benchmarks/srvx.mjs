import { FastResponse, serve } from 'srvx'

serve({
  fetch: () => FastResponse.json({ hello: 'world' }, {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  }),
  port: 3000
})
