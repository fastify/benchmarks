# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.3`
* __Run:__ Fri Jun 27 2025 06:51:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.17 | 130.36 |
| 1-startup-routes.cjs | 96.17 | 106.48 |
| 10-startup-routes-schema.cjs | 96.16 | 132.65 |
| 10-startup-routes.cjs | 98.96 | 110.95 |
| 100-startup-routes-schema.cjs | 106.27 | 147.53 |
| 100-startup-routes.cjs | 109.21 | 129.59 |
| 1000-startup-routes-schema.cjs | 272.84 | 375.97 |
| 1000-startup-routes.cjs | 263.35 | 380.31 |
| 10000-startup-routes-schema.cjs | 5346.92 | 5625.96 |
| 10000-startup-routes.cjs | 4467.58 | 5802.35 |
| startup-listen.cjs | 97.95 | 108.89 |
