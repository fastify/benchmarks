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

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Mon Nov 20 2023 01:33:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| fastify                  | 4.24.3  | ✓      | 44788.8    | 21.85        | 8.03          |
| polka                    | 0.5.2   | ✓      | 44588.0    | 21.93        | 7.95          |
| bare                     | 10.13.0 | ✗      | 43798.4    | 22.33        | 7.81          |
| rayo                     | 1.4.5   | ✓      | 43604.0    | 22.43        | 7.78          |
| connect                  | 3.7.0   | ✗      | 43440.8    | 22.52        | 7.75          |
| server-base              | 7.1.32  | ✗      | 42796.8    | 22.86        | 7.63          |
| server-base-router       | 7.1.32  | ✓      | 42688.0    | 22.92        | 7.61          |
| polkadot                 | 1.0.0   | ✗      | 42129.6    | 23.24        | 7.51          |
| connect-router           | 1.3.8   | ✓      | 39800.8    | 24.63        | 7.10          |
| h3-router                | 1.8.2   | ✓      | 38183.2    | 25.70        | 6.26          |
| h3                       | 1.8.2   | ✗      | 37718.4    | 26.02        | 6.19          |
| koa                      | 2.14.2  | ✗      | 35421.2    | 27.74        | 6.32          |
| 0http                    | 3.5.2   | ✓      | 34813.4    | 28.22        | 6.21          |
| restify                  | 11.1.0  | ✓      | 33891.2    | 29.05        | 6.11          |
| take-five                | 2.0.0   | ✓      | 33377.2    | 29.45        | 12.00         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32503.8    | 30.27        | 5.80          |
| restana                  | 4.9.7   | ✓      | 32005.8    | 30.74        | 5.71          |
| hapi                     | 21.3.2  | ✓      | 31006.0    | 31.73        | 5.53          |
| koa-router               | 12.0.1  | ✓      | 29584.8    | 33.29        | 5.28          |
| hono                     | 3.10.1  | ✓      | 12483.2    | 79.56        | 2.23          |
| fastify-big-json         | 4.24.3  | ✓      | 11171.4    | 88.92        | 128.53        |
| express                  | 4.18.2  | ✓      | 10369.8    | 95.83        | 1.85          |
| express-with-middlewares | 4.18.2  | ✓      | 9819.6     | 101.24       | 3.65          |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.43.6 | ✓      | N/A        | N/A          | N/A           |
