# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Tue Nov 01 2022 07:07:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 151.36 | 215.37 |
| 1-startup-routes.js | 151.78 | 166.14 |
| 10-startup-routes-schema.js | 151.68 | 228.63 |
| 10-startup-routes.js | 156.57 | 172.98 |
| 100-startup-routes-schema.js | 168.98 | 392.43 |
| 100-startup-routes.js | 179.52 | 215.26 |
| 1000-startup-routes-schema.js | 415.95 | 1766.98 |
| 1000-startup-routes.js | 405.37 | 604.00 |
| 10000-startup-routes-schema.js | 6894.79 | 20342.27 |
| 10000-startup-routes.js | 6601.59 | 10457.50 |
| startup-listen.js | 151.47 | 166.62 |
