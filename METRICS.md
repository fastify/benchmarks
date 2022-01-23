# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.3`
* __Run:__ Sun Jan 23 2022 12:38:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 125.30 | 155.58 |
| 1-startup-routes.js | 124.39 | 133.77 |
| 10-startup-routes-schema.js | 125.52 | 160.78 |
| 10-startup-routes.js | 124.66 | 135.49 |
| 100-startup-routes-schema.js | 128.16 | 205.89 |
| 100-startup-routes.js | 126.99 | 146.49 |
| 1000-startup-routes-schema.js | 157.29 | 664.39 |
| 1000-startup-routes.js | 151.65 | 266.96 |
| 10000-startup-routes-schema.js | 386.44 | 4218.72 |
| 10000-startup-routes.js | 388.07 | 1492.65 |
| startup-listen.js | 127.72 | 136.43 |
