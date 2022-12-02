# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.21.1`
* __Run:__ Fri Dec 02 2022 01:08:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 151.67 | 214.92 |
| 1-startup-routes.js | 152.34 | 167.44 |
| 10-startup-routes-schema.js | 153.13 | 230.54 |
| 10-startup-routes.js | 158.97 | 175.88 |
| 100-startup-routes-schema.js | 176.64 | 402.17 |
| 100-startup-routes.js | 180.65 | 215.18 |
| 1000-startup-routes-schema.js | 435.36 | 1832.07 |
| 1000-startup-routes.js | 415.64 | 621.26 |
| 10000-startup-routes-schema.js | 7051.72 | 21309.98 |
| 10000-startup-routes.js | 5970.73 | 9798.29 |
| startup-listen.js | 149.16 | 164.47 |
