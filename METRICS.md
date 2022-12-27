# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Tue Dec 27 2022 18:18:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 132.90 | 186.69 |
| 1-startup-routes.cjs | 129.60 | 139.69 |
| 10-startup-routes-schema.cjs | 136.19 | 203.60 |
| 10-startup-routes.cjs | 131.63 | 143.59 |
| 100-startup-routes-schema.cjs | 149.50 | 313.46 |
| 100-startup-routes.cjs | 144.95 | 166.92 |
| 1000-startup-routes-schema.cjs | 360.16 | 1390.46 |
| 1000-startup-routes.cjs | 322.71 | 456.88 |
| 10000-startup-routes-schema.cjs | 5969.63 | 17651.04 |
| 10000-startup-routes.cjs | 5896.93 | 8692.18 |
| startup-listen.cjs | 127.64 | 138.21 |
