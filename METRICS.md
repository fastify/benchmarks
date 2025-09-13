# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Sat Sep 13 2025 15:14:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 99.32 | 135.72 |
| 1-startup-routes.cjs | 98.18 | 108.71 |
| 10-startup-routes-schema.cjs | 100.95 | 139.35 |
| 10-startup-routes.cjs | 99.87 | 112.30 |
| 100-startup-routes-schema.cjs | 112.81 | 155.18 |
| 100-startup-routes.cjs | 113.75 | 136.36 |
| 1000-startup-routes-schema.cjs | 285.63 | 394.80 |
| 1000-startup-routes.cjs | 271.69 | 390.92 |
| 10000-startup-routes-schema.cjs | 4819.11 | 5117.19 |
| 10000-startup-routes.cjs | 4868.16 | 6267.89 |
| startup-listen.cjs | 98.71 | 109.86 |
