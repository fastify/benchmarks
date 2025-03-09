# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Sun Mar 09 2025 17:54:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.80 | 128.02 |
| 1-startup-routes.cjs | 94.43 | 105.23 |
| 10-startup-routes-schema.cjs | 94.10 | 130.52 |
| 10-startup-routes.cjs | 98.27 | 110.09 |
| 100-startup-routes-schema.cjs | 106.19 | 146.83 |
| 100-startup-routes.cjs | 106.99 | 128.05 |
| 1000-startup-routes-schema.cjs | 272.51 | 375.25 |
| 1000-startup-routes.cjs | 267.74 | 385.68 |
| 10000-startup-routes-schema.cjs | 4857.31 | 5138.05 |
| 10000-startup-routes.cjs | 4383.46 | 5724.74 |
| startup-listen.cjs | 96.83 | 108.68 |
