# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 10:20:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.22 | 129.28 |
| 1-startup-routes.cjs | 94.05 | 104.29 |
| 10-startup-routes-schema.cjs | 95.64 | 131.99 |
| 10-startup-routes.cjs | 97.75 | 109.75 |
| 100-startup-routes-schema.cjs | 107.39 | 147.15 |
| 100-startup-routes.cjs | 108.34 | 129.32 |
| 1000-startup-routes-schema.cjs | 274.24 | 377.60 |
| 1000-startup-routes.cjs | 262.73 | 377.14 |
| 10000-startup-routes-schema.cjs | 4674.07 | 4951.15 |
| 10000-startup-routes.cjs | 4375.90 | 5733.37 |
| startup-listen.cjs | 94.96 | 105.83 |
