# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v20.8.1`
* __Run:__ Wed Oct 25 2023 06:10:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 158.23 | 224.56 |
| 1-startup-routes.cjs | 155.62 | 171.22 |
| 10-startup-routes-schema.cjs | 162.14 | 244.25 |
| 10-startup-routes.cjs | 158.15 | 177.00 |
| 100-startup-routes-schema.cjs | 184.22 | 407.15 |
| 100-startup-routes.cjs | 178.12 | 208.14 |
| 1000-startup-routes-schema.cjs | 486.39 | 1860.20 |
| 1000-startup-routes.cjs | 465.89 | 660.50 |
| 10000-startup-routes-schema.cjs | 10024.38 | 23264.44 |
| 10000-startup-routes.cjs | 8842.13 | 11920.01 |
| startup-listen.cjs | 162.49 | 179.22 |
