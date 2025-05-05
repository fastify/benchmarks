# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Mon May 05 2025 08:16:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 96.23 | 131.46 |
| 1-startup-routes.cjs | 98.15 | 108.44 |
| 10-startup-routes-schema.cjs | 97.33 | 133.90 |
| 10-startup-routes.cjs | 98.21 | 110.32 |
| 100-startup-routes-schema.cjs | 109.84 | 150.91 |
| 100-startup-routes.cjs | 107.38 | 128.63 |
| 1000-startup-routes-schema.cjs | 277.53 | 380.41 |
| 1000-startup-routes.cjs | 271.06 | 383.45 |
| 10000-startup-routes-schema.cjs | 4581.32 | 4867.23 |
| 10000-startup-routes.cjs | 4397.94 | 5786.44 |
| startup-listen.cjs | 98.79 | 109.68 |
