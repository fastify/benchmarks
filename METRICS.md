# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Thu May 15 2025 14:01:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.47 | 131.16 |
| 1-startup-routes.cjs | 95.46 | 105.69 |
| 10-startup-routes-schema.cjs | 103.17 | 139.72 |
| 10-startup-routes.cjs | 97.17 | 109.25 |
| 100-startup-routes-schema.cjs | 109.47 | 150.71 |
| 100-startup-routes.cjs | 108.86 | 128.63 |
| 1000-startup-routes-schema.cjs | 278.73 | 378.15 |
| 1000-startup-routes.cjs | 265.69 | 375.88 |
| 10000-startup-routes-schema.cjs | 4564.27 | 4839.66 |
| 10000-startup-routes.cjs | 4416.71 | 5786.88 |
| startup-listen.cjs | 98.44 | 109.43 |
