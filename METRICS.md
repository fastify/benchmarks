# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 31 2025 14:38:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 100.37 | 137.85 |
| 1-startup-routes.cjs | 101.95 | 112.94 |
| 10-startup-routes-schema.cjs | 102.11 | 140.47 |
| 10-startup-routes.cjs | 104.66 | 117.53 |
| 100-startup-routes-schema.cjs | 114.48 | 158.50 |
| 100-startup-routes.cjs | 112.61 | 135.87 |
| 1000-startup-routes-schema.cjs | 281.95 | 388.85 |
| 1000-startup-routes.cjs | 276.84 | 394.76 |
| 10000-startup-routes-schema.cjs | 4971.12 | 5277.89 |
| 10000-startup-routes.cjs | 4842.74 | 6173.79 |
| startup-listen.cjs | 95.29 | 106.38 |
