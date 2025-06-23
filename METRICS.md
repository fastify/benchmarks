# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 23 2025 14:40:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.58 | 132.55 |
| 1-startup-routes.cjs | 97.94 | 108.30 |
| 10-startup-routes-schema.cjs | 105.03 | 141.98 |
| 10-startup-routes.cjs | 98.32 | 110.66 |
| 100-startup-routes-schema.cjs | 110.87 | 154.70 |
| 100-startup-routes.cjs | 109.69 | 129.94 |
| 1000-startup-routes-schema.cjs | 282.55 | 389.12 |
| 1000-startup-routes.cjs | 272.72 | 385.86 |
| 10000-startup-routes-schema.cjs | 4511.12 | 4813.94 |
| 10000-startup-routes.cjs | 4393.97 | 5677.94 |
| startup-listen.cjs | 97.14 | 108.32 |
