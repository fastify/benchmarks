# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Tue Jul 21 2026 16:01:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 79.10 | 107.56 |
| 1-startup-routes.cjs | 80.57 | 91.01 |
| 10-startup-routes-schema.cjs | 79.45 | 108.73 |
| 10-startup-routes.cjs | 80.77 | 91.74 |
| 100-startup-routes-schema.cjs | 85.37 | 117.66 |
| 100-startup-routes.cjs | 85.21 | 101.57 |
| 1000-startup-routes-schema.cjs | 149.85 | 203.70 |
| 1000-startup-routes.cjs | 155.42 | 206.35 |
| 10000-startup-routes-schema.cjs | 4013.97 | 4176.65 |
| 10000-startup-routes.cjs | 3594.29 | 5147.78 |
| startup-listen.cjs | 79.29 | 90.58 |
