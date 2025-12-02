# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.6`
* __Run:__ Tue Dec 02 2025 08:08:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.69 | 130.72 |
| 1-startup-routes.cjs | 94.70 | 105.01 |
| 10-startup-routes-schema.cjs | 96.60 | 133.06 |
| 10-startup-routes.cjs | 97.86 | 110.00 |
| 100-startup-routes-schema.cjs | 109.31 | 151.76 |
| 100-startup-routes.cjs | 107.90 | 128.64 |
| 1000-startup-routes-schema.cjs | 274.94 | 378.26 |
| 1000-startup-routes.cjs | 256.89 | 367.55 |
| 10000-startup-routes-schema.cjs | 4503.87 | 4782.46 |
| 10000-startup-routes.cjs | 4552.55 | 5906.64 |
| startup-listen.cjs | 99.89 | 111.15 |
