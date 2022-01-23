# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.3`
* __Run:__ Sun Jan 23 2022 21:24:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 119.81 | 149.07 |
| 1-startup-routes.js | 119.94 | 129.00 |
| 10-startup-routes-schema.js | 120.75 | 154.84 |
| 10-startup-routes.js | 120.32 | 130.78 |
| 100-startup-routes-schema.js | 125.38 | 200.51 |
| 100-startup-routes.js | 122.73 | 141.48 |
| 1000-startup-routes-schema.js | 151.54 | 639.96 |
| 1000-startup-routes.js | 143.90 | 253.54 |
| 10000-startup-routes-schema.js | 370.50 | 4154.33 |
| 10000-startup-routes.js | 367.51 | 1471.62 |
| startup-listen.js | 121.13 | 129.46 |
