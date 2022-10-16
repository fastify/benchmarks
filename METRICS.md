# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Sun Oct 16 2022 20:17:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 136.89 | 194.35 |
| 1-startup-routes.js | 135.09 | 147.52 |
| 10-startup-routes-schema.js | 134.49 | 203.40 |
| 10-startup-routes.js | 134.34 | 149.12 |
| 100-startup-routes-schema.js | 151.14 | 353.62 |
| 100-startup-routes.js | 154.75 | 184.87 |
| 1000-startup-routes-schema.js | 369.98 | 1596.30 |
| 1000-startup-routes.js | 347.69 | 520.26 |
| 10000-startup-routes-schema.js | 6400.53 | 19787.86 |
| 10000-startup-routes.js | 6258.42 | 9334.53 |
| startup-listen.js | 138.06 | 152.25 |
