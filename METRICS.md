# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.16.0`
* __Run:__ Tue Jun 02 2026 05:58:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 85.83 | 116.56 |
| 1-startup-routes.cjs | 86.49 | 96.31 |
| 10-startup-routes-schema.cjs | 88.04 | 119.27 |
| 10-startup-routes.cjs | 89.63 | 100.59 |
| 100-startup-routes-schema.cjs | 95.17 | 129.98 |
| 100-startup-routes.cjs | 93.43 | 111.35 |
| 1000-startup-routes-schema.cjs | 179.66 | 239.18 |
| 1000-startup-routes.cjs | 181.10 | 234.90 |
| 10000-startup-routes-schema.cjs | 3275.86 | 3470.81 |
| 10000-startup-routes.cjs | 3207.61 | 4536.15 |
| startup-listen.cjs | 87.75 | 98.61 |
