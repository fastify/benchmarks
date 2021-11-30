# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Tue Nov 30 2021 18:19:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 117.10 | 146.90 |
| 1-startup-routes.js | 117.56 | 126.86 |
| 10-startup-routes-schema.js | 117.31 | 151.40 |
| 10-startup-routes.js | 118.13 | 128.76 |
| 100-startup-routes-schema.js | 119.94 | 190.50 |
| 100-startup-routes.js | 120.44 | 139.91 |
| 1000-startup-routes-schema.js | 143.66 | 574.31 |
| 1000-startup-routes.js | 140.37 | 260.58 |
| 10000-startup-routes-schema.js | 343.63 | 3586.92 |
| 10000-startup-routes.js | 339.01 | 1325.53 |
| startup-listen.js | 120.36 | 128.92 |
