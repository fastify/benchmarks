# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Mon Oct 17 2022 11:15:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 127.51 | 182.53 |
| 1-startup-routes.js | 128.23 | 140.30 |
| 10-startup-routes-schema.js | 128.86 | 195.31 |
| 10-startup-routes.js | 130.14 | 144.63 |
| 100-startup-routes-schema.js | 147.74 | 338.42 |
| 100-startup-routes.js | 146.69 | 174.95 |
| 1000-startup-routes-schema.js | 352.15 | 1502.38 |
| 1000-startup-routes.js | 333.50 | 497.74 |
| 10000-startup-routes-schema.js | 5720.06 | 17863.87 |
| 10000-startup-routes.js | 5472.60 | 8820.24 |
| startup-listen.js | 127.83 | 140.51 |
