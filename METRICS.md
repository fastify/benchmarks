# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.16.0`
* __Run:__ Sun Jun 07 2026 14:30:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 86.33 | 115.66 |
| 1-startup-routes.cjs | 87.21 | 97.08 |
| 10-startup-routes-schema.cjs | 87.01 | 116.38 |
| 10-startup-routes.cjs | 87.43 | 98.70 |
| 100-startup-routes-schema.cjs | 93.72 | 126.18 |
| 100-startup-routes.cjs | 92.65 | 110.69 |
| 1000-startup-routes-schema.cjs | 154.54 | 212.61 |
| 1000-startup-routes.cjs | 170.92 | 225.05 |
| 10000-startup-routes-schema.cjs | 3763.38 | 3965.09 |
| 10000-startup-routes.cjs | 3293.33 | 4584.07 |
| startup-listen.cjs | 88.00 | 98.90 |
