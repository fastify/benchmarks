# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Sat Jan 17 2026 06:39:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.26 | 125.49 |
| 1-startup-routes.cjs | 92.28 | 102.24 |
| 10-startup-routes-schema.cjs | 93.23 | 125.70 |
| 10-startup-routes.cjs | 92.46 | 103.92 |
| 100-startup-routes-schema.cjs | 99.50 | 135.84 |
| 100-startup-routes.cjs | 97.83 | 117.38 |
| 1000-startup-routes-schema.cjs | 191.25 | 254.01 |
| 1000-startup-routes.cjs | 185.89 | 243.44 |
| 10000-startup-routes-schema.cjs | 3417.23 | 3643.46 |
| 10000-startup-routes.cjs | 2978.93 | 4407.15 |
| startup-listen.cjs | 97.16 | 108.26 |
