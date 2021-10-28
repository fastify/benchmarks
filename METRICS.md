# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Thu Oct 28 2021 18:37:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 150.08 | 188.71 |
| 1-startup-routes.js | 157.43 | 169.90 |
| 10-startup-routes-schema.js | 155.88 | 200.75 |
| 10-startup-routes.js | 154.83 | 169.31 |
| 100-startup-routes-schema.js | 162.13 | 261.26 |
| 100-startup-routes.js | 157.16 | 183.17 |
| 1000-startup-routes-schema.js | 191.11 | 827.35 |
| 1000-startup-routes.js | 186.94 | 351.71 |
| 10000-startup-routes-schema.js | 496.11 | 5413.00 |
| 10000-startup-routes.js | 499.09 | 2102.00 |
| startup-listen.js | 157.15 | 169.00 |
