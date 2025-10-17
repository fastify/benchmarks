# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Fri Oct 17 2025 09:23:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.45 | 131.13 |
| 1-startup-routes.cjs | 95.45 | 105.83 |
| 10-startup-routes-schema.cjs | 97.04 | 133.94 |
| 10-startup-routes.cjs | 101.51 | 113.83 |
| 100-startup-routes-schema.cjs | 109.58 | 150.14 |
| 100-startup-routes.cjs | 110.51 | 130.82 |
| 1000-startup-routes-schema.cjs | 296.71 | 395.45 |
| 1000-startup-routes.cjs | 279.79 | 396.68 |
| 10000-startup-routes-schema.cjs | 4572.43 | 4851.49 |
| 10000-startup-routes.cjs | 5005.11 | 6390.47 |
| startup-listen.cjs | 96.79 | 107.74 |
