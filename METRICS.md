# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.19.0`
* __Run:__ Mon Aug 24 2026 06:56:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.05 | 131.74 |
| 1-startup-routes.cjs | 94.36 | 105.28 |
| 10-startup-routes-schema.cjs | 95.45 | 129.45 |
| 10-startup-routes.cjs | 95.86 | 107.44 |
| 100-startup-routes-schema.cjs | 102.01 | 140.13 |
| 100-startup-routes.cjs | 102.15 | 121.71 |
| 1000-startup-routes-schema.cjs | 193.36 | 259.39 |
| 1000-startup-routes.cjs | 191.86 | 250.05 |
| 10000-startup-routes-schema.cjs | 3525.02 | 3724.70 |
| 10000-startup-routes.cjs | 3224.48 | 4562.00 |
| startup-listen.cjs | 94.34 | 106.42 |
