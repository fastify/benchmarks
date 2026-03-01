# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.14.0`
* __Run:__ Sun Mar 01 2026 08:37:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 86.85 | 117.23 |
| 1-startup-routes.cjs | 88.47 | 98.26 |
| 10-startup-routes-schema.cjs | 89.18 | 120.25 |
| 10-startup-routes.cjs | 90.31 | 101.52 |
| 100-startup-routes-schema.cjs | 95.67 | 131.14 |
| 100-startup-routes.cjs | 97.58 | 117.73 |
| 1000-startup-routes-schema.cjs | 185.15 | 243.89 |
| 1000-startup-routes.cjs | 185.82 | 241.27 |
| 10000-startup-routes-schema.cjs | 3500.26 | 3695.89 |
| 10000-startup-routes.cjs | 3287.88 | 4545.67 |
| startup-listen.cjs | 103.45 | 115.38 |
