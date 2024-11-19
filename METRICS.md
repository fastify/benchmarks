# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Tue Nov 19 2024 19:08:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 91.77 | 125.80 |
| 1-startup-routes.cjs | 92.90 | 102.80 |
| 10-startup-routes-schema.cjs | 94.67 | 130.18 |
| 10-startup-routes.cjs | 94.10 | 105.58 |
| 100-startup-routes-schema.cjs | 105.16 | 143.25 |
| 100-startup-routes.cjs | 106.44 | 126.32 |
| 1000-startup-routes-schema.cjs | 265.57 | 366.65 |
| 1000-startup-routes.cjs | 258.66 | 369.37 |
| 10000-startup-routes-schema.cjs | 4335.43 | 4604.18 |
| 10000-startup-routes.cjs | 4316.05 | 5598.87 |
| startup-listen.cjs | 99.52 | 111.50 |
