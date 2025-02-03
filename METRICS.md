# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 03 2025 08:49:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.04 | 128.30 |
| 1-startup-routes.cjs | 92.64 | 103.39 |
| 10-startup-routes-schema.cjs | 96.28 | 132.79 |
| 10-startup-routes.cjs | 96.09 | 108.02 |
| 100-startup-routes-schema.cjs | 109.07 | 149.27 |
| 100-startup-routes.cjs | 107.83 | 129.28 |
| 1000-startup-routes-schema.cjs | 281.62 | 379.91 |
| 1000-startup-routes.cjs | 272.40 | 386.38 |
| 10000-startup-routes-schema.cjs | 4967.08 | 5241.57 |
| 10000-startup-routes.cjs | 5056.22 | 6412.61 |
| startup-listen.cjs | 94.31 | 105.73 |
