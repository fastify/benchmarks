# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Tue Oct 15 2024 06:55:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 101.49 | 135.60 |
| 1-startup-routes.cjs | 103.09 | 113.39 |
| 10-startup-routes-schema.cjs | 103.78 | 139.41 |
| 10-startup-routes.cjs | 102.66 | 114.76 |
| 100-startup-routes-schema.cjs | 114.12 | 156.98 |
| 100-startup-routes.cjs | 114.74 | 135.54 |
| 1000-startup-routes-schema.cjs | 278.65 | 378.38 |
| 1000-startup-routes.cjs | 278.96 | 391.44 |
| 10000-startup-routes-schema.cjs | 4562.96 | 4834.74 |
| 10000-startup-routes.cjs | 4365.19 | 5613.39 |
| startup-listen.cjs | 104.87 | 116.55 |
