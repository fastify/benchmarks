# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.18.0`
* __Run:__ Sat Oct 07 2023 05:05:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 136.06 | 189.55 |
| 1-startup-routes.cjs | 138.55 | 151.11 |
| 10-startup-routes-schema.cjs | 146.83 | 213.47 |
| 10-startup-routes.cjs | 142.81 | 156.85 |
| 100-startup-routes-schema.cjs | 161.09 | 327.47 |
| 100-startup-routes.cjs | 156.81 | 178.44 |
| 1000-startup-routes-schema.cjs | 399.44 | 1453.82 |
| 1000-startup-routes.cjs | 366.89 | 500.69 |
| 10000-startup-routes-schema.cjs | 8883.61 | 21110.88 |
| 10000-startup-routes.cjs | 8270.24 | 11711.95 |
| startup-listen.cjs | 147.43 | 160.15 |
