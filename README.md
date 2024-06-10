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
* __Node:__ `v20.14.0`
* __Run:__ Mon Jun 10 2024 01:38:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.14.0 | ✗      | 46873.6    | 20.83        | 8.36          |
| fastify                  | 4.27.0   | ✓      | 45596.8    | 21.42        | 8.17          |
| connect                  | 3.7.0    | ✗      | 45457.6    | 21.50        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 45424.8    | 21.52        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 44455.2    | 22.00        | 7.93          |
| polka                    | 0.5.2    | ✓      | 44237.6    | 22.11        | 7.89          |
| 0http                    | 3.5.3    | ✓      | 43709.6    | 22.38        | 7.80          |
| server-base-router       | 7.1.32   | ✓      | 43434.4    | 22.53        | 7.75          |
| server-base              | 7.1.32   | ✗      | 42674.4    | 22.93        | 7.61          |
| connect-router           | 1.3.8    | ✓      | 41699.2    | 23.49        | 7.44          |
| h3                       | 1.11.1   | ✗      | 41582.4    | 23.55        | 7.42          |
| h3-router                | 1.11.1   | ✓      | 41059.2    | 23.86        | 7.32          |
| hono                     | 4.4.4    | ✓      | 38508.0    | 25.47        | 6.87          |
| restana                  | 4.9.9    | ✓      | 37366.4    | 26.27        | 6.66          |
| koa                      | 2.15.3   | ✗      | 35275.8    | 27.85        | 6.29          |
| take-five                | 2.0.0    | ✓      | 34174.6    | 28.76        | 12.29         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33582.2    | 29.27        | 5.99          |
| restify                  | 11.1.0   | ✓      | 33148.2    | 29.66        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32097.6    | 30.65        | 5.72          |
| hapi                     | 21.3.9   | ✓      | 30143.2    | 32.66        | 5.38          |
| fastify-big-json         | 4.27.0   | ✓      | 11618.6    | 85.49        | 133.68        |
| express                  | 4.19.2   | ✓      | 10860.6    | 91.49        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10141.0    | 98.00        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
