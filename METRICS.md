# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Sun Nov 03 2024 12:07:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.25 | 129.22 |
| 1-startup-routes.cjs | 93.41 | 103.39 |
| 10-startup-routes-schema.cjs | 95.98 | 133.24 |
| 10-startup-routes.cjs | 93.34 | 104.97 |
| 100-startup-routes-schema.cjs | 108.19 | 147.93 |
| 100-startup-routes.cjs | 105.80 | 126.60 |
| 1000-startup-routes-schema.cjs | 286.40 | 382.99 |
| 1000-startup-routes.cjs | 267.18 | 379.70 |
| 10000-startup-routes-schema.cjs | 4465.20 | 4735.45 |
| 10000-startup-routes.cjs | 4830.10 | 6091.69 |
| startup-listen.cjs | 95.73 | 106.39 |
