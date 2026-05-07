# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.15.0`
* __Run:__ Thu May 07 2026 09:51:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 87.46 | 118.71 |
| 1-startup-routes.cjs | 87.62 | 97.53 |
| 10-startup-routes-schema.cjs | 87.46 | 119.04 |
| 10-startup-routes.cjs | 89.41 | 100.58 |
| 100-startup-routes-schema.cjs | 92.98 | 128.40 |
| 100-startup-routes.cjs | 95.69 | 114.88 |
| 1000-startup-routes-schema.cjs | 183.40 | 242.64 |
| 1000-startup-routes.cjs | 182.20 | 235.76 |
| 10000-startup-routes-schema.cjs | 3555.66 | 3747.12 |
| 10000-startup-routes.cjs | 3203.13 | 4572.94 |
| startup-listen.cjs | 94.18 | 105.47 |
