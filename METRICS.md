# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 13 2024 06:46:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 106.80 | 150.32 |
| 1-startup-routes.cjs | 105.51 | 116.62 |
| 10-startup-routes-schema.cjs | 108.30 | 161.61 |
| 10-startup-routes.cjs | 107.92 | 120.70 |
| 100-startup-routes-schema.cjs | 119.71 | 256.08 |
| 100-startup-routes.cjs | 119.39 | 140.95 |
| 1000-startup-routes-schema.cjs | 288.06 | 1033.42 |
| 1000-startup-routes.cjs | 280.34 | 390.30 |
| 10000-startup-routes-schema.cjs | 4814.67 | 11507.52 |
| 10000-startup-routes.cjs | 5460.95 | 6731.95 |
| startup-listen.cjs | 109.49 | 121.84 |
