# Metrics
* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v14.15.4`
* __Run:__ Sun Aug 15 2021 09:17:01 GMT-0300 (Brasilia Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 84.52 | 104.60 |
| 1-startup-routes.js | 90.66 | 96.85 |
| 10-startup-routes-schema.js | 90.01 | 113.84 |
| 10-startup-routes.js | 86.10 | 93.13 |
| 100-startup-routes-schema.js | 86.83 | 136.79 |
| 100-startup-routes.js | 86.30 | 100.59 |
| 1000-startup-routes-schema.js | 113.99 | 419.18 |
| 1000-startup-routes.js | 103.09 | 188.12 |
| 10000-startup-routes-schema.js | 272.46 | 2265.56 |
| 10000-startup-routes.js | 273.40 | 799.55 |
| startup-listen.js | 87.44 | 93.07 |
