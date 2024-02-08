# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Thu Feb 08 2024 20:22:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 111.46 | 157.22 |
| 1-startup-routes.cjs | 113.85 | 125.78 |
| 10-startup-routes-schema.cjs | 115.73 | 173.54 |
| 10-startup-routes.cjs | 118.36 | 132.20 |
| 100-startup-routes-schema.cjs | 127.95 | 273.22 |
| 100-startup-routes.cjs | 127.19 | 150.52 |
| 1000-startup-routes-schema.cjs | 309.32 | 1073.09 |
| 1000-startup-routes.cjs | 294.14 | 413.78 |
| 10000-startup-routes-schema.cjs | 4978.20 | 12400.13 |
| 10000-startup-routes.cjs | 6750.43 | 8057.12 |
| startup-listen.cjs | 112.50 | 125.00 |
