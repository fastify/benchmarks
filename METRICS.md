# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.4`
* __Run:__ Tue Sep 02 2025 13:06:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 97.06 | 134.59 |
| 1-startup-routes.cjs | 96.36 | 106.64 |
| 10-startup-routes-schema.cjs | 98.62 | 135.66 |
| 10-startup-routes.cjs | 98.21 | 110.45 |
| 100-startup-routes-schema.cjs | 111.77 | 154.54 |
| 100-startup-routes.cjs | 108.99 | 128.77 |
| 1000-startup-routes-schema.cjs | 281.61 | 384.28 |
| 1000-startup-routes.cjs | 265.70 | 379.38 |
| 10000-startup-routes-schema.cjs | 4609.72 | 4893.74 |
| 10000-startup-routes.cjs | 4559.22 | 5828.95 |
| startup-listen.cjs | 96.64 | 107.58 |
