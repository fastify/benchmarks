# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.10.0`
* __Run:__ Fri Dec 01 2023 15:44:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 106.78 | 150.07 |
| 1-startup-routes.cjs | 108.98 | 120.34 |
| 10-startup-routes-schema.cjs | 110.54 | 164.16 |
| 10-startup-routes.cjs | 109.18 | 121.96 |
| 100-startup-routes-schema.cjs | 120.77 | 257.02 |
| 100-startup-routes.cjs | 120.70 | 141.44 |
| 1000-startup-routes-schema.cjs | 290.24 | 1040.87 |
| 1000-startup-routes.cjs | 284.31 | 391.63 |
| 10000-startup-routes-schema.cjs | 4834.95 | 12157.76 |
| 10000-startup-routes.cjs | 5139.17 | 7014.67 |
| startup-listen.cjs | 110.39 | 123.63 |
