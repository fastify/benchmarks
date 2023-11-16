# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Thu Nov 16 2023 08:05:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 109.47 | 152.05 |
| 1-startup-routes.cjs | 109.39 | 120.37 |
| 10-startup-routes-schema.cjs | 109.80 | 162.78 |
| 10-startup-routes.cjs | 110.87 | 123.39 |
| 100-startup-routes-schema.cjs | 120.95 | 256.85 |
| 100-startup-routes.cjs | 121.58 | 141.02 |
| 1000-startup-routes-schema.cjs | 274.02 | 1015.82 |
| 1000-startup-routes.cjs | 273.34 | 378.52 |
| 10000-startup-routes-schema.cjs | 4559.80 | 11715.61 |
| 10000-startup-routes.cjs | 4591.33 | 6150.91 |
| startup-listen.cjs | 110.07 | 121.60 |
