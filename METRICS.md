# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Wed Dec 08 2021 18:18:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 168.40 | 209.04 |
| 1-startup-routes.js | 163.94 | 176.22 |
| 10-startup-routes-schema.js | 170.25 | 219.52 |
| 10-startup-routes.js | 166.79 | 181.92 |
| 100-startup-routes-schema.js | 175.05 | 287.69 |
| 100-startup-routes.js | 169.85 | 198.55 |
| 1000-startup-routes-schema.js | 216.24 | 908.52 |
| 1000-startup-routes.js | 198.65 | 366.43 |
| 10000-startup-routes-schema.js | 536.96 | 5666.52 |
| 10000-startup-routes.js | 521.32 | 2031.79 |
| startup-listen.js | 170.59 | 183.71 |
