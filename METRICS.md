# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Wed Jan 15 2025 16:14:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.32 | 133.33 |
| 1-startup-routes.cjs | 98.15 | 108.61 |
| 10-startup-routes-schema.cjs | 97.87 | 135.86 |
| 10-startup-routes.cjs | 99.42 | 111.65 |
| 100-startup-routes-schema.cjs | 110.35 | 152.28 |
| 100-startup-routes.cjs | 110.71 | 131.90 |
| 1000-startup-routes-schema.cjs | 284.34 | 390.28 |
| 1000-startup-routes.cjs | 275.63 | 395.52 |
| 10000-startup-routes-schema.cjs | 4890.63 | 5181.74 |
| 10000-startup-routes.cjs | 4494.73 | 5857.47 |
| startup-listen.cjs | 100.74 | 113.88 |
