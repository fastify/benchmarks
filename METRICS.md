# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.0`
* __Run:__ Fri Oct 15 2021 18:14:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 164.43 | 202.48 |
| 1-startup-routes.js | 175.15 | 188.15 |
| 10-startup-routes-schema.js | 165.48 | 210.35 |
| 10-startup-routes.js | 175.99 | 190.19 |
| 100-startup-routes-schema.js | 170.42 | 269.92 |
| 100-startup-routes.js | 178.88 | 205.20 |
| 1000-startup-routes-schema.js | 211.74 | 868.26 |
| 1000-startup-routes.js | 212.00 | 394.09 |
| 10000-startup-routes-schema.js | 545.02 | 5566.81 |
| 10000-startup-routes.js | 559.12 | 2233.92 |
| startup-listen.js | 179.89 | 192.30 |
