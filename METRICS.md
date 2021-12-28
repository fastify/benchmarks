# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.2`
* __Run:__ Tue Dec 28 2021 18:10:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 113.34 | 140.96 |
| 1-startup-routes.js | 113.57 | 122.13 |
| 10-startup-routes-schema.js | 113.13 | 144.65 |
| 10-startup-routes.js | 111.02 | 120.70 |
| 100-startup-routes-schema.js | 112.94 | 183.56 |
| 100-startup-routes.js | 113.54 | 131.20 |
| 1000-startup-routes-schema.js | 144.80 | 612.90 |
| 1000-startup-routes.js | 137.51 | 241.34 |
| 10000-startup-routes-schema.js | 364.57 | 3944.67 |
| 10000-startup-routes.js | 363.31 | 1430.68 |
| startup-listen.js | 119.42 | 127.44 |
