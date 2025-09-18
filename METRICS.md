# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Thu Sep 18 2025 06:47:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.19 | 132.56 |
| 1-startup-routes.cjs | 95.96 | 106.19 |
| 10-startup-routes-schema.cjs | 100.99 | 137.93 |
| 10-startup-routes.cjs | 97.48 | 109.56 |
| 100-startup-routes-schema.cjs | 109.90 | 151.61 |
| 100-startup-routes.cjs | 108.12 | 128.75 |
| 1000-startup-routes-schema.cjs | 278.15 | 382.73 |
| 1000-startup-routes.cjs | 260.23 | 379.57 |
| 10000-startup-routes-schema.cjs | 4672.96 | 4957.11 |
| 10000-startup-routes.cjs | 4401.03 | 5690.33 |
| startup-listen.cjs | 97.18 | 107.93 |
