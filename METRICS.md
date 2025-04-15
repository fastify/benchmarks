# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 08:56:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.76 | 131.54 |
| 1-startup-routes.cjs | 97.37 | 107.72 |
| 10-startup-routes-schema.cjs | 96.49 | 133.86 |
| 10-startup-routes.cjs | 98.80 | 110.89 |
| 100-startup-routes-schema.cjs | 107.80 | 148.36 |
| 100-startup-routes.cjs | 108.91 | 130.03 |
| 1000-startup-routes-schema.cjs | 281.51 | 387.61 |
| 1000-startup-routes.cjs | 270.23 | 392.04 |
| 10000-startup-routes-schema.cjs | 4925.18 | 5210.79 |
| 10000-startup-routes.cjs | 4889.34 | 6263.21 |
| startup-listen.cjs | 99.74 | 111.27 |
