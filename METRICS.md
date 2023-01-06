# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Jan 06 2023 16:41:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 165.51 | 222.93 |
| 1-startup-routes.cjs | 166.46 | 179.49 |
| 10-startup-routes-schema.cjs | 165.80 | 234.84 |
| 10-startup-routes.cjs | 168.87 | 182.44 |
| 100-startup-routes-schema.cjs | 182.24 | 365.40 |
| 100-startup-routes.cjs | 178.80 | 206.03 |
| 1000-startup-routes-schema.cjs | 408.12 | 1470.86 |
| 1000-startup-routes.cjs | 382.13 | 533.78 |
| 10000-startup-routes-schema.cjs | 6411.70 | 19245.78 |
| 10000-startup-routes.cjs | 6086.88 | 9487.58 |
| startup-listen.cjs | 161.14 | 174.96 |
