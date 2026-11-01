# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.2`
* __Run:__ Sun Nov 01 2026 22:29:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.95 | 131.39 |
| 1-startup-routes.cjs | 97.92 | 109.24 |
| 10-startup-routes-schema.cjs | 97.59 | 135.14 |
| 10-startup-routes.cjs | 98.58 | 110.84 |
| 100-startup-routes-schema.cjs | 102.58 | 142.52 |
| 100-startup-routes.cjs | 105.97 | 124.86 |
| 1000-startup-routes-schema.cjs | 150.23 | 215.99 |
| 1000-startup-routes.cjs | 152.12 | 209.62 |
| 10000-startup-routes-schema.cjs | 382.74 | 677.63 |
| 10000-startup-routes.cjs | 421.37 | 1984.80 |
| startup-listen.cjs | 100.11 | 112.61 |
