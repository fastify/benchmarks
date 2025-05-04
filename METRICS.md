# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Sun May 04 2025 14:13:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.55 | 128.24 |
| 1-startup-routes.cjs | 92.94 | 102.98 |
| 10-startup-routes-schema.cjs | 100.09 | 136.80 |
| 10-startup-routes.cjs | 95.59 | 107.40 |
| 100-startup-routes-schema.cjs | 106.54 | 146.51 |
| 100-startup-routes.cjs | 109.44 | 129.61 |
| 1000-startup-routes-schema.cjs | 273.85 | 375.94 |
| 1000-startup-routes.cjs | 261.04 | 376.89 |
| 10000-startup-routes-schema.cjs | 5048.14 | 5331.08 |
| 10000-startup-routes.cjs | 4410.37 | 5666.30 |
| startup-listen.cjs | 94.30 | 104.96 |
