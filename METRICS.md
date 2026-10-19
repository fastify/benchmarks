# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.0`
* __Run:__ Mon Oct 19 2026 06:53:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 94.20 | 127.37 |
| 1-startup-routes.cjs | 93.68 | 104.22 |
| 10-startup-routes-schema.cjs | 95.28 | 130.05 |
| 10-startup-routes.cjs | 96.81 | 108.31 |
| 100-startup-routes-schema.cjs | 100.79 | 139.51 |
| 100-startup-routes.cjs | 102.33 | 121.57 |
| 1000-startup-routes-schema.cjs | 148.88 | 213.51 |
| 1000-startup-routes.cjs | 151.44 | 208.14 |
| 10000-startup-routes-schema.cjs | 379.27 | 672.95 |
| 10000-startup-routes.cjs | 404.75 | 1963.77 |
| startup-listen.cjs | 96.36 | 107.85 |
