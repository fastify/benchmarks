# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Sun Mar 09 2025 18:31:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.04 | 130.41 |
| 1-startup-routes.cjs | 96.55 | 106.77 |
| 10-startup-routes-schema.cjs | 95.61 | 132.65 |
| 10-startup-routes.cjs | 98.51 | 111.05 |
| 100-startup-routes-schema.cjs | 108.14 | 149.63 |
| 100-startup-routes.cjs | 108.31 | 129.24 |
| 1000-startup-routes-schema.cjs | 274.11 | 375.64 |
| 1000-startup-routes.cjs | 274.92 | 388.14 |
| 10000-startup-routes-schema.cjs | 4675.30 | 4958.96 |
| 10000-startup-routes.cjs | 4798.99 | 6195.84 |
| startup-listen.cjs | 104.33 | 117.56 |
