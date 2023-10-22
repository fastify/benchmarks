# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.18.2`
* __Run:__ Sun Oct 22 2023 06:51:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 168.55 | 231.24 |
| 1-startup-routes.cjs | 166.24 | 181.08 |
| 10-startup-routes-schema.cjs | 169.66 | 247.90 |
| 10-startup-routes.cjs | 173.33 | 190.46 |
| 100-startup-routes-schema.cjs | 185.62 | 387.36 |
| 100-startup-routes.cjs | 184.92 | 210.65 |
| 1000-startup-routes-schema.cjs | 468.76 | 1673.25 |
| 1000-startup-routes.cjs | 440.09 | 601.23 |
| 10000-startup-routes-schema.cjs | 9842.73 | 23470.76 |
| 10000-startup-routes.cjs | 9265.11 | 13302.73 |
| startup-listen.cjs | 169.67 | 184.54 |
