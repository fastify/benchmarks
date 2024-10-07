# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Mon Oct 07 2024 09:35:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 103.29 | 140.77 |
| 1-startup-routes.cjs | 105.50 | 116.11 |
| 10-startup-routes-schema.cjs | 105.82 | 143.27 |
| 10-startup-routes.cjs | 106.80 | 119.47 |
| 100-startup-routes-schema.cjs | 116.56 | 158.68 |
| 100-startup-routes.cjs | 117.42 | 137.59 |
| 1000-startup-routes-schema.cjs | 298.74 | 400.58 |
| 1000-startup-routes.cjs | 280.14 | 394.12 |
| 10000-startup-routes-schema.cjs | 5442.83 | 5719.24 |
| 10000-startup-routes.cjs | 4550.75 | 5955.07 |
| startup-listen.cjs | 106.79 | 118.07 |
