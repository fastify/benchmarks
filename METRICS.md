# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Sun May 04 2025 16:47:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.00 | 132.95 |
| 1-startup-routes.cjs | 96.49 | 106.91 |
| 10-startup-routes-schema.cjs | 97.73 | 134.44 |
| 10-startup-routes.cjs | 101.21 | 113.31 |
| 100-startup-routes-schema.cjs | 108.49 | 149.79 |
| 100-startup-routes.cjs | 111.70 | 133.35 |
| 1000-startup-routes-schema.cjs | 276.03 | 380.58 |
| 1000-startup-routes.cjs | 266.84 | 383.52 |
| 10000-startup-routes-schema.cjs | 4945.86 | 5233.25 |
| 10000-startup-routes.cjs | 4469.46 | 5799.31 |
| startup-listen.cjs | 99.08 | 110.27 |
