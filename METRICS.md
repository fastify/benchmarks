# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.6`
* __Run:__ Mon Sep 27 2021 18:12:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 156.08 | 193.49 |
| 1-startup-routes.js | 160.98 | 173.12 |
| 10-startup-routes-schema.js | 159.45 | 202.80 |
| 10-startup-routes.js | 159.83 | 173.30 |
| 100-startup-routes-schema.js | 163.98 | 259.30 |
| 100-startup-routes.js | 163.59 | 189.90 |
| 1000-startup-routes-schema.js | 207.63 | 829.88 |
| 1000-startup-routes.js | 193.10 | 355.03 |
| 10000-startup-routes-schema.js | 513.79 | 5123.76 |
| 10000-startup-routes.js | 487.94 | 1992.74 |
| startup-listen.js | 167.73 | 178.29 |
