# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Sun Dec 26 2021 02:48:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 119.47 | 148.73 |
| 1-startup-routes.js | 120.34 | 129.46 |
| 10-startup-routes-schema.js | 120.15 | 154.28 |
| 10-startup-routes.js | 120.31 | 130.78 |
| 100-startup-routes-schema.js | 123.20 | 199.26 |
| 100-startup-routes.js | 122.66 | 141.65 |
| 1000-startup-routes-schema.js | 151.82 | 646.59 |
| 1000-startup-routes.js | 145.67 | 263.94 |
| 10000-startup-routes-schema.js | 370.24 | 4328.05 |
| 10000-startup-routes.js | 376.24 | 1640.56 |
| startup-listen.js | 122.51 | 130.94 |
