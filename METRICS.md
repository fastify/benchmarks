# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Thu Jan 25 2024 12:42:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 110.49 | 156.23 |
| 1-startup-routes.cjs | 114.74 | 126.53 |
| 10-startup-routes-schema.cjs | 113.10 | 169.33 |
| 10-startup-routes.cjs | 115.03 | 128.65 |
| 100-startup-routes-schema.cjs | 124.05 | 262.87 |
| 100-startup-routes.cjs | 130.17 | 152.51 |
| 1000-startup-routes-schema.cjs | 298.98 | 1056.76 |
| 1000-startup-routes.cjs | 295.95 | 411.71 |
| 10000-startup-routes-schema.cjs | 4976.70 | 12399.16 |
| 10000-startup-routes.cjs | 5425.60 | 7352.03 |
| startup-listen.cjs | 120.10 | 133.23 |
