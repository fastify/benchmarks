# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Wed Nov 29 2023 10:29:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 110.52 | 154.82 |
| 1-startup-routes.cjs | 111.85 | 122.85 |
| 10-startup-routes-schema.cjs | 112.88 | 168.15 |
| 10-startup-routes.cjs | 112.42 | 125.12 |
| 100-startup-routes-schema.cjs | 124.75 | 263.82 |
| 100-startup-routes.cjs | 123.19 | 144.10 |
| 1000-startup-routes-schema.cjs | 295.59 | 1053.79 |
| 1000-startup-routes.cjs | 276.49 | 384.00 |
| 10000-startup-routes-schema.cjs | 4983.77 | 12276.97 |
| 10000-startup-routes.cjs | 5065.63 | 6547.75 |
| startup-listen.cjs | 109.11 | 120.77 |
