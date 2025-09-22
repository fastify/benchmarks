# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 22 2025 07:29:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.86 | 129.63 |
| 1-startup-routes.cjs | 93.77 | 103.90 |
| 10-startup-routes-schema.cjs | 97.86 | 134.16 |
| 10-startup-routes.cjs | 99.17 | 111.16 |
| 100-startup-routes-schema.cjs | 108.20 | 148.97 |
| 100-startup-routes.cjs | 106.97 | 127.90 |
| 1000-startup-routes-schema.cjs | 268.64 | 372.07 |
| 1000-startup-routes.cjs | 258.10 | 374.22 |
| 10000-startup-routes-schema.cjs | 4603.75 | 4876.57 |
| 10000-startup-routes.cjs | 4388.27 | 5686.18 |
| startup-listen.cjs | 98.68 | 109.79 |
