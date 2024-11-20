# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Wed Nov 20 2024 14:36:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 93.36 | 127.81 |
| 1-startup-routes.cjs | 94.38 | 104.38 |
| 10-startup-routes-schema.cjs | 95.33 | 131.74 |
| 10-startup-routes.cjs | 95.03 | 106.65 |
| 100-startup-routes-schema.cjs | 107.32 | 146.12 |
| 100-startup-routes.cjs | 104.73 | 125.40 |
| 1000-startup-routes-schema.cjs | 276.68 | 374.93 |
| 1000-startup-routes.cjs | 270.16 | 384.54 |
| 10000-startup-routes-schema.cjs | 4516.63 | 4788.77 |
| 10000-startup-routes.cjs | 4442.64 | 5677.05 |
| startup-listen.cjs | 93.62 | 104.34 |
