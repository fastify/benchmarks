# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Wed Aug 31 2022 19:41:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 125.46 | 179.67 |
| 1-startup-routes.js | 126.55 | 138.72 |
| 10-startup-routes-schema.js | 126.67 | 193.52 |
| 10-startup-routes.js | 128.07 | 142.00 |
| 100-startup-routes-schema.js | 141.19 | 334.99 |
| 100-startup-routes.js | 141.62 | 170.02 |
| 1000-startup-routes-schema.js | 315.15 | 1457.43 |
| 1000-startup-routes.js | 283.15 | 463.10 |
| 10000-startup-routes-schema.js | 5864.45 | 18025.49 |
| 10000-startup-routes.js | 5205.81 | 7999.90 |
| startup-listen.js | 127.65 | 140.64 |
