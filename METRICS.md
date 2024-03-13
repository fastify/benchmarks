# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Wed Mar 13 2024 16:05:55 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 105.84 | 149.78 |
| 1-startup-routes.cjs | 109.58 | 121.14 |
| 10-startup-routes-schema.cjs | 109.15 | 163.72 |
| 10-startup-routes.cjs | 115.77 | 129.09 |
| 100-startup-routes-schema.cjs | 121.12 | 256.53 |
| 100-startup-routes.cjs | 126.60 | 147.61 |
| 1000-startup-routes-schema.cjs | 290.50 | 1027.70 |
| 1000-startup-routes.cjs | 286.12 | 396.87 |
| 10000-startup-routes-schema.cjs | 5593.37 | 12757.37 |
| 10000-startup-routes.cjs | 4471.86 | 5758.53 |
| startup-listen.cjs | 115.63 | 127.55 |
