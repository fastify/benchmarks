# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Fri Nov 26 2021 18:10:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 153.11 | 189.44 |
| 1-startup-routes.js | 152.93 | 164.41 |
| 10-startup-routes-schema.js | 153.51 | 196.27 |
| 10-startup-routes.js | 153.91 | 167.08 |
| 100-startup-routes-schema.js | 157.09 | 255.95 |
| 100-startup-routes.js | 161.51 | 186.45 |
| 1000-startup-routes-schema.js | 192.24 | 834.25 |
| 1000-startup-routes.js | 190.39 | 352.05 |
| 10000-startup-routes-schema.js | 493.39 | 5346.79 |
| 10000-startup-routes.js | 473.08 | 2050.33 |
| startup-listen.js | 153.90 | 164.41 |
