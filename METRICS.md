# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.14.2`
* __Run:__ Sun Mar 05 2023 10:50:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 141.61 | 195.97 |
| 1-startup-routes.cjs | 140.47 | 150.62 |
| 10-startup-routes-schema.cjs | 142.71 | 210.59 |
| 10-startup-routes.cjs | 142.87 | 154.83 |
| 100-startup-routes-schema.cjs | 155.57 | 322.42 |
| 100-startup-routes.cjs | 157.13 | 179.75 |
| 1000-startup-routes-schema.cjs | 349.34 | 1412.18 |
| 1000-startup-routes.cjs | 326.49 | 464.53 |
| 10000-startup-routes-schema.cjs | 4902.93 | 17542.77 |
| 10000-startup-routes.cjs | 4178.78 | 7445.43 |
| startup-listen.cjs | 140.29 | 150.88 |
