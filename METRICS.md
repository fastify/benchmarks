# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Thu Jan 06 2022 13:46:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 120.32 | 149.80 |
| 1-startup-routes.js | 121.77 | 131.01 |
| 10-startup-routes-schema.js | 120.69 | 154.91 |
| 10-startup-routes.js | 122.38 | 132.98 |
| 100-startup-routes-schema.js | 123.54 | 199.98 |
| 100-startup-routes.js | 125.31 | 144.40 |
| 1000-startup-routes-schema.js | 153.12 | 646.48 |
| 1000-startup-routes.js | 147.98 | 262.07 |
| 10000-startup-routes-schema.js | 381.12 | 4192.96 |
| 10000-startup-routes.js | 384.03 | 1459.00 |
| startup-listen.js | 124.26 | 132.95 |
