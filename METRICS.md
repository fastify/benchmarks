# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Fri Jul 01 2022 20:24:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 120.53 | 173.64 |
| 1-startup-routes.js | 119.40 | 131.08 |
| 10-startup-routes-schema.js | 120.62 | 185.98 |
| 10-startup-routes.js | 122.02 | 135.52 |
| 100-startup-routes-schema.js | 134.47 | 316.43 |
| 100-startup-routes.js | 133.92 | 160.59 |
| 1000-startup-routes-schema.js | 297.12 | 1346.77 |
| 1000-startup-routes.js | 259.60 | 427.96 |
| 10000-startup-routes-schema.js | 3838.38 | 14980.84 |
| 10000-startup-routes.js | 3708.59 | 6716.68 |
| startup-listen.js | 122.52 | 135.29 |
