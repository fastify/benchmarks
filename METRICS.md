# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug 08 2022 18:30:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 144.30 | 209.07 |
| 1-startup-routes.js | 148.34 | 162.35 |
| 10-startup-routes-schema.js | 150.43 | 230.69 |
| 10-startup-routes.js | 147.70 | 163.98 |
| 100-startup-routes-schema.js | 169.62 | 396.10 |
| 100-startup-routes.js | 163.83 | 195.12 |
| 1000-startup-routes-schema.js | 364.09 | 1696.96 |
| 1000-startup-routes.js | 349.49 | 546.48 |
| 10000-startup-routes-schema.js | 6190.94 | 20038.08 |
| 10000-startup-routes.js | 5820.68 | 8984.70 |
| startup-listen.js | 152.76 | 167.49 |
