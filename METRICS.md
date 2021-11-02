# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Tue Nov 02 2021 18:13:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 158.70 | 197.23 |
| 1-startup-routes.js | 162.22 | 175.20 |
| 10-startup-routes-schema.js | 158.15 | 206.38 |
| 10-startup-routes.js | 157.97 | 171.97 |
| 100-startup-routes-schema.js | 165.61 | 270.47 |
| 100-startup-routes.js | 160.32 | 186.87 |
| 1000-startup-routes-schema.js | 209.19 | 909.76 |
| 1000-startup-routes.js | 196.32 | 368.91 |
| 10000-startup-routes-schema.js | 526.88 | 5567.94 |
| 10000-startup-routes.js | 511.31 | 2082.47 |
| startup-listen.js | 159.96 | 170.67 |
