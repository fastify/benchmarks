# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 13 2022 18:13:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 190.89 | 267.13 |
| 1-startup-routes.js | 190.07 | 208.02 |
| 10-startup-routes-schema.js | 186.09 | 281.16 |
| 10-startup-routes.js | 192.63 | 215.06 |
| 100-startup-routes-schema.js | 198.19 | 479.62 |
| 100-startup-routes.js | 195.49 | 252.79 |
| 1000-startup-routes-schema.js | 378.06 | 2158.68 |
| 1000-startup-routes.js | 327.10 | 731.61 |
| 10000-startup-routes-schema.js | 2413.63 | 25280.31 |
| 10000-startup-routes.js | 2156.59 | 11994.57 |
| startup-listen.js | 184.81 | 203.48 |
