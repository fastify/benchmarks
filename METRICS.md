# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Wed Dec 11 2024 15:18:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.40 | 126.99 |
| 1-startup-routes.cjs | 92.87 | 102.71 |
| 10-startup-routes-schema.cjs | 93.83 | 128.87 |
| 10-startup-routes.cjs | 93.04 | 105.25 |
| 100-startup-routes-schema.cjs | 105.86 | 145.70 |
| 100-startup-routes.cjs | 105.61 | 124.31 |
| 1000-startup-routes-schema.cjs | 264.40 | 363.64 |
| 1000-startup-routes.cjs | 254.98 | 365.24 |
| 10000-startup-routes-schema.cjs | 5148.10 | 5417.25 |
| 10000-startup-routes.cjs | 4333.90 | 5623.95 |
| startup-listen.cjs | 91.55 | 102.30 |
