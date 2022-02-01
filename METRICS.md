# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.3`
* __Run:__ Tue Feb 01 2022 21:17:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 136.32 | 169.24 |
| 1-startup-routes.js | 138.14 | 149.03 |
| 10-startup-routes-schema.js | 139.06 | 179.65 |
| 10-startup-routes.js | 139.43 | 151.60 |
| 100-startup-routes-schema.js | 141.92 | 230.25 |
| 100-startup-routes.js | 141.20 | 164.08 |
| 1000-startup-routes-schema.js | 178.41 | 755.35 |
| 1000-startup-routes.js | 171.48 | 306.21 |
| 10000-startup-routes-schema.js | 461.28 | 4852.80 |
| 10000-startup-routes.js | 426.43 | 1817.16 |
| startup-listen.js | 137.34 | 146.86 |
