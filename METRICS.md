# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.14.1`
* __Run:__ Wed Apr 08 2026 19:07:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 83.87 | 112.40 |
| 1-startup-routes.cjs | 79.66 | 89.20 |
| 10-startup-routes-schema.cjs | 84.52 | 114.00 |
| 10-startup-routes.cjs | 82.14 | 92.99 |
| 100-startup-routes-schema.cjs | 89.44 | 122.02 |
| 100-startup-routes.cjs | 89.78 | 106.98 |
| 1000-startup-routes-schema.cjs | 156.44 | 217.86 |
| 1000-startup-routes.cjs | 169.80 | 222.03 |
| 10000-startup-routes-schema.cjs | 4817.05 | 4986.94 |
| 10000-startup-routes.cjs | 4422.61 | 6289.10 |
| startup-listen.cjs | 83.13 | 94.22 |
