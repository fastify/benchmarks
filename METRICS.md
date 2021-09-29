# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.17.6`
* __Run:__ Wed Sep 29 2021 16:31:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 175.92 | 218.10 |
| 1-startup-routes.js | 169.37 | 181.15 |
| 10-startup-routes-schema.js | 176.98 | 223.54 |
| 10-startup-routes.js | 168.73 | 182.40 |
| 100-startup-routes-schema.js | 181.28 | 289.53 |
| 100-startup-routes.js | 170.86 | 198.98 |
| 1000-startup-routes-schema.js | 219.60 | 879.41 |
| 1000-startup-routes.js | 205.51 | 377.95 |
| 10000-startup-routes-schema.js | 578.52 | 5531.32 |
| 10000-startup-routes.js | 527.37 | 2058.22 |
| startup-listen.js | 172.41 | 184.08 |
