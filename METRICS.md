# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.21.0`
* __Run:__ Mon Oct 12 2026 15:56:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 69.45 | 93.51 |
| 1-startup-routes.cjs | 72.74 | 80.99 |
| 10-startup-routes-schema.cjs | 69.93 | 95.02 |
| 10-startup-routes.cjs | 71.52 | 80.37 |
| 100-startup-routes-schema.cjs | 75.55 | 103.35 |
| 100-startup-routes.cjs | 76.47 | 92.30 |
| 1000-startup-routes-schema.cjs | 128.89 | 178.66 |
| 1000-startup-routes.cjs | 143.78 | 186.66 |
| 10000-startup-routes-schema.cjs | 2791.17 | 2970.88 |
| 10000-startup-routes.cjs | 2673.91 | 3780.25 |
| startup-listen.cjs | 74.08 | 83.51 |
