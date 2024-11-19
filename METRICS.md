# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:40:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 98.07 | 135.34 |
| 1-startup-routes.cjs | 98.46 | 109.26 |
| 10-startup-routes-schema.cjs | 99.74 | 137.14 |
| 10-startup-routes.cjs | 100.89 | 113.39 |
| 100-startup-routes-schema.cjs | 113.37 | 156.43 |
| 100-startup-routes.cjs | 112.21 | 134.78 |
| 1000-startup-routes-schema.cjs | 293.59 | 399.49 |
| 1000-startup-routes.cjs | 284.49 | 396.55 |
| 10000-startup-routes-schema.cjs | 4896.15 | 5188.96 |
| 10000-startup-routes.cjs | 4843.93 | 6100.08 |
| startup-listen.cjs | 100.54 | 112.03 |
