# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.0`
* __Run:__ Mon Oct 19 2026 12:42:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 71.72 | 95.85 |
| 1-startup-routes.cjs | 72.43 | 81.08 |
| 10-startup-routes-schema.cjs | 72.77 | 98.13 |
| 10-startup-routes.cjs | 74.12 | 83.45 |
| 100-startup-routes-schema.cjs | 77.51 | 106.83 |
| 100-startup-routes.cjs | 76.30 | 91.83 |
| 1000-startup-routes-schema.cjs | 109.89 | 157.46 |
| 1000-startup-routes.cjs | 113.02 | 155.81 |
| 10000-startup-routes-schema.cjs | 291.86 | 539.01 |
| 10000-startup-routes.cjs | 318.39 | 1641.93 |
| startup-listen.cjs | 73.00 | 82.48 |
