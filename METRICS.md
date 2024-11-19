# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:04:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.01 | 127.90 |
| 1-startup-routes.cjs | 95.45 | 105.51 |
| 10-startup-routes-schema.cjs | 94.38 | 130.80 |
| 10-startup-routes.cjs | 95.42 | 107.19 |
| 100-startup-routes-schema.cjs | 107.00 | 146.56 |
| 100-startup-routes.cjs | 105.84 | 127.05 |
| 1000-startup-routes-schema.cjs | 270.67 | 366.36 |
| 1000-startup-routes.cjs | 269.06 | 380.83 |
| 10000-startup-routes-schema.cjs | 4434.28 | 4703.43 |
| 10000-startup-routes.cjs | 4355.98 | 5687.81 |
| startup-listen.cjs | 92.65 | 103.54 |
