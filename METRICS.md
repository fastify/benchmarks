# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.19.0`
* __Run:__ Tue Aug 04 2026 11:51:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.43 | 129.98 |
| 1-startup-routes.cjs | 99.51 | 110.66 |
| 10-startup-routes-schema.cjs | 99.24 | 135.04 |
| 10-startup-routes.cjs | 98.71 | 110.75 |
| 100-startup-routes-schema.cjs | 106.69 | 146.52 |
| 100-startup-routes.cjs | 105.84 | 125.54 |
| 1000-startup-routes-schema.cjs | 197.00 | 267.02 |
| 1000-startup-routes.cjs | 192.90 | 254.17 |
| 10000-startup-routes-schema.cjs | 3503.15 | 3710.40 |
| 10000-startup-routes.cjs | 3265.96 | 4653.07 |
| startup-listen.cjs | 101.72 | 114.80 |
