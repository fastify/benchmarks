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
* __Node:__ `v20.16.0`
* __Run:__ Mon Aug 12 2024 01:42:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.28.1   | ✓      | 45611.2    | 21.42        | 8.18          |
| bare                     | v20.16.0 | ✗      | 45284.0    | 21.58        | 8.08          |
| connect                  | 3.7.0    | ✗      | 44369.6    | 22.05        | 7.91          |
| polka                    | 0.5.2    | ✓      | 44249.6    | 22.10        | 7.89          |
| rayo                     | 1.4.6    | ✓      | 43551.2    | 22.46        | 7.77          |
| polkadot                 | 1.0.0    | ✗      | 42456.0    | 23.06        | 7.57          |
| server-base              | 7.1.32   | ✗      | 42344.0    | 23.12        | 7.55          |
| server-base-router       | 7.1.32   | ✓      | 42312.8    | 23.13        | 7.55          |
| 0http                    | 3.5.3    | ✓      | 42198.4    | 23.20        | 7.53          |
| connect-router           | 1.3.8    | ✓      | 42102.4    | 23.26        | 7.51          |
| hono                     | 4.5.5    | ✓      | 39421.6    | 24.86        | 7.03          |
| h3-router                | 1.12.0   | ✓      | 38437.6    | 25.52        | 6.85          |
| h3                       | 1.12.0   | ✗      | 38254.4    | 25.64        | 6.82          |
| koa                      | 2.15.3   | ✗      | 36319.0    | 27.02        | 6.48          |
| restana                  | 4.9.9    | ✓      | 34681.0    | 28.33        | 6.19          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34142.2    | 28.79        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 33901.4    | 28.99        | 6.05          |
| take-five                | 2.0.0    | ✓      | 33382.8    | 29.45        | 12.00         |
| restify                  | 11.1.0   | ✓      | 32718.8    | 30.06        | 5.90          |
| hapi                     | 21.3.10  | ✓      | 30417.6    | 32.37        | 5.42          |
| fastify-big-json         | 4.28.1   | ✓      | 11701.2    | 84.89        | 134.64        |
| express                  | 4.19.2   | ✓      | 10819.2    | 91.85        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 9939.0     | 100.03       | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
