# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sun Dec 25 2022 10:49:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 188.44 | 266.65 |
| 1-startup-routes.js | 188.73 | 203.41 |
| 10-startup-routes-schema.js | 189.56 | 286.85 |
| 10-startup-routes.js | 196.30 | 214.11 |
| 100-startup-routes-schema.js | 211.11 | 443.42 |
| 100-startup-routes.js | 218.77 | 256.19 |
| 1000-startup-routes-schema.js | 528.56 | 2055.14 |
| 1000-startup-routes.js | 527.74 | 759.63 |
| 10000-startup-routes-schema.js | 8198.73 | 24202.48 |
| 10000-startup-routes.js | 8294.55 | 12363.42 |
| startup-listen.js | 201.59 | 217.65 |
