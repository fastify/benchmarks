# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.20.0`
* __Run:__ Wed Sep 02 2026 12:42:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.01 | 126.22 |
| 1-startup-routes.cjs | 95.70 | 106.11 |
| 10-startup-routes-schema.cjs | 94.44 | 128.61 |
| 10-startup-routes.cjs | 94.08 | 105.56 |
| 100-startup-routes-schema.cjs | 100.84 | 138.87 |
| 100-startup-routes.cjs | 102.65 | 123.38 |
| 1000-startup-routes-schema.cjs | 182.81 | 249.58 |
| 1000-startup-routes.cjs | 192.63 | 252.46 |
| 10000-startup-routes-schema.cjs | 3682.18 | 3895.30 |
| 10000-startup-routes.cjs | 3295.55 | 4742.24 |
| startup-listen.cjs | 94.24 | 106.03 |
