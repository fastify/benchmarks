# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.18.3`
* __Run:__ Wed Feb 02 2022 21:00:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 146.36 | 182.00 |
| 1-startup-routes.js | 152.94 | 164.16 |
| 10-startup-routes-schema.js | 147.71 | 188.83 |
| 10-startup-routes.js | 148.52 | 161.48 |
| 100-startup-routes-schema.js | 148.80 | 241.69 |
| 100-startup-routes.js | 150.57 | 173.85 |
| 1000-startup-routes-schema.js | 181.88 | 774.62 |
| 1000-startup-routes.js | 178.85 | 318.46 |
| 10000-startup-routes-schema.js | 453.98 | 4928.69 |
| 10000-startup-routes.js | 465.77 | 1700.10 |
| startup-listen.js | 151.18 | 161.44 |
