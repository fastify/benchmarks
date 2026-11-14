# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.3`
* __Run:__ Sat Nov 14 2026 20:28:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 59.81 | 78.38 |
| 1-startup-routes.cjs | 53.84 | 60.93 |
| 10-startup-routes-schema.cjs | 52.37 | 71.07 |
| 10-startup-routes.cjs | 54.25 | 62.20 |
| 100-startup-routes-schema.cjs | 54.68 | 75.08 |
| 100-startup-routes.cjs | 55.75 | 66.79 |
| 1000-startup-routes-schema.cjs | 80.69 | 116.15 |
| 1000-startup-routes.cjs | 76.87 | 110.64 |
| 10000-startup-routes-schema.cjs | 226.36 | 403.72 |
| 10000-startup-routes.cjs | 251.61 | 1018.01 |
| startup-listen.cjs | 53.52 | 61.07 |
