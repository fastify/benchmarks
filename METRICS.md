# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Mon Dec 13 2021 12:58:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 120.60 | 149.75 |
| 1-startup-routes.js | 124.44 | 133.85 |
| 10-startup-routes-schema.js | 120.93 | 155.13 |
| 10-startup-routes.js | 125.12 | 136.02 |
| 100-startup-routes-schema.js | 125.03 | 201.52 |
| 100-startup-routes.js | 128.99 | 148.71 |
| 1000-startup-routes-schema.js | 153.59 | 752.39 |
| 1000-startup-routes.js | 151.27 | 274.24 |
| 10000-startup-routes-schema.js | 516.75 | 5595.76 |
| 10000-startup-routes.js | 397.31 | 1508.73 |
| startup-listen.js | 129.71 | 138.62 |
