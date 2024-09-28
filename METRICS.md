# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Sat Sep 28 2024 16:54:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 103.19 | 139.19 |
| 1-startup-routes.cjs | 104.04 | 114.61 |
| 10-startup-routes-schema.cjs | 105.79 | 143.35 |
| 10-startup-routes.cjs | 107.15 | 119.62 |
| 100-startup-routes-schema.cjs | 119.30 | 163.63 |
| 100-startup-routes.cjs | 117.23 | 138.52 |
| 1000-startup-routes-schema.cjs | 293.75 | 396.41 |
| 1000-startup-routes.cjs | 266.94 | 383.42 |
| 10000-startup-routes-schema.cjs | 4594.27 | 4874.97 |
| 10000-startup-routes.cjs | 4634.62 | 5925.76 |
| startup-listen.cjs | 105.01 | 116.18 |
