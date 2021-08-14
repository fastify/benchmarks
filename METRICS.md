# Metrics
* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v14.15.4`
* __Run:__ Sat Aug 14 2021 19:00:36 GMT-0300 (Brasilia Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup | listen |
|-| -       | -      |
| 1-startup-routes-schema.js | 84.52293519999998 | 104.6028878 |
| 1-startup-routes.js | 90.6614802 | 96.8507398 |
| 10-startup-routes-schema.js | 90.010481 | 113.83573679999999 |
| 10-startup-routes.js | 86.0981972 | 93.12851580000002 |
| 100-startup-routes-schema.js | 86.82749679999999 | 136.79089779999998 |
| 100-startup-routes.js | 86.29881 | 100.58765740000001 |
| 1000-startup-routes-schema.js | 113.9943434 | 419.1845534 |
| 1000-startup-routes.js | 103.08558639999998 | 188.1181644 |
| 10000-startup-routes-schema.js | 272.4561028 | 2265.5596358000003 |
| 10000-startup-routes.js | 273.3987814 | 799.551615 |
| startup-listen.js | 87.4379224 | 93.06698639999999 |
