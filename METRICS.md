# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug 08 2022 18:56:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 126.58 | 182.24 |
| 1-startup-routes.js | 125.24 | 137.57 |
| 10-startup-routes-schema.js | 126.72 | 194.60 |
| 10-startup-routes.js | 127.28 | 141.05 |
| 100-startup-routes-schema.js | 141.34 | 335.47 |
| 100-startup-routes.js | 140.60 | 169.47 |
| 1000-startup-routes-schema.js | 312.65 | 1456.85 |
| 1000-startup-routes.js | 284.82 | 460.62 |
| 10000-startup-routes-schema.js | 5132.73 | 17048.67 |
| 10000-startup-routes.js | 5107.81 | 7505.59 |
| startup-listen.js | 125.13 | 138.43 |
