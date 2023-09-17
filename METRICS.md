# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.17.1`
* __Run:__ Sun Sep 17 2023 07:02:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 135.34 | 188.67 |
| 1-startup-routes.cjs | 136.17 | 148.44 |
| 10-startup-routes-schema.cjs | 138.91 | 205.53 |
| 10-startup-routes.cjs | 139.66 | 153.50 |
| 100-startup-routes-schema.cjs | 150.99 | 315.68 |
| 100-startup-routes.cjs | 150.53 | 172.95 |
| 1000-startup-routes-schema.cjs | 356.90 | 1316.69 |
| 1000-startup-routes.cjs | 326.85 | 457.84 |
| 10000-startup-routes-schema.cjs | 6222.07 | 17352.30 |
| 10000-startup-routes.cjs | 5794.85 | 9052.89 |
| startup-listen.cjs | 136.27 | 148.86 |
