# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.20.0`
* __Run:__ Tue Sep 01 2026 08:34:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 91.00 | 123.38 |
| 1-startup-routes.cjs | 91.32 | 101.63 |
| 10-startup-routes-schema.cjs | 93.02 | 126.19 |
| 10-startup-routes.cjs | 93.01 | 104.10 |
| 100-startup-routes-schema.cjs | 99.98 | 137.21 |
| 100-startup-routes.cjs | 100.60 | 120.32 |
| 1000-startup-routes-schema.cjs | 181.26 | 246.66 |
| 1000-startup-routes.cjs | 185.21 | 244.09 |
| 10000-startup-routes-schema.cjs | 3532.64 | 3737.25 |
| 10000-startup-routes.cjs | 3188.74 | 4508.96 |
| startup-listen.cjs | 98.26 | 109.95 |
