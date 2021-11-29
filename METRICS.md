# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov 29 2021 18:17:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 121.89 | 151.63 |
| 1-startup-routes.js | 123.07 | 132.40 |
| 10-startup-routes-schema.js | 122.51 | 157.16 |
| 10-startup-routes.js | 121.31 | 131.94 |
| 100-startup-routes-schema.js | 124.28 | 201.83 |
| 100-startup-routes.js | 124.97 | 144.10 |
| 1000-startup-routes-schema.js | 153.06 | 652.20 |
| 1000-startup-routes.js | 148.96 | 265.83 |
| 10000-startup-routes-schema.js | 381.59 | 4349.59 |
| 10000-startup-routes.js | 382.84 | 1607.93 |
| startup-listen.js | 124.59 | 133.03 |
