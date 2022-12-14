# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Wed Dec 14 2022 09:23:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 170.73 | 242.35 |
| 1-startup-routes.js | 175.52 | 188.55 |
| 10-startup-routes-schema.js | 169.60 | 250.01 |
| 10-startup-routes.js | 188.30 | 204.51 |
| 100-startup-routes-schema.js | 187.01 | 387.84 |
| 100-startup-routes.js | 199.67 | 228.67 |
| 1000-startup-routes-schema.js | 451.69 | 1726.63 |
| 1000-startup-routes.js | 457.32 | 658.44 |
| 10000-startup-routes-schema.js | 7408.56 | 22028.27 |
| 10000-startup-routes.js | 7377.59 | 10789.92 |
| startup-listen.js | 175.62 | 189.08 |
