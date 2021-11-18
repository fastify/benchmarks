# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Thu Nov 18 2021 18:17:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 131.41 | 163.27 |
| 1-startup-routes.js | 130.58 | 140.39 |
| 10-startup-routes-schema.js | 132.92 | 169.17 |
| 10-startup-routes.js | 130.97 | 142.74 |
| 100-startup-routes-schema.js | 132.38 | 217.11 |
| 100-startup-routes.js | 136.31 | 158.11 |
| 1000-startup-routes-schema.js | 165.65 | 727.93 |
| 1000-startup-routes.js | 164.75 | 307.03 |
| 10000-startup-routes-schema.js | 439.16 | 4682.87 |
| 10000-startup-routes.js | 417.17 | 1824.51 |
| startup-listen.js | 142.47 | 151.78 |
