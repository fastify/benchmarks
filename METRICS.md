# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Wed May 14 2025 17:23:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.38 | 133.20 |
| 1-startup-routes.cjs | 101.12 | 111.77 |
| 10-startup-routes-schema.cjs | 100.40 | 138.03 |
| 10-startup-routes.cjs | 101.93 | 114.28 |
| 100-startup-routes-schema.cjs | 110.60 | 151.53 |
| 100-startup-routes.cjs | 111.67 | 133.82 |
| 1000-startup-routes-schema.cjs | 282.99 | 383.66 |
| 1000-startup-routes.cjs | 275.28 | 393.95 |
| 10000-startup-routes-schema.cjs | 5254.58 | 5538.16 |
| 10000-startup-routes.cjs | 5142.30 | 6477.46 |
| startup-listen.cjs | 101.09 | 112.71 |
