# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Thu Nov 16 2023 08:40:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 111.27 | 155.67 |
| 1-startup-routes.cjs | 111.88 | 123.19 |
| 10-startup-routes-schema.cjs | 114.07 | 170.08 |
| 10-startup-routes.cjs | 117.24 | 130.36 |
| 100-startup-routes-schema.cjs | 128.31 | 266.61 |
| 100-startup-routes.cjs | 128.07 | 148.78 |
| 1000-startup-routes-schema.cjs | 292.65 | 1056.42 |
| 1000-startup-routes.cjs | 273.65 | 381.34 |
| 10000-startup-routes-schema.cjs | 4916.57 | 12243.03 |
| 10000-startup-routes.cjs | 4525.47 | 6073.20 |
| startup-listen.cjs | 113.61 | 125.48 |
