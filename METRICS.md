# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Thu Apr 18 2024 18:46:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 103.04 | 146.85 |
| 1-startup-routes.cjs | 102.66 | 112.99 |
| 10-startup-routes-schema.cjs | 106.23 | 160.10 |
| 10-startup-routes.cjs | 106.82 | 118.88 |
| 100-startup-routes-schema.cjs | 116.55 | 255.60 |
| 100-startup-routes.cjs | 115.63 | 134.11 |
| 1000-startup-routes-schema.cjs | 289.06 | 1024.52 |
| 1000-startup-routes.cjs | 268.45 | 378.65 |
| 10000-startup-routes-schema.cjs | 5295.85 | 12247.24 |
| 10000-startup-routes.cjs | 5246.42 | 6606.05 |
| startup-listen.cjs | 102.03 | 112.88 |
