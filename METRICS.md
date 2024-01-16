# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.10.0`
* __Run:__ Tue Jan 16 2024 14:11:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 106.77 | 150.29 |
| 1-startup-routes.cjs | 108.74 | 119.97 |
| 10-startup-routes-schema.cjs | 109.42 | 163.65 |
| 10-startup-routes.cjs | 110.59 | 123.47 |
| 100-startup-routes-schema.cjs | 119.63 | 256.65 |
| 100-startup-routes.cjs | 121.99 | 143.96 |
| 1000-startup-routes-schema.cjs | 281.91 | 1020.68 |
| 1000-startup-routes.cjs | 276.01 | 383.75 |
| 10000-startup-routes-schema.cjs | 4799.75 | 11957.80 |
| 10000-startup-routes.cjs | 5193.35 | 7056.10 |
| startup-listen.cjs | 109.48 | 121.39 |
