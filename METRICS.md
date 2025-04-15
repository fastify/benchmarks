# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 09:46:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.03 | 129.45 |
| 1-startup-routes.cjs | 95.25 | 105.33 |
| 10-startup-routes-schema.cjs | 94.97 | 131.90 |
| 10-startup-routes.cjs | 96.72 | 108.68 |
| 100-startup-routes-schema.cjs | 108.37 | 148.18 |
| 100-startup-routes.cjs | 105.99 | 125.87 |
| 1000-startup-routes-schema.cjs | 272.35 | 370.86 |
| 1000-startup-routes.cjs | 256.00 | 368.69 |
| 10000-startup-routes-schema.cjs | 4762.35 | 5040.35 |
| 10000-startup-routes.cjs | 4767.36 | 6095.71 |
| startup-listen.cjs | 95.84 | 106.75 |
