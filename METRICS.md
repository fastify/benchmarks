# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Sat Sep 13 2025 20:59:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.93 | 133.93 |
| 1-startup-routes.cjs | 98.18 | 108.76 |
| 10-startup-routes-schema.cjs | 99.26 | 136.56 |
| 10-startup-routes.cjs | 99.64 | 112.10 |
| 100-startup-routes-schema.cjs | 111.32 | 152.80 |
| 100-startup-routes.cjs | 110.25 | 130.84 |
| 1000-startup-routes-schema.cjs | 285.58 | 390.76 |
| 1000-startup-routes.cjs | 275.58 | 396.23 |
| 10000-startup-routes-schema.cjs | 4689.59 | 4977.50 |
| 10000-startup-routes.cjs | 4603.34 | 5980.65 |
| startup-listen.cjs | 96.97 | 108.31 |
