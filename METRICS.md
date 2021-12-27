# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Mon Dec 27 2021 18:11:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 140.91 | 175.19 |
| 1-startup-routes.js | 141.49 | 152.67 |
| 10-startup-routes-schema.js | 139.42 | 179.08 |
| 10-startup-routes.js | 143.99 | 156.94 |
| 100-startup-routes-schema.js | 141.46 | 234.02 |
| 100-startup-routes.js | 152.99 | 176.93 |
| 1000-startup-routes-schema.js | 186.72 | 786.94 |
| 1000-startup-routes.js | 168.38 | 303.75 |
| 10000-startup-routes-schema.js | 453.79 | 4950.46 |
| 10000-startup-routes.js | 434.57 | 1799.50 |
| startup-listen.js | 158.50 | 169.80 |
