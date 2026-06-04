# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.16.0`
* __Run:__ Thu Jun 04 2026 12:30:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 87.12 | 116.55 |
| 1-startup-routes.cjs | 90.75 | 101.19 |
| 10-startup-routes-schema.cjs | 88.84 | 118.95 |
| 10-startup-routes.cjs | 89.20 | 100.17 |
| 100-startup-routes-schema.cjs | 93.72 | 126.73 |
| 100-startup-routes.cjs | 94.27 | 112.74 |
| 1000-startup-routes-schema.cjs | 161.40 | 221.00 |
| 1000-startup-routes.cjs | 176.05 | 228.25 |
| 10000-startup-routes-schema.cjs | 3837.91 | 4037.03 |
| 10000-startup-routes.cjs | 3277.46 | 4641.23 |
| startup-listen.cjs | 90.91 | 101.92 |
