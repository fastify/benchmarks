# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Tue Jun 30 2026 09:35:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 86.27 | 115.56 |
| 1-startup-routes.cjs | 86.00 | 96.44 |
| 10-startup-routes-schema.cjs | 86.68 | 116.09 |
| 10-startup-routes.cjs | 89.33 | 100.63 |
| 100-startup-routes-schema.cjs | 92.45 | 124.54 |
| 100-startup-routes.cjs | 93.29 | 112.23 |
| 1000-startup-routes-schema.cjs | 155.20 | 214.02 |
| 1000-startup-routes.cjs | 172.42 | 226.81 |
| 10000-startup-routes-schema.cjs | 3701.34 | 3902.69 |
| 10000-startup-routes.cjs | 3465.15 | 4782.25 |
| startup-listen.cjs | 95.91 | 108.16 |
