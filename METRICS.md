# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.19.0`
* __Run:__ Sun Aug 23 2026 21:50:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 89.91 | 120.47 |
| 1-startup-routes.cjs | 95.19 | 106.51 |
| 10-startup-routes-schema.cjs | 92.78 | 125.12 |
| 10-startup-routes.cjs | 95.74 | 107.13 |
| 100-startup-routes-schema.cjs | 98.11 | 133.17 |
| 100-startup-routes.cjs | 100.40 | 119.16 |
| 1000-startup-routes-schema.cjs | 169.56 | 233.35 |
| 1000-startup-routes.cjs | 187.44 | 246.87 |
| 10000-startup-routes-schema.cjs | 3714.88 | 3917.49 |
| 10000-startup-routes.cjs | 3490.74 | 4852.73 |
| startup-listen.cjs | 102.17 | 115.97 |
