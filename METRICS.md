# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Sat Jan 11 2025 12:55:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.62 | 126.96 |
| 1-startup-routes.cjs | 91.92 | 102.02 |
| 10-startup-routes-schema.cjs | 95.77 | 131.63 |
| 10-startup-routes.cjs | 95.46 | 107.05 |
| 100-startup-routes-schema.cjs | 104.24 | 144.01 |
| 100-startup-routes.cjs | 104.47 | 124.09 |
| 1000-startup-routes-schema.cjs | 273.28 | 372.76 |
| 1000-startup-routes.cjs | 256.14 | 367.48 |
| 10000-startup-routes-schema.cjs | 5007.32 | 5278.59 |
| 10000-startup-routes.cjs | 4909.49 | 6315.73 |
| startup-listen.cjs | 93.30 | 104.54 |
