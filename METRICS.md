# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Wed Nov 20 2024 16:11:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.06 | 130.68 |
| 1-startup-routes.cjs | 95.98 | 106.37 |
| 10-startup-routes-schema.cjs | 97.51 | 134.15 |
| 10-startup-routes.cjs | 100.33 | 112.39 |
| 100-startup-routes-schema.cjs | 109.92 | 152.75 |
| 100-startup-routes.cjs | 108.03 | 129.22 |
| 1000-startup-routes-schema.cjs | 282.82 | 379.55 |
| 1000-startup-routes.cjs | 264.92 | 378.62 |
| 10000-startup-routes-schema.cjs | 4760.78 | 5043.22 |
| 10000-startup-routes.cjs | 5508.80 | 6766.31 |
| startup-listen.cjs | 95.36 | 106.57 |
