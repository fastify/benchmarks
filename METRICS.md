# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Tue Jul 21 2026 15:44:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 90.59 | 120.45 |
| 1-startup-routes.cjs | 91.58 | 102.44 |
| 10-startup-routes-schema.cjs | 92.70 | 124.20 |
| 10-startup-routes.cjs | 91.92 | 103.18 |
| 100-startup-routes-schema.cjs | 97.98 | 132.61 |
| 100-startup-routes.cjs | 96.08 | 115.36 |
| 1000-startup-routes-schema.cjs | 169.55 | 232.66 |
| 1000-startup-routes.cjs | 175.73 | 231.25 |
| 10000-startup-routes-schema.cjs | 3778.10 | 3982.43 |
| 10000-startup-routes.cjs | 3513.83 | 4887.18 |
| startup-listen.cjs | 93.97 | 105.90 |
