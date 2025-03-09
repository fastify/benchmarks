# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Sun Mar 09 2025 17:02:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.38 | 130.17 |
| 1-startup-routes.cjs | 94.70 | 105.28 |
| 10-startup-routes-schema.cjs | 96.66 | 133.25 |
| 10-startup-routes.cjs | 97.85 | 110.03 |
| 100-startup-routes-schema.cjs | 106.17 | 147.40 |
| 100-startup-routes.cjs | 106.85 | 126.80 |
| 1000-startup-routes-schema.cjs | 278.70 | 383.22 |
| 1000-startup-routes.cjs | 257.47 | 374.50 |
| 10000-startup-routes-schema.cjs | 4700.55 | 4986.70 |
| 10000-startup-routes.cjs | 4712.12 | 6098.41 |
| startup-listen.cjs | 94.04 | 105.46 |
