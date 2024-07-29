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
* __Node:__ `v20.15.1`
* __Run:__ Mon Jul 29 2024 01:41:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.1 | ✗      | 46556.8    | 20.98        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46003.2    | 21.22        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45964.0    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45701.6    | 21.35        | 8.15          |
| fastify                  | 4.28.1   | ✓      | 45520.8    | 21.45        | 8.16          |
| polkadot                 | 1.0.0    | ✗      | 45359.2    | 21.55        | 8.09          |
| server-base              | 7.1.32   | ✗      | 45039.2    | 21.71        | 8.03          |
| server-base-router       | 7.1.32   | ✓      | 44805.6    | 21.83        | 7.99          |
| 0http                    | 3.5.3    | ✓      | 44081.6    | 22.19        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 43041.6    | 22.73        | 7.68          |
| h3                       | 1.12.0   | ✗      | 41542.4    | 23.58        | 7.41          |
| h3-router                | 1.12.0   | ✓      | 40324.0    | 24.30        | 7.19          |
| hono                     | 4.5.2    | ✓      | 40296.8    | 24.32        | 7.19          |
| restana                  | 4.9.9    | ✓      | 38402.4    | 25.54        | 6.85          |
| koa                      | 2.15.3   | ✗      | 36142.2    | 27.17        | 6.45          |
| take-five                | 2.0.0    | ✓      | 34850.0    | 28.19        | 12.53         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34712.0    | 28.30        | 6.19          |
| restify                  | 11.1.0   | ✓      | 34711.4    | 28.31        | 6.26          |
| koa-router               | 12.0.1   | ✓      | 33347.6    | 29.48        | 5.95          |
| hapi                     | 21.3.10  | ✓      | 31053.8    | 31.69        | 5.54          |
| fastify-big-json         | 4.28.1   | ✓      | 11806.2    | 84.14        | 135.84        |
| express                  | 4.19.2   | ✓      | 11010.0    | 90.20        | 1.96          |
| express-with-middlewares | 4.19.2   | ✓      | 10104.8    | 98.35        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
