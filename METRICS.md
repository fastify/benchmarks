# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.3`
* __Run:__ Thu Jun 26 2025 21:06:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.94 | 129.59 |
| 1-startup-routes.cjs | 97.25 | 107.77 |
| 10-startup-routes-schema.cjs | 95.51 | 132.16 |
| 10-startup-routes.cjs | 98.14 | 110.48 |
| 100-startup-routes-schema.cjs | 109.26 | 149.22 |
| 100-startup-routes.cjs | 109.23 | 130.62 |
| 1000-startup-routes-schema.cjs | 264.53 | 368.15 |
| 1000-startup-routes.cjs | 263.58 | 382.32 |
| 10000-startup-routes-schema.cjs | 4469.22 | 4744.00 |
| 10000-startup-routes.cjs | 4853.82 | 6113.04 |
| startup-listen.cjs | 99.01 | 110.16 |
