# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Mon Oct 31 2022 12:33:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 125.32 | 178.47 |
| 1-startup-routes.js | 126.55 | 138.41 |
| 10-startup-routes-schema.js | 127.78 | 192.89 |
| 10-startup-routes.js | 129.86 | 143.63 |
| 100-startup-routes-schema.js | 143.24 | 327.98 |
| 100-startup-routes.js | 144.67 | 171.47 |
| 1000-startup-routes-schema.js | 343.28 | 1494.92 |
| 1000-startup-routes.js | 324.20 | 486.52 |
| 10000-startup-routes-schema.js | 5254.75 | 16746.19 |
| 10000-startup-routes.js | 5220.52 | 8334.08 |
| startup-listen.js | 128.34 | 140.85 |
