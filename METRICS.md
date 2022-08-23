# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Tue Aug 23 2022 00:22:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 121.03 | 175.01 |
| 1-startup-routes.js | 119.78 | 131.60 |
| 10-startup-routes-schema.js | 121.18 | 186.95 |
| 10-startup-routes.js | 120.59 | 134.07 |
| 100-startup-routes-schema.js | 134.77 | 317.10 |
| 100-startup-routes.js | 133.92 | 160.60 |
| 1000-startup-routes-schema.js | 292.69 | 1377.86 |
| 1000-startup-routes.js | 277.96 | 439.83 |
| 10000-startup-routes-schema.js | 4214.94 | 15465.60 |
| 10000-startup-routes.js | 3498.42 | 6195.12 |
| startup-listen.js | 117.93 | 130.27 |
