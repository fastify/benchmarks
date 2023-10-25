# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.18.2`
* __Run:__ Wed Oct 25 2023 04:04:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 143.86 | 198.47 |
| 1-startup-routes.cjs | 142.26 | 155.21 |
| 10-startup-routes-schema.cjs | 146.00 | 213.79 |
| 10-startup-routes.cjs | 149.35 | 164.12 |
| 100-startup-routes-schema.cjs | 160.47 | 333.72 |
| 100-startup-routes.cjs | 159.81 | 181.96 |
| 1000-startup-routes-schema.cjs | 407.19 | 1483.90 |
| 1000-startup-routes.cjs | 370.45 | 510.47 |
| 10000-startup-routes-schema.cjs | 9037.39 | 21291.20 |
| 10000-startup-routes.cjs | 8376.04 | 11935.33 |
| startup-listen.cjs | 146.04 | 158.94 |
