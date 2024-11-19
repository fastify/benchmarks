# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:46:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.75 | 130.37 |
| 1-startup-routes.cjs | 95.29 | 105.65 |
| 10-startup-routes-schema.cjs | 99.04 | 135.68 |
| 10-startup-routes.cjs | 96.92 | 108.93 |
| 100-startup-routes-schema.cjs | 109.18 | 150.40 |
| 100-startup-routes.cjs | 108.11 | 129.91 |
| 1000-startup-routes-schema.cjs | 280.19 | 385.16 |
| 1000-startup-routes.cjs | 260.90 | 373.24 |
| 10000-startup-routes-schema.cjs | 4631.40 | 4918.44 |
| 10000-startup-routes.cjs | 4533.24 | 5826.73 |
| startup-listen.cjs | 95.33 | 106.29 |
