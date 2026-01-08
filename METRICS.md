# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.12.0`
* __Run:__ Thu Jan 08 2026 14:56:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.71 | 127.75 |
| 1-startup-routes.cjs | 95.24 | 105.80 |
| 10-startup-routes-schema.cjs | 95.29 | 128.71 |
| 10-startup-routes.cjs | 95.05 | 106.79 |
| 100-startup-routes-schema.cjs | 102.21 | 140.15 |
| 100-startup-routes.cjs | 100.27 | 122.19 |
| 1000-startup-routes-schema.cjs | 185.92 | 252.08 |
| 1000-startup-routes.cjs | 187.51 | 247.33 |
| 10000-startup-routes-schema.cjs | 3610.02 | 3824.52 |
| 10000-startup-routes.cjs | 3190.64 | 4642.63 |
| startup-listen.cjs | 103.78 | 117.35 |
