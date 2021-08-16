# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.4`
* __Run:__ Mon Aug 16 2021 13:25:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 140.55 | 172.11 |
| 1-startup-routes.js | 137.26 | 147.29 |
| 10-startup-routes-schema.js | 140.38 | 177.28 |
| 10-startup-routes.js | 137.66 | 149.40 |
| 100-startup-routes-schema.js | 141.54 | 224.81 |
| 100-startup-routes.js | 143.03 | 164.37 |
| 1000-startup-routes-schema.js | 182.00 | 729.84 |
| 1000-startup-routes.js | 162.60 | 300.44 |
| 10000-startup-routes-schema.js | 449.31 | 4558.68 |
| 10000-startup-routes.js | 423.52 | 1602.83 |
| startup-listen.js | 141.05 | 150.53 |
