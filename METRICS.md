# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v20.8.1`
* __Run:__ Thu Oct 26 2023 13:03:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 165.71 | 232.52 |
| 1-startup-routes.cjs | 163.72 | 180.25 |
| 10-startup-routes-schema.cjs | 167.30 | 254.36 |
| 10-startup-routes.cjs | 170.03 | 191.45 |
| 100-startup-routes-schema.cjs | 181.98 | 413.51 |
| 100-startup-routes.cjs | 182.46 | 213.94 |
| 1000-startup-routes-schema.cjs | 470.22 | 1768.78 |
| 1000-startup-routes.cjs | 452.46 | 630.27 |
| 10000-startup-routes-schema.cjs | 10867.26 | 24621.67 |
| 10000-startup-routes.cjs | 10387.05 | 14482.48 |
| startup-listen.cjs | 171.20 | 189.43 |
