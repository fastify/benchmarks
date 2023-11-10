# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Fri Nov 10 2023 18:12:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 108.96 | 152.22 |
| 1-startup-routes.cjs | 110.08 | 121.15 |
| 10-startup-routes-schema.cjs | 109.54 | 163.79 |
| 10-startup-routes.cjs | 110.70 | 123.32 |
| 100-startup-routes-schema.cjs | 123.55 | 262.13 |
| 100-startup-routes.cjs | 120.57 | 139.63 |
| 1000-startup-routes-schema.cjs | 288.19 | 1028.10 |
| 1000-startup-routes.cjs | 270.64 | 376.43 |
| 10000-startup-routes-schema.cjs | 4492.72 | 11682.38 |
| 10000-startup-routes.cjs | 4543.14 | 6295.42 |
| startup-listen.cjs | 113.33 | 124.95 |
