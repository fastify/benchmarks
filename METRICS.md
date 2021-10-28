# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Thu Oct 28 2021 18:03:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 137.99 | 170.66 |
| 1-startup-routes.js | 140.44 | 150.85 |
| 10-startup-routes-schema.js | 140.31 | 180.44 |
| 10-startup-routes.js | 135.87 | 147.75 |
| 100-startup-routes-schema.js | 146.17 | 238.51 |
| 100-startup-routes.js | 142.73 | 166.65 |
| 1000-startup-routes-schema.js | 179.89 | 769.83 |
| 1000-startup-routes.js | 169.12 | 310.16 |
| 10000-startup-routes-schema.js | 451.13 | 5026.78 |
| 10000-startup-routes.js | 437.62 | 1910.66 |
| startup-listen.js | 134.95 | 144.29 |
