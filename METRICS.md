# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Thu Dec 15 2022 15:29:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 133.05 | 187.31 |
| 1-startup-routes.js | 128.43 | 138.59 |
| 10-startup-routes-schema.js | 137.06 | 204.20 |
| 10-startup-routes.js | 131.48 | 143.62 |
| 100-startup-routes-schema.js | 149.61 | 316.99 |
| 100-startup-routes.js | 146.42 | 168.82 |
| 1000-startup-routes-schema.js | 353.47 | 1462.34 |
| 1000-startup-routes.js | 324.66 | 457.75 |
| 10000-startup-routes-schema.js | 6584.63 | 18357.39 |
| 10000-startup-routes.js | 5509.50 | 8803.31 |
| startup-listen.js | 127.08 | 138.54 |
