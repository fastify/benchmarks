# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Mon Dec 13 2021 18:21:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 142.98 | 177.76 |
| 1-startup-routes.js | 142.86 | 154.70 |
| 10-startup-routes-schema.js | 145.28 | 186.79 |
| 10-startup-routes.js | 145.50 | 158.13 |
| 100-startup-routes-schema.js | 148.85 | 241.78 |
| 100-startup-routes.js | 151.28 | 177.17 |
| 1000-startup-routes-schema.js | 185.95 | 806.36 |
| 1000-startup-routes.js | 178.89 | 330.23 |
| 10000-startup-routes-schema.js | 475.67 | 5045.73 |
| 10000-startup-routes.js | 441.42 | 1855.67 |
| startup-listen.js | 144.79 | 155.23 |
