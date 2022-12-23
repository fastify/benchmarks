# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Dec 23 2022 02:42:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 142.44 | 199.92 |
| 1-startup-routes.js | 143.72 | 155.13 |
| 10-startup-routes-schema.js | 142.55 | 213.07 |
| 10-startup-routes.js | 146.53 | 160.08 |
| 100-startup-routes-schema.js | 160.25 | 338.70 |
| 100-startup-routes.js | 159.23 | 183.08 |
| 1000-startup-routes-schema.js | 405.71 | 1549.17 |
| 1000-startup-routes.js | 364.05 | 511.72 |
| 10000-startup-routes-schema.js | 7071.36 | 20210.25 |
| 10000-startup-routes.js | 6320.66 | 9695.50 |
| startup-listen.js | 148.59 | 160.99 |
