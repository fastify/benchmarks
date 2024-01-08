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
* __Node:__ `v20.10.0`
* __Run:__ Mon Jan 08 2024 01:34:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.10.0   | ✗      | 48624.8    | 20.06        | 7.98          |
| 0http                    | 3.5.2    | ✓      | 47988.0    | 20.34        | 8.56          |
| h3-router                | 1.10.0   | ✓      | 47550.4    | 20.52        | 7.80          |
| bare                     | v20.10.0 | ✗      | 45735.2    | 21.36        | 8.16          |
| fastify                  | 4.25.2   | ✓      | 45334.4    | 21.58        | 8.13          |
| polka                    | 0.5.2    | ✓      | 45054.4    | 21.69        | 8.03          |
| connect                  | 3.7.0    | ✗      | 44485.6    | 22.00        | 7.93          |
| server-base-router       | 7.1.32   | ✓      | 43972.0    | 22.24        | 7.84          |
| rayo                     | 1.4.5    | ✓      | 43388.8    | 22.54        | 7.74          |
| polkadot                 | 1.0.0    | ✗      | 43328.8    | 22.59        | 7.73          |
| server-base              | 7.1.32   | ✗      | 43222.4    | 22.63        | 7.71          |
| restana                  | 4.9.7    | ✓      | 42072.0    | 23.27        | 7.50          |
| connect-router           | 1.3.8    | ✓      | 41059.2    | 23.85        | 7.32          |
| hono                     | 3.12.0   | ✓      | 36514.4    | 26.88        | 6.51          |
| koa                      | 2.15.0   | ✗      | 36141.0    | 27.15        | 6.45          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34323.0    | 28.62        | 6.12          |
| take-five                | 2.0.0    | ✓      | 33966.8    | 28.93        | 12.21         |
| restify                  | 11.1.0   | ✓      | 33764.8    | 29.12        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 33307.2    | 29.53        | 5.94          |
| hapi                     | 21.3.2   | ✓      | 30428.8    | 32.34        | 5.43          |
| fastify-big-json         | 4.25.2   | ✓      | 11722.2    | 84.74        | 134.87        |
| express                  | 4.18.2   | ✓      | 10727.0    | 92.64        | 1.91          |
| express-with-middlewares | 4.18.2   | ✓      | 10042.8    | 98.99        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
