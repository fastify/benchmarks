# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 08:51:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.27 | 130.47 |
| 1-startup-routes.cjs | 93.88 | 104.08 |
| 10-startup-routes-schema.cjs | 96.20 | 133.10 |
| 10-startup-routes.cjs | 96.01 | 107.95 |
| 100-startup-routes-schema.cjs | 109.47 | 150.46 |
| 100-startup-routes.cjs | 110.43 | 130.79 |
| 1000-startup-routes-schema.cjs | 277.10 | 379.98 |
| 1000-startup-routes.cjs | 258.92 | 380.30 |
| 10000-startup-routes-schema.cjs | 4486.11 | 4769.34 |
| 10000-startup-routes.cjs | 4529.64 | 5840.63 |
| startup-listen.cjs | 94.14 | 104.98 |
