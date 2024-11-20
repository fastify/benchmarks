# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Wed Nov 20 2024 14:29:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.35 | 133.84 |
| 1-startup-routes.cjs | 104.47 | 116.24 |
| 10-startup-routes-schema.cjs | 101.53 | 138.96 |
| 10-startup-routes.cjs | 105.51 | 118.95 |
| 100-startup-routes-schema.cjs | 112.29 | 153.49 |
| 100-startup-routes.cjs | 110.78 | 131.76 |
| 1000-startup-routes-schema.cjs | 287.59 | 390.76 |
| 1000-startup-routes.cjs | 273.35 | 389.82 |
| 10000-startup-routes-schema.cjs | 4605.98 | 4891.44 |
| 10000-startup-routes.cjs | 4495.25 | 5871.09 |
| startup-listen.cjs | 99.52 | 111.19 |
