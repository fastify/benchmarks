# Metrics
* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Thu Jun 23 2022 17:21:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.js | 173.79 | 251.72 |
| 1-startup-routes.js | 173.48 | 190.79 |
| 10-startup-routes-schema.js | 177.30 | 274.78 |
| 10-startup-routes.js | 175.40 | 196.06 |
| 100-startup-routes-schema.js | 187.33 | 458.64 |
| 100-startup-routes.js | 182.96 | 237.88 |
| 1000-startup-routes-schema.js | 333.45 | 2054.87 |
| 1000-startup-routes.js | 301.60 | 692.73 |
| 10000-startup-routes-schema.js | 2309.42 | 24501.81 |
| 10000-startup-routes.js | 2073.69 | 10827.04 |
| startup-listen.js | 179.38 | 197.74 |
