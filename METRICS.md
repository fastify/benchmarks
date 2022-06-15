# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Wed Jun 15 2022 20:21:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 122.22 | 176.81 |
| 1-startup-routes.js | 123.19 | 135.69 |
| 10-startup-routes-schema.js | 122.43 | 191.07 |
| 10-startup-routes.js | 122.46 | 137.38 |
| 100-startup-routes-schema.js | 129.50 | 326.88 |
| 100-startup-routes.js | 128.57 | 170.32 |
| 1000-startup-routes-schema.js | 234.44 | 1432.82 |
| 1000-startup-routes.js | 222.19 | 476.53 |
| 10000-startup-routes-schema.js | 1352.30 | 15860.60 |
| 10000-startup-routes.js | 1223.52 | 7310.07 |
| startup-listen.js | 122.03 | 134.86 |
