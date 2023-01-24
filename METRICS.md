# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Tue Jan 24 2023 02:34:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 162.89 | 217.94 |
| 1-startup-routes.cjs | 162.64 | 173.26 |
| 10-startup-routes-schema.cjs | 164.93 | 231.57 |
| 10-startup-routes.cjs | 162.60 | 175.06 |
| 100-startup-routes-schema.cjs | 177.34 | 350.47 |
| 100-startup-routes.cjs | 176.33 | 200.05 |
| 1000-startup-routes-schema.cjs | 402.51 | 1446.86 |
| 1000-startup-routes.cjs | 368.76 | 516.62 |
| 10000-startup-routes-schema.cjs | 6118.48 | 18263.15 |
| 10000-startup-routes.cjs | 5257.27 | 8822.29 |
| startup-listen.cjs | 163.78 | 175.98 |
