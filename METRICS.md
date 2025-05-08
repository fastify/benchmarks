# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Thu May 08 2025 16:46:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.93 | 132.65 |
| 1-startup-routes.cjs | 95.57 | 105.93 |
| 10-startup-routes-schema.cjs | 99.92 | 137.44 |
| 10-startup-routes.cjs | 98.36 | 110.62 |
| 100-startup-routes-schema.cjs | 111.01 | 152.22 |
| 100-startup-routes.cjs | 109.87 | 131.09 |
| 1000-startup-routes-schema.cjs | 283.44 | 387.04 |
| 1000-startup-routes.cjs | 271.49 | 389.23 |
| 10000-startup-routes-schema.cjs | 4619.54 | 4901.37 |
| 10000-startup-routes.cjs | 4321.09 | 5614.94 |
| startup-listen.cjs | 97.56 | 108.65 |
