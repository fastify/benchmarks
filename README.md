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
* __Run:__ Mon Sep 16 2024 01:48:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 47724.8    | 20.48        | 8.51          |
| polka                    | 0.5.2    | ✓      | 47645.6    | 20.48        | 8.50          |
| connect                  | 3.7.0    | ✗      | 47381.6    | 20.59        | 8.45          |
| fastify                  | 4.28.1   | ✓      | 46811.2    | 20.86        | 8.39          |
| server-base              | 7.1.32   | ✗      | 46776.8    | 20.88        | 8.34          |
| server-base-router       | 7.1.32   | ✓      | 46751.2    | 20.89        | 8.34          |
| 0http                    | 3.5.3    | ✓      | 46699.2    | 20.91        | 8.33          |
| rayo                     | 1.4.6    | ✓      | 46618.4    | 20.94        | 8.31          |
| polkadot                 | 1.0.0    | ✗      | 46106.4    | 21.20        | 8.22          |
| micro                    | 10.0.1   | ✗      | 45448.8    | 21.50        | 8.11          |
| connect-router           | 1.3.8    | ✓      | 44216.0    | 22.13        | 7.89          |
| h3                       | 1.12.0   | ✗      | 44096.8    | 22.18        | 7.86          |
| micro-route              | 2.5.0    | ✓      | 43360.8    | 22.56        | 7.73          |
| h3-router                | 1.12.0   | ✓      | 42816.0    | 22.86        | 7.64          |
| hono                     | 4.6.1    | ✓      | 40944.8    | 23.91        | 7.30          |
| restana                  | 4.9.9    | ✓      | 39987.0    | 24.51        | 7.13          |
| koa                      | 2.15.3   | ✗      | 37219.8    | 26.35        | 6.64          |
| take-five                | 2.0.0    | ✓      | 35769.4    | 27.45        | 12.86         |
| restify                  | 11.1.0   | ✓      | 35712.6    | 27.50        | 6.44          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35340.2    | 27.80        | 6.30          |
| koa-router               | 12.0.1   | ✓      | 34566.2    | 28.41        | 6.16          |
| hapi                     | 21.3.10  | ✓      | 31610.0    | 31.12        | 5.64          |
| microrouter              | 3.1.3    | ✓      | 31060.8    | 31.68        | 5.54          |
| fastify-big-json         | 4.28.1   | ✓      | 11845.6    | 83.85        | 136.28        |
| express                  | 4.21.0   | ✓      | 10957.4    | 90.66        | 1.95          |
| express-with-middlewares | 4.21.0   | ✓      | 10156.0    | 97.86        | 3.78          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
