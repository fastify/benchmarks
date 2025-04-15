# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 09:08:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.47 | 130.09 |
| 1-startup-routes.cjs | 96.84 | 107.14 |
| 10-startup-routes-schema.cjs | 98.89 | 135.83 |
| 10-startup-routes.cjs | 98.69 | 110.69 |
| 100-startup-routes-schema.cjs | 108.18 | 149.85 |
| 100-startup-routes.cjs | 109.62 | 130.32 |
| 1000-startup-routes-schema.cjs | 280.11 | 381.40 |
| 1000-startup-routes.cjs | 268.52 | 385.76 |
| 10000-startup-routes-schema.cjs | 4893.58 | 5177.08 |
| 10000-startup-routes.cjs | 4347.80 | 5841.94 |
| startup-listen.cjs | 98.44 | 109.44 |
