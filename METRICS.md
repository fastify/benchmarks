# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Mon May 18 2026 20:10:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 89.51 | 120.01 |
| 1-startup-routes.cjs | 91.44 | 101.70 |
| 10-startup-routes-schema.cjs | 91.55 | 122.87 |
| 10-startup-routes.cjs | 91.75 | 103.18 |
| 100-startup-routes-schema.cjs | 95.65 | 130.36 |
| 100-startup-routes.cjs | 95.91 | 115.36 |
| 1000-startup-routes-schema.cjs | 163.79 | 230.22 |
| 1000-startup-routes.cjs | 176.18 | 233.95 |
| 10000-startup-routes-schema.cjs | 3770.73 | 3984.56 |
| 10000-startup-routes.cjs | 3449.25 | 4788.50 |
| startup-listen.cjs | 94.21 | 105.73 |
