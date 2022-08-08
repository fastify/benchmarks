# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug 08 2022 18:49:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 149.04 | 213.66 |
| 1-startup-routes.js | 148.23 | 162.06 |
| 10-startup-routes-schema.js | 152.23 | 231.03 |
| 10-startup-routes.js | 148.61 | 164.88 |
| 100-startup-routes-schema.js | 166.70 | 394.92 |
| 100-startup-routes.js | 167.16 | 200.68 |
| 1000-startup-routes-schema.js | 385.39 | 1753.79 |
| 1000-startup-routes.js | 341.92 | 565.37 |
| 10000-startup-routes-schema.js | 6959.26 | 21216.85 |
| 10000-startup-routes.js | 5446.66 | 8417.03 |
| startup-listen.js | 144.61 | 161.33 |
