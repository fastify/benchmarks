# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Thu Dec 05 2024 14:12:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.01 | 130.63 |
| 1-startup-routes.cjs | 97.49 | 107.86 |
| 10-startup-routes-schema.cjs | 95.54 | 132.44 |
| 10-startup-routes.cjs | 100.18 | 111.95 |
| 100-startup-routes-schema.cjs | 106.56 | 146.78 |
| 100-startup-routes.cjs | 109.76 | 130.36 |
| 1000-startup-routes-schema.cjs | 276.15 | 374.50 |
| 1000-startup-routes.cjs | 286.21 | 398.85 |
| 10000-startup-routes-schema.cjs | 4399.01 | 4676.33 |
| 10000-startup-routes.cjs | 4418.76 | 5794.39 |
| startup-listen.cjs | 101.36 | 114.22 |
