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
* __Node:__ `v20.17.0`
* __Run:__ Mon Oct 14 2024 01:49:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.0.0    | ✓      | 46836.0    | 20.84        | 8.40          |
| polka                    | 0.5.2    | ✓      | 45924.0    | 21.27        | 8.19          |
| bare                     | v20.17.0 | ✗      | 45556.8    | 21.45        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45484.8    | 21.48        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 44819.2    | 21.82        | 7.99          |
| server-base              | 7.1.32   | ✗      | 44659.2    | 21.90        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 44528.0    | 21.96        | 7.94          |
| micro                    | 10.0.1   | ✗      | 44251.2    | 22.10        | 7.89          |
| connect                  | 3.7.0    | ✗      | 43463.2    | 22.51        | 7.75          |
| 0http                    | 3.5.3    | ✓      | 42397.6    | 23.09        | 7.56          |
| connect-router           | 1.3.8    | ✓      | 41432.8    | 23.64        | 7.39          |
| micro-route              | 2.5.0    | ✓      | 41028.8    | 23.87        | 7.32          |
| hono                     | 4.6.4    | ✓      | 39308.0    | 24.93        | 7.01          |
| h3-router                | 1.13.0   | ✓      | 38413.6    | 25.54        | 6.85          |
| restana                  | 4.9.9    | ✓      | 38394.4    | 25.55        | 6.85          |
| h3                       | 1.13.0   | ✗      | 38191.2    | 25.68        | 6.81          |
| koa                      | 2.15.3   | ✗      | 36278.6    | 27.06        | 6.47          |
| restify                  | 11.1.0   | ✓      | 33929.0    | 28.96        | 6.12          |
| take-five                | 2.0.0    | ✓      | 33845.2    | 29.04        | 12.17         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33290.0    | 29.54        | 5.94          |
| koa-router               | 12.0.1   | ✓      | 32769.8    | 30.02        | 5.84          |
| hapi                     | 21.3.10  | ✓      | 30121.6    | 32.69        | 5.37          |
| microrouter              | 3.1.3    | ✓      | 29785.6    | 33.06        | 5.31          |
| fastify-big-json         | 5.0.0    | ✓      | 11744.8    | 84.57        | 135.13        |
| express                  | 5.0.1    | ✓      | 9647.9     | 103.07       | 1.72          |
| express-with-middlewares | 5.0.1    | ✓      | 8886.1     | 111.90       | 3.30          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
