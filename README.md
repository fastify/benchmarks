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
* __Run:__ Mon Aug 19 2024 01:40:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 46426.4    | 21.04        | 8.28          |
| fastify                  | 4.28.1   | ✓      | 46172.8    | 21.14        | 8.28          |
| polka                    | 0.5.2    | ✓      | 45478.4    | 21.49        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 45405.6    | 21.53        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 44577.6    | 21.95        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 44545.6    | 21.96        | 7.94          |
| connect                  | 3.7.0    | ✗      | 44371.2    | 22.06        | 7.91          |
| server-base              | 7.1.32   | ✗      | 44293.6    | 22.06        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 42664.0    | 22.92        | 7.61          |
| 0http                    | 3.5.3    | ✓      | 41609.6    | 23.54        | 7.42          |
| h3                       | 1.12.0   | ✗      | 41063.2    | 23.85        | 7.32          |
| h3-router                | 1.12.0   | ✓      | 40527.2    | 24.17        | 7.23          |
| hono                     | 4.5.6    | ✓      | 39276.8    | 24.97        | 7.00          |
| restana                  | 4.9.9    | ✓      | 37017.0    | 26.52        | 6.60          |
| koa                      | 2.15.3   | ✗      | 36426.6    | 26.94        | 6.50          |
| take-five                | 2.0.0    | ✓      | 35209.0    | 27.88        | 12.66         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34479.0    | 28.49        | 6.15          |
| restify                  | 11.1.0   | ✓      | 33902.6    | 28.98        | 6.11          |
| koa-router               | 12.0.1   | ✓      | 33381.2    | 29.46        | 5.95          |
| hapi                     | 21.3.10  | ✓      | 31240.4    | 31.50        | 5.57          |
| fastify-big-json         | 4.28.1   | ✓      | 11834.0    | 83.95        | 136.16        |
| express                  | 4.19.2   | ✓      | 10881.2    | 91.32        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10022.8    | 99.14        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
