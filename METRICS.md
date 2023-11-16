# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Thu Nov 16 2023 16:37:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 115.11 | 161.23 |
| 1-startup-routes.cjs | 114.69 | 126.32 |
| 10-startup-routes-schema.cjs | 118.02 | 176.60 |
| 10-startup-routes.cjs | 118.10 | 131.56 |
| 100-startup-routes-schema.cjs | 129.30 | 273.44 |
| 100-startup-routes.cjs | 129.00 | 149.70 |
| 1000-startup-routes-schema.cjs | 305.27 | 1076.54 |
| 1000-startup-routes.cjs | 280.77 | 394.78 |
| 10000-startup-routes-schema.cjs | 4984.05 | 12617.45 |
| 10000-startup-routes.cjs | 4733.19 | 6408.14 |
| startup-listen.cjs | 119.83 | 132.47 |
