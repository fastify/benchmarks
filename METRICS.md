# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.19.0`
* __Run:__ Mon Aug 17 2026 12:23:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 69.61 | 94.68 |
| 1-startup-routes.cjs | 68.82 | 77.70 |
| 10-startup-routes-schema.cjs | 69.15 | 95.38 |
| 10-startup-routes.cjs | 68.28 | 77.78 |
| 100-startup-routes-schema.cjs | 76.08 | 104.18 |
| 100-startup-routes.cjs | 72.48 | 86.51 |
| 1000-startup-routes-schema.cjs | 128.04 | 173.39 |
| 1000-startup-routes.cjs | 138.27 | 178.11 |
| 10000-startup-routes-schema.cjs | 3784.15 | 3931.56 |
| 10000-startup-routes.cjs | 3574.15 | 5028.34 |
| startup-listen.cjs | 68.91 | 78.44 |
