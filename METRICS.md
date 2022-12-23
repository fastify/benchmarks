# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Dec 23 2022 16:51:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 124.43 | 175.39 |
| 1-startup-routes.js | 120.57 | 130.51 |
| 10-startup-routes-schema.js | 123.38 | 186.98 |
| 10-startup-routes.js | 123.05 | 134.77 |
| 100-startup-routes-schema.js | 134.43 | 286.80 |
| 100-startup-routes.js | 133.79 | 154.18 |
| 1000-startup-routes-schema.js | 313.52 | 1252.65 |
| 1000-startup-routes.js | 288.56 | 420.09 |
| 10000-startup-routes-schema.js | 4146.69 | 14981.38 |
| 10000-startup-routes.js | 4363.35 | 7582.63 |
| startup-listen.js | 120.28 | 131.13 |
