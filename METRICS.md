# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 09:43:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.11 | 132.19 |
| 1-startup-routes.cjs | 95.32 | 105.62 |
| 10-startup-routes-schema.cjs | 99.25 | 137.09 |
| 10-startup-routes.cjs | 98.73 | 110.84 |
| 100-startup-routes-schema.cjs | 110.69 | 152.12 |
| 100-startup-routes.cjs | 109.59 | 130.34 |
| 1000-startup-routes-schema.cjs | 278.72 | 384.89 |
| 1000-startup-routes.cjs | 262.75 | 384.00 |
| 10000-startup-routes-schema.cjs | 4590.59 | 4878.53 |
| 10000-startup-routes.cjs | 4729.44 | 6072.67 |
| startup-listen.cjs | 100.63 | 111.59 |
