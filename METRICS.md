# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.6`
* __Run:__ Mon Sep 20 2021 18:14:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 161.88 | 199.90 |
| 1-startup-routes.js | 164.18 | 176.19 |
| 10-startup-routes-schema.js | 166.23 | 210.32 |
| 10-startup-routes.js | 166.53 | 180.47 |
| 100-startup-routes-schema.js | 167.30 | 263.30 |
| 100-startup-routes.js | 171.74 | 199.58 |
| 1000-startup-routes-schema.js | 210.52 | 833.36 |
| 1000-startup-routes.js | 202.82 | 380.31 |
| 10000-startup-routes-schema.js | 538.97 | 5128.99 |
| 10000-startup-routes.js | 515.47 | 1966.10 |
| startup-listen.js | 165.40 | 176.22 |
