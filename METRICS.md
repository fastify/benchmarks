# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Tue Mar 01 2022 18:12:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 112.18 | 138.68 |
| 1-startup-routes.js | 111.67 | 120.11 |
| 10-startup-routes-schema.js | 111.04 | 143.05 |
| 10-startup-routes.js | 116.30 | 126.31 |
| 100-startup-routes-schema.js | 116.04 | 186.62 |
| 100-startup-routes.js | 119.50 | 137.42 |
| 1000-startup-routes-schema.js | 140.08 | 594.52 |
| 1000-startup-routes.js | 138.01 | 244.74 |
| 10000-startup-routes-schema.js | 347.08 | 3895.45 |
| 10000-startup-routes.js | 349.42 | 1400.39 |
| startup-listen.js | 120.78 | 129.14 |
