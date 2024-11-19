# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:06:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.39 | 127.19 |
| 1-startup-routes.cjs | 94.30 | 104.42 |
| 10-startup-routes-schema.cjs | 95.13 | 131.20 |
| 10-startup-routes.cjs | 97.41 | 109.21 |
| 100-startup-routes-schema.cjs | 107.12 | 148.31 |
| 100-startup-routes.cjs | 106.23 | 126.22 |
| 1000-startup-routes-schema.cjs | 279.18 | 380.81 |
| 1000-startup-routes.cjs | 258.10 | 370.49 |
| 10000-startup-routes-schema.cjs | 4424.23 | 4699.67 |
| 10000-startup-routes.cjs | 4655.33 | 5894.99 |
| startup-listen.cjs | 95.00 | 106.03 |
