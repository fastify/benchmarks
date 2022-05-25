# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.2`
* __Run:__ Wed May 25 2022 07:14:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 143.93 | 178.67 |
| 1-startup-routes.js | 144.85 | 155.76 |
| 10-startup-routes-schema.js | 143.89 | 184.63 |
| 10-startup-routes.js | 148.52 | 161.34 |
| 100-startup-routes-schema.js | 148.39 | 238.74 |
| 100-startup-routes.js | 152.96 | 177.89 |
| 1000-startup-routes-schema.js | 182.79 | 778.81 |
| 1000-startup-routes.js | 178.60 | 335.23 |
| 10000-startup-routes-schema.js | 455.87 | 5010.46 |
| 10000-startup-routes.js | 461.97 | 1783.76 |
| startup-listen.js | 146.63 | 156.74 |
