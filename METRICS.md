# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.20.0`
* __Run:__ Tue Sep 01 2026 13:56:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 71.44 | 95.17 |
| 1-startup-routes.cjs | 71.59 | 79.81 |
| 10-startup-routes-schema.cjs | 72.65 | 97.34 |
| 10-startup-routes.cjs | 74.17 | 83.06 |
| 100-startup-routes-schema.cjs | 76.16 | 103.20 |
| 100-startup-routes.cjs | 77.71 | 92.78 |
| 1000-startup-routes-schema.cjs | 135.45 | 183.83 |
| 1000-startup-routes.cjs | 137.34 | 182.96 |
| 10000-startup-routes-schema.cjs | 2850.06 | 3022.98 |
| 10000-startup-routes.cjs | 2706.71 | 3808.62 |
| startup-listen.cjs | 79.10 | 89.05 |
