# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Fri Oct 03 2025 20:11:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 100.33 | 137.25 |
| 1-startup-routes.cjs | 99.85 | 110.49 |
| 10-startup-routes-schema.cjs | 103.87 | 141.90 |
| 10-startup-routes.cjs | 102.55 | 115.18 |
| 100-startup-routes-schema.cjs | 113.25 | 156.90 |
| 100-startup-routes.cjs | 113.82 | 135.54 |
| 1000-startup-routes-schema.cjs | 282.86 | 392.71 |
| 1000-startup-routes.cjs | 281.80 | 401.20 |
| 10000-startup-routes-schema.cjs | 4704.99 | 4997.60 |
| 10000-startup-routes.cjs | 4483.80 | 5789.64 |
| startup-listen.cjs | 100.75 | 112.15 |
