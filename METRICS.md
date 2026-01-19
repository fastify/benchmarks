# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Mon Jan 19 2026 07:25:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.82 | 123.97 |
| 1-startup-routes.cjs | 88.92 | 98.73 |
| 10-startup-routes-schema.cjs | 91.29 | 122.67 |
| 10-startup-routes.cjs | 90.08 | 101.36 |
| 100-startup-routes-schema.cjs | 97.64 | 132.67 |
| 100-startup-routes.cjs | 97.08 | 116.84 |
| 1000-startup-routes-schema.cjs | 179.31 | 240.79 |
| 1000-startup-routes.cjs | 177.36 | 233.20 |
| 10000-startup-routes-schema.cjs | 3501.89 | 3707.72 |
| 10000-startup-routes.cjs | 3143.59 | 4618.35 |
| startup-listen.cjs | 94.59 | 106.29 |
