# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Sat Oct 15 2022 12:46:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 165.27 | 236.95 |
| 1-startup-routes.js | 165.62 | 181.37 |
| 10-startup-routes-schema.js | 167.47 | 254.19 |
| 10-startup-routes.js | 174.45 | 192.97 |
| 100-startup-routes-schema.js | 195.25 | 437.74 |
| 100-startup-routes.js | 200.20 | 235.83 |
| 1000-startup-routes-schema.js | 468.31 | 1958.98 |
| 1000-startup-routes.js | 457.27 | 691.86 |
| 10000-startup-routes-schema.js | 6737.94 | 21673.52 |
| 10000-startup-routes.js | 6491.51 | 10469.10 |
| startup-listen.js | 168.93 | 188.18 |
