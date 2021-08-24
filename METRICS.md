# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.5`
* __Run:__ Tue Aug 24 2021 18:09:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 136.82 | 167.49 |
| 1-startup-routes.js | 132.60 | 142.28 |
| 10-startup-routes-schema.js | 132.48 | 168.20 |
| 10-startup-routes.js | 135.10 | 146.28 |
| 100-startup-routes-schema.js | 138.36 | 222.45 |
| 100-startup-routes.js | 137.80 | 160.22 |
| 1000-startup-routes-schema.js | 164.19 | 685.33 |
| 1000-startup-routes.js | 163.23 | 306.13 |
| 10000-startup-routes-schema.js | 424.56 | 4340.20 |
| 10000-startup-routes.js | 405.35 | 1706.06 |
| startup-listen.js | 139.19 | 148.66 |
