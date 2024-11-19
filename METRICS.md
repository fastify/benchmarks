# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:18:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.91 | 129.03 |
| 1-startup-routes.cjs | 93.51 | 103.60 |
| 10-startup-routes-schema.cjs | 95.76 | 131.63 |
| 10-startup-routes.cjs | 93.88 | 105.68 |
| 100-startup-routes-schema.cjs | 106.30 | 145.68 |
| 100-startup-routes.cjs | 106.42 | 126.04 |
| 1000-startup-routes-schema.cjs | 278.95 | 384.77 |
| 1000-startup-routes.cjs | 262.24 | 371.69 |
| 10000-startup-routes-schema.cjs | 4696.52 | 4979.13 |
| 10000-startup-routes.cjs | 5230.01 | 6697.07 |
| startup-listen.cjs | 95.56 | 106.99 |
