# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Wed Sep 04 2024 11:01:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 105.10 | 148.84 |
| 1-startup-routes.cjs | 104.81 | 115.35 |
| 10-startup-routes-schema.cjs | 105.00 | 159.80 |
| 10-startup-routes.cjs | 106.67 | 118.86 |
| 100-startup-routes-schema.cjs | 117.02 | 257.18 |
| 100-startup-routes.cjs | 119.04 | 139.20 |
| 1000-startup-routes-schema.cjs | 289.91 | 1039.21 |
| 1000-startup-routes.cjs | 275.09 | 392.90 |
| 10000-startup-routes-schema.cjs | 6302.87 | 13227.25 |
| 10000-startup-routes.cjs | 5311.03 | 6624.98 |
| startup-listen.cjs | 114.26 | 127.91 |
