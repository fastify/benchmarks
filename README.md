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
* __Node:__ `v20.13.1`
* __Run:__ Mon May 20 2024 01:34:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.13.1 | ✗      | 46685.6    | 20.92        | 8.33          |
| connect                  | 3.7.0    | ✗      | 45018.4    | 21.71        | 8.03          |
| fastify                  | 4.27.0   | ✓      | 44914.4    | 21.76        | 8.05          |
| polkadot                 | 1.0.0    | ✗      | 44891.2    | 21.78        | 8.01          |
| polka                    | 0.5.2    | ✓      | 44772.0    | 21.84        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44207.2    | 22.12        | 7.88          |
| server-base              | 7.1.32   | ✗      | 44172.0    | 22.14        | 7.88          |
| server-base-router       | 7.1.32   | ✓      | 43744.0    | 22.36        | 7.80          |
| connect-router           | 1.3.8    | ✓      | 42949.6    | 22.77        | 7.66          |
| 0http                    | 3.5.3    | ✓      | 42060.0    | 23.28        | 7.50          |
| h3                       | 1.11.1   | ✗      | 41628.0    | 23.52        | 7.42          |
| h3-router                | 1.11.1   | ✓      | 41060.0    | 23.86        | 7.32          |
| hono                     | 4.3.8    | ✓      | 38116.8    | 25.73        | 6.80          |
| restana                  | 4.9.9    | ✓      | 37073.0    | 26.47        | 6.61          |
| koa                      | 2.15.3   | ✗      | 35825.4    | 27.40        | 6.39          |
| take-five                | 2.0.0    | ✓      | 34089.6    | 28.82        | 12.26         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34060.0    | 28.87        | 6.07          |
| restify                  | 11.1.0   | ✓      | 33951.4    | 28.95        | 6.12          |
| koa-router               | 12.0.1   | ✓      | 33586.0    | 29.28        | 5.99          |
| hapi                     | 21.3.9   | ✓      | 31374.2    | 31.38        | 5.60          |
| fastify-big-json         | 4.27.0   | ✓      | 11385.0    | 87.28        | 130.99        |
| express                  | 4.19.2   | ✓      | 10848.4    | 91.62        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 10094.0    | 98.48        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
