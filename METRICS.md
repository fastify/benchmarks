# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Fri Jun 10 2022 17:15:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 142.67 | 177.63 |
| 1-startup-routes.js | 144.50 | 155.50 |
| 10-startup-routes-schema.js | 143.76 | 184.52 |
| 10-startup-routes.js | 143.92 | 156.35 |
| 100-startup-routes-schema.js | 148.69 | 240.48 |
| 100-startup-routes.js | 146.60 | 170.66 |
| 1000-startup-routes-schema.js | 193.58 | 791.23 |
| 1000-startup-routes.js | 173.76 | 329.11 |
| 10000-startup-routes-schema.js | 463.32 | 4957.57 |
| 10000-startup-routes.js | 460.08 | 1714.74 |
| startup-listen.js | 155.46 | 166.21 |
