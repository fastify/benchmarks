# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 09:12:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.34 | 131.02 |
| 1-startup-routes.cjs | 94.74 | 104.95 |
| 10-startup-routes-schema.cjs | 97.47 | 133.95 |
| 10-startup-routes.cjs | 95.97 | 107.89 |
| 100-startup-routes-schema.cjs | 107.50 | 147.86 |
| 100-startup-routes.cjs | 107.04 | 126.78 |
| 1000-startup-routes-schema.cjs | 277.24 | 380.86 |
| 1000-startup-routes.cjs | 269.50 | 384.39 |
| 10000-startup-routes-schema.cjs | 4610.93 | 4900.67 |
| 10000-startup-routes.cjs | 5063.39 | 6429.11 |
| startup-listen.cjs | 95.56 | 107.58 |
