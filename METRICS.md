# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Wed Jul 01 2026 07:22:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 88.48 | 118.17 |
| 1-startup-routes.cjs | 87.33 | 97.72 |
| 10-startup-routes-schema.cjs | 89.84 | 120.14 |
| 10-startup-routes.cjs | 90.58 | 101.81 |
| 100-startup-routes-schema.cjs | 94.69 | 127.63 |
| 100-startup-routes.cjs | 95.39 | 114.05 |
| 1000-startup-routes-schema.cjs | 161.36 | 224.16 |
| 1000-startup-routes.cjs | 174.32 | 226.23 |
| 10000-startup-routes-schema.cjs | 3789.86 | 4000.22 |
| 10000-startup-routes.cjs | 3452.83 | 4800.63 |
| startup-listen.cjs | 90.38 | 102.16 |
