# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 16 2025 04:59:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.22 | 132.25 |
| 1-startup-routes.cjs | 104.26 | 114.64 |
| 10-startup-routes-schema.cjs | 97.30 | 134.51 |
| 10-startup-routes.cjs | 99.26 | 112.22 |
| 100-startup-routes-schema.cjs | 111.14 | 155.27 |
| 100-startup-routes.cjs | 111.19 | 131.85 |
| 1000-startup-routes-schema.cjs | 282.72 | 384.26 |
| 1000-startup-routes.cjs | 271.39 | 392.40 |
| 10000-startup-routes-schema.cjs | 4541.07 | 4822.04 |
| 10000-startup-routes.cjs | 4528.68 | 5798.19 |
| startup-listen.cjs | 98.75 | 110.54 |
