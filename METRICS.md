# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.4`
* __Run:__ Thu Aug 14 2025 17:42:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 99.73 | 135.83 |
| 1-startup-routes.cjs | 99.55 | 110.09 |
| 10-startup-routes-schema.cjs | 102.19 | 140.44 |
| 10-startup-routes.cjs | 103.42 | 115.98 |
| 100-startup-routes-schema.cjs | 114.35 | 157.65 |
| 100-startup-routes.cjs | 113.27 | 134.72 |
| 1000-startup-routes-schema.cjs | 292.35 | 398.48 |
| 1000-startup-routes.cjs | 272.13 | 394.36 |
| 10000-startup-routes-schema.cjs | 4776.62 | 5063.96 |
| 10000-startup-routes.cjs | 4567.27 | 5900.51 |
| startup-listen.cjs | 103.10 | 114.40 |
