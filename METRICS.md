# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.3`
* __Run:__ Mon Feb 07 2022 18:45:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 121.19 | 151.90 |
| 1-startup-routes.js | 120.60 | 129.60 |
| 10-startup-routes-schema.js | 129.76 | 165.05 |
| 10-startup-routes.js | 121.83 | 132.69 |
| 100-startup-routes-schema.js | 131.19 | 208.54 |
| 100-startup-routes.js | 125.95 | 145.11 |
| 1000-startup-routes-schema.js | 166.10 | 673.42 |
| 1000-startup-routes.js | 151.34 | 272.96 |
| 10000-startup-routes-schema.js | 388.18 | 4329.04 |
| 10000-startup-routes.js | 384.34 | 1464.56 |
| startup-listen.js | 126.04 | 134.52 |
