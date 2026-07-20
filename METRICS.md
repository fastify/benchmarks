# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Mon Jul 20 2026 08:12:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.52 | 124.90 |
| 1-startup-routes.cjs | 92.37 | 102.96 |
| 10-startup-routes-schema.cjs | 94.56 | 128.15 |
| 10-startup-routes.cjs | 94.35 | 105.73 |
| 100-startup-routes-schema.cjs | 100.97 | 138.03 |
| 100-startup-routes.cjs | 100.34 | 118.85 |
| 1000-startup-routes-schema.cjs | 190.97 | 256.28 |
| 1000-startup-routes.cjs | 182.76 | 240.63 |
| 10000-startup-routes-schema.cjs | 3500.26 | 3695.74 |
| 10000-startup-routes.cjs | 3272.06 | 4640.51 |
| startup-listen.cjs | 106.84 | 120.10 |
