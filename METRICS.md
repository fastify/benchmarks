# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 23 2024 20:07:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 101.45 | 136.95 |
| 1-startup-routes.cjs | 103.11 | 113.58 |
| 10-startup-routes-schema.cjs | 104.17 | 141.53 |
| 10-startup-routes.cjs | 106.45 | 118.69 |
| 100-startup-routes-schema.cjs | 116.35 | 157.86 |
| 100-startup-routes.cjs | 116.41 | 137.12 |
| 1000-startup-routes-schema.cjs | 282.84 | 384.05 |
| 1000-startup-routes.cjs | 272.74 | 383.07 |
| 10000-startup-routes-schema.cjs | 4698.36 | 4977.46 |
| 10000-startup-routes.cjs | 4423.19 | 5756.77 |
| startup-listen.cjs | 108.98 | 120.17 |
