# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Sun Oct 27 2024 18:35:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 101.39 | 136.32 |
| 1-startup-routes.cjs | 101.14 | 111.48 |
| 10-startup-routes-schema.cjs | 106.52 | 142.43 |
| 10-startup-routes.cjs | 103.49 | 115.53 |
| 100-startup-routes-schema.cjs | 113.92 | 154.78 |
| 100-startup-routes.cjs | 114.92 | 135.55 |
| 1000-startup-routes-schema.cjs | 280.00 | 378.72 |
| 1000-startup-routes.cjs | 263.14 | 371.22 |
| 10000-startup-routes-schema.cjs | 4893.14 | 5167.92 |
| 10000-startup-routes.cjs | 4894.77 | 6217.82 |
| startup-listen.cjs | 106.31 | 117.87 |
