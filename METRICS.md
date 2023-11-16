# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Thu Nov 16 2023 16:40:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 111.11 | 155.74 |
| 1-startup-routes.cjs | 111.11 | 122.23 |
| 10-startup-routes-schema.cjs | 113.58 | 169.85 |
| 10-startup-routes.cjs | 113.89 | 126.81 |
| 100-startup-routes-schema.cjs | 125.62 | 266.34 |
| 100-startup-routes.cjs | 124.46 | 144.58 |
| 1000-startup-routes-schema.cjs | 294.12 | 1061.67 |
| 1000-startup-routes.cjs | 294.29 | 402.69 |
| 10000-startup-routes-schema.cjs | 4852.56 | 12209.94 |
| 10000-startup-routes.cjs | 4543.54 | 6203.72 |
| startup-listen.cjs | 112.77 | 124.52 |
