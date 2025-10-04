# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Sat Oct 04 2025 07:35:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.82 | 128.60 |
| 1-startup-routes.cjs | 95.65 | 105.73 |
| 10-startup-routes-schema.cjs | 95.30 | 131.50 |
| 10-startup-routes.cjs | 96.54 | 108.41 |
| 100-startup-routes-schema.cjs | 107.74 | 147.12 |
| 100-startup-routes.cjs | 106.44 | 125.58 |
| 1000-startup-routes-schema.cjs | 273.81 | 374.34 |
| 1000-startup-routes.cjs | 258.60 | 371.81 |
| 10000-startup-routes-schema.cjs | 4687.89 | 4962.46 |
| 10000-startup-routes.cjs | 4760.79 | 5992.38 |
| startup-listen.cjs | 95.35 | 106.14 |
