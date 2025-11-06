# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Thu Nov 06 2025 12:32:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 95.85 | 131.00 |
| 1-startup-routes.cjs | 98.23 | 108.55 |
| 10-startup-routes-schema.cjs | 100.19 | 137.21 |
| 10-startup-routes.cjs | 100.26 | 112.64 |
| 100-startup-routes-schema.cjs | 110.70 | 151.50 |
| 100-startup-routes.cjs | 113.61 | 136.56 |
| 1000-startup-routes-schema.cjs | 286.73 | 387.47 |
| 1000-startup-routes.cjs | 262.01 | 381.09 |
| 10000-startup-routes-schema.cjs | 4604.84 | 4887.63 |
| 10000-startup-routes.cjs | 4503.67 | 6023.69 |
| startup-listen.cjs | 103.77 | 115.40 |
