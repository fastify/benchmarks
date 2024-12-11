# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Wed Dec 11 2024 07:54:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.69 | 132.93 |
| 1-startup-routes.cjs | 97.19 | 109.01 |
| 10-startup-routes-schema.cjs | 100.13 | 137.29 |
| 10-startup-routes.cjs | 100.35 | 112.50 |
| 100-startup-routes-schema.cjs | 109.78 | 151.82 |
| 100-startup-routes.cjs | 109.91 | 130.45 |
| 1000-startup-routes-schema.cjs | 282.90 | 385.58 |
| 1000-startup-routes.cjs | 273.27 | 386.27 |
| 10000-startup-routes-schema.cjs | 4829.38 | 5114.33 |
| 10000-startup-routes.cjs | 5104.68 | 6403.97 |
| startup-listen.cjs | 106.00 | 118.60 |
