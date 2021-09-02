# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.6`
* __Run:__ Thu Sep 02 2021 09:17:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 149.15 | 183.80 |
| 1-startup-routes.js | 146.28 | 157.24 |
| 10-startup-routes-schema.js | 150.32 | 190.39 |
| 10-startup-routes.js | 149.22 | 162.12 |
| 100-startup-routes-schema.js | 155.46 | 244.53 |
| 100-startup-routes.js | 158.53 | 186.00 |
| 1000-startup-routes-schema.js | 185.08 | 785.71 |
| 1000-startup-routes.js | 183.44 | 340.46 |
| 10000-startup-routes-schema.js | 502.43 | 4950.73 |
| 10000-startup-routes.js | 476.61 | 1889.57 |
| startup-listen.js | 150.15 | 160.11 |
