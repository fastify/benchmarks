# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Fri Oct 18 2024 17:57:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 108.02 | 144.51 |
| 1-startup-routes.cjs | 104.28 | 115.11 |
| 10-startup-routes-schema.cjs | 109.68 | 146.74 |
| 10-startup-routes.cjs | 107.15 | 119.60 |
| 100-startup-routes-schema.cjs | 119.49 | 165.35 |
| 100-startup-routes.cjs | 118.68 | 139.72 |
| 1000-startup-routes-schema.cjs | 295.02 | 400.59 |
| 1000-startup-routes.cjs | 281.52 | 402.35 |
| 10000-startup-routes-schema.cjs | 4729.98 | 5021.39 |
| 10000-startup-routes.cjs | 4648.85 | 6096.02 |
| startup-listen.cjs | 112.83 | 124.10 |
