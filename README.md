<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Mon Apr 29 2024 01:33:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.12.2 | ✗      | 45137.6    | 21.66        | 8.05          |
| connect                  | 3.7.0    | ✗      | 44982.4    | 21.74        | 8.02          |
| fastify                  | 4.26.2   | ✓      | 44862.4    | 21.80        | 8.04          |
| polkadot                 | 1.0.0    | ✗      | 44858.4    | 21.80        | 8.00          |
| rayo                     | 1.4.6    | ✓      | 44592.0    | 21.93        | 7.95          |
| polka                    | 0.5.2    | ✓      | 44556.0    | 21.99        | 7.95          |
| 0http                    | 3.5.3    | ✓      | 44210.4    | 22.12        | 7.88          |
| server-base-router       | 7.1.32   | ✓      | 43513.6    | 22.48        | 7.76          |
| server-base              | 7.1.32   | ✗      | 43228.8    | 22.63        | 7.71          |
| connect-router           | 1.3.8    | ✓      | 42483.2    | 23.04        | 7.58          |
| h3                       | 1.11.1   | ✗      | 41828.8    | 23.42        | 7.46          |
| h3-router                | 1.11.1   | ✓      | 39782.4    | 24.64        | 7.09          |
| hono                     | 4.2.8    | ✓      | 39368.8    | 24.90        | 7.02          |
| restana                  | 4.9.9    | ✓      | 37133.8    | 26.44        | 6.62          |
| koa                      | 2.15.3   | ✗      | 35760.8    | 27.46        | 6.38          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34299.6    | 28.66        | 6.12          |
| take-five                | 2.0.0    | ✓      | 34061.0    | 28.85        | 12.25         |
| restify                  | 11.1.0   | ✓      | 33341.6    | 29.48        | 6.01          |
| koa-router               | 12.0.1   | ✓      | 33054.0    | 29.74        | 5.89          |
| hapi                     | 21.3.9   | ✓      | 29606.4    | 33.27        | 5.28          |
| fastify-big-json         | 4.26.2   | ✓      | 11793.6    | 84.22        | 135.70        |
| express                  | 4.19.2   | ✓      | 10615.6    | 93.58        | 1.89          |
| express-with-middlewares | 4.19.2   | ✓      | 10145.0    | 97.98        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
