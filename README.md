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
* __Run:__ Mon May 27 2024 01:35:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 46145.6    | 21.16        | 8.23          |
| bare                     | v20.13.1 | ✗      | 45946.4    | 21.26        | 8.19          |
| fastify                  | 4.27.0   | ✓      | 45671.2    | 21.38        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45648.0    | 21.39        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45214.4    | 21.63        | 8.06          |
| polka                    | 0.5.2    | ✓      | 44879.2    | 21.78        | 8.00          |
| 0http                    | 3.5.3    | ✓      | 44392.8    | 22.03        | 7.92          |
| server-base              | 7.1.32   | ✗      | 43659.2    | 22.40        | 7.79          |
| server-base-router       | 7.1.32   | ✓      | 43577.6    | 22.45        | 7.77          |
| h3                       | 1.11.1   | ✗      | 42469.6    | 23.05        | 7.57          |
| connect-router           | 1.3.8    | ✓      | 42028.0    | 23.30        | 7.50          |
| h3-router                | 1.11.1   | ✓      | 41334.4    | 23.69        | 7.37          |
| hono                     | 4.3.11   | ✓      | 39024.8    | 25.12        | 6.96          |
| restana                  | 4.9.9    | ✓      | 37818.2    | 25.94        | 6.74          |
| koa                      | 2.15.3   | ✗      | 35751.8    | 27.47        | 6.38          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34296.4    | 28.65        | 6.12          |
| take-five                | 2.0.0    | ✓      | 34099.8    | 28.82        | 12.26         |
| restify                  | 11.1.0   | ✓      | 33502.2    | 29.35        | 6.04          |
| koa-router               | 12.0.1   | ✓      | 32584.0    | 30.18        | 5.81          |
| hapi                     | 21.3.9   | ✓      | 30915.2    | 31.85        | 5.51          |
| fastify-big-json         | 4.27.0   | ✓      | 11688.8    | 84.99        | 134.48        |
| express                  | 4.19.2   | ✓      | 10844.4    | 91.65        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 10074.6    | 98.66        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
