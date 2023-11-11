# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Sat Nov 11 2023 15:00:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 166.70 | 234.12 |
| 1-startup-routes.cjs | 163.59 | 180.01 |
| 10-startup-routes-schema.cjs | 161.90 | 239.90 |
| 10-startup-routes.cjs | 165.36 | 184.60 |
| 100-startup-routes-schema.cjs | 180.18 | 411.60 |
| 100-startup-routes.cjs | 183.26 | 214.76 |
| 1000-startup-routes-schema.cjs | 475.09 | 1800.66 |
| 1000-startup-routes.cjs | 461.80 | 654.32 |
| 10000-startup-routes-schema.cjs | 10220.40 | 24027.75 |
| 10000-startup-routes.cjs | 9166.43 | 12428.83 |
| startup-listen.cjs | 174.00 | 192.04 |
