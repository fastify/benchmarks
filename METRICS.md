# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov 29 2021 14:15:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 141.91 | 176.60 |
| 1-startup-routes.js | 140.82 | 151.57 |
| 10-startup-routes-schema.js | 141.61 | 181.47 |
| 10-startup-routes.js | 141.93 | 154.33 |
| 100-startup-routes-schema.js | 145.10 | 235.54 |
| 100-startup-routes.js | 146.77 | 169.59 |
| 1000-startup-routes-schema.js | 179.91 | 771.85 |
| 1000-startup-routes.js | 176.01 | 316.85 |
| 10000-startup-routes-schema.js | 446.11 | 4852.19 |
| 10000-startup-routes.js | 454.16 | 1806.06 |
| startup-listen.js | 150.47 | 161.06 |
