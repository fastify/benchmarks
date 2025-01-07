# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Tue Jan 07 2025 17:41:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.01 | 126.39 |
| 1-startup-routes.cjs | 92.13 | 102.02 |
| 10-startup-routes-schema.cjs | 93.18 | 129.16 |
| 10-startup-routes.cjs | 94.76 | 106.31 |
| 100-startup-routes-schema.cjs | 105.95 | 146.11 |
| 100-startup-routes.cjs | 104.31 | 123.75 |
| 1000-startup-routes-schema.cjs | 267.70 | 365.61 |
| 1000-startup-routes.cjs | 265.58 | 374.82 |
| 10000-startup-routes-schema.cjs | 4473.64 | 4745.65 |
| 10000-startup-routes.cjs | 4614.44 | 5854.42 |
| startup-listen.cjs | 99.85 | 112.91 |
