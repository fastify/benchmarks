# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Wed Sep 24 2025 12:39:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 100.86 | 137.82 |
| 1-startup-routes.cjs | 102.53 | 113.31 |
| 10-startup-routes-schema.cjs | 102.46 | 140.85 |
| 10-startup-routes.cjs | 106.21 | 118.85 |
| 100-startup-routes-schema.cjs | 113.28 | 156.69 |
| 100-startup-routes.cjs | 114.16 | 136.63 |
| 1000-startup-routes-schema.cjs | 288.00 | 395.93 |
| 1000-startup-routes.cjs | 278.84 | 397.91 |
| 10000-startup-routes-schema.cjs | 4672.97 | 4965.00 |
| 10000-startup-routes.cjs | 4490.48 | 5846.27 |
| startup-listen.cjs | 114.37 | 127.59 |
