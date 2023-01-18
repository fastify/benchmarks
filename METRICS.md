# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Wed Jan 18 2023 02:13:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 152.29 | 208.15 |
| 1-startup-routes.cjs | 155.48 | 166.07 |
| 10-startup-routes-schema.cjs | 157.42 | 222.59 |
| 10-startup-routes.cjs | 156.76 | 171.73 |
| 100-startup-routes-schema.cjs | 170.11 | 334.43 |
| 100-startup-routes.cjs | 173.83 | 197.33 |
| 1000-startup-routes-schema.cjs | 358.61 | 1332.71 |
| 1000-startup-routes.cjs | 322.87 | 458.01 |
| 10000-startup-routes-schema.cjs | 4812.63 | 16003.55 |
| 10000-startup-routes.cjs | 4549.77 | 8190.27 |
| startup-listen.cjs | 153.96 | 166.60 |
