# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Mon May 11 2026 09:44:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 88.26 | 119.37 |
| 1-startup-routes.cjs | 86.78 | 96.72 |
| 10-startup-routes-schema.cjs | 87.39 | 118.80 |
| 10-startup-routes.cjs | 88.58 | 99.61 |
| 100-startup-routes-schema.cjs | 94.40 | 129.12 |
| 100-startup-routes.cjs | 98.85 | 118.14 |
| 1000-startup-routes-schema.cjs | 184.89 | 245.48 |
| 1000-startup-routes.cjs | 186.32 | 242.68 |
| 10000-startup-routes-schema.cjs | 3627.87 | 3827.94 |
| 10000-startup-routes.cjs | 3291.93 | 4845.76 |
| startup-listen.cjs | 88.06 | 99.39 |
