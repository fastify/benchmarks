# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Thu May 07 2026 15:02:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 66.69 | 89.47 |
| 1-startup-routes.cjs | 66.85 | 74.59 |
| 10-startup-routes-schema.cjs | 68.01 | 90.96 |
| 10-startup-routes.cjs | 68.37 | 76.98 |
| 100-startup-routes-schema.cjs | 70.70 | 96.02 |
| 100-startup-routes.cjs | 71.94 | 86.10 |
| 1000-startup-routes-schema.cjs | 126.88 | 174.22 |
| 1000-startup-routes.cjs | 127.56 | 170.04 |
| 10000-startup-routes-schema.cjs | 2910.99 | 3075.67 |
| 10000-startup-routes.cjs | 2660.27 | 3666.44 |
| startup-listen.cjs | 68.63 | 77.01 |
