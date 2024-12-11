# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Wed Dec 11 2024 15:32:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.65 | 130.50 |
| 1-startup-routes.cjs | 92.31 | 103.53 |
| 10-startup-routes-schema.cjs | 97.06 | 133.92 |
| 10-startup-routes.cjs | 93.24 | 104.80 |
| 100-startup-routes-schema.cjs | 107.72 | 149.18 |
| 100-startup-routes.cjs | 104.86 | 124.79 |
| 1000-startup-routes-schema.cjs | 277.03 | 381.86 |
| 1000-startup-routes.cjs | 261.93 | 371.16 |
| 10000-startup-routes-schema.cjs | 4601.79 | 4876.57 |
| 10000-startup-routes.cjs | 4348.11 | 5669.47 |
| startup-listen.cjs | 91.53 | 102.42 |
