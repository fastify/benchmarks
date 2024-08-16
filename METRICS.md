# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.16.0`
* __Run:__ Fri Aug 16 2024 08:49:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 102.62 | 146.19 |
| 1-startup-routes.cjs | 102.85 | 113.11 |
| 10-startup-routes-schema.cjs | 105.54 | 159.26 |
| 10-startup-routes.cjs | 104.63 | 116.59 |
| 100-startup-routes-schema.cjs | 115.87 | 254.98 |
| 100-startup-routes.cjs | 115.86 | 136.40 |
| 1000-startup-routes-schema.cjs | 289.16 | 1031.79 |
| 1000-startup-routes.cjs | 269.05 | 379.24 |
| 10000-startup-routes-schema.cjs | 4671.33 | 11409.96 |
| 10000-startup-routes.cjs | 5376.54 | 6622.80 |
| startup-listen.cjs | 104.10 | 114.84 |
