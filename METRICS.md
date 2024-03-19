# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Tue Mar 19 2024 21:39:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 106.83 | 150.32 |
| 1-startup-routes.cjs | 108.59 | 119.83 |
| 10-startup-routes-schema.cjs | 110.58 | 164.84 |
| 10-startup-routes.cjs | 110.83 | 123.89 |
| 100-startup-routes-schema.cjs | 123.69 | 262.51 |
| 100-startup-routes.cjs | 120.40 | 140.80 |
| 1000-startup-routes-schema.cjs | 294.05 | 1031.63 |
| 1000-startup-routes.cjs | 281.98 | 407.20 |
| 10000-startup-routes-schema.cjs | 4842.27 | 11579.44 |
| 10000-startup-routes.cjs | 4667.95 | 6039.41 |
| startup-listen.cjs | 112.19 | 123.92 |
