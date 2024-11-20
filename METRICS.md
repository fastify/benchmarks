# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Wed Nov 20 2024 12:56:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.24 | 130.15 |
| 1-startup-routes.cjs | 96.71 | 107.77 |
| 10-startup-routes-schema.cjs | 96.24 | 132.26 |
| 10-startup-routes.cjs | 108.10 | 120.99 |
| 100-startup-routes-schema.cjs | 106.13 | 147.23 |
| 100-startup-routes.cjs | 109.61 | 129.61 |
| 1000-startup-routes-schema.cjs | 277.04 | 376.59 |
| 1000-startup-routes.cjs | 267.06 | 381.06 |
| 10000-startup-routes-schema.cjs | 5188.67 | 5477.91 |
| 10000-startup-routes.cjs | 4398.50 | 5678.61 |
| startup-listen.cjs | 95.09 | 106.18 |
