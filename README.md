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
* __Run:__ Mon Jun 17 2024 01:38:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.14.0 | ✗      | 47192.0    | 20.69        | 8.42          |
| connect                  | 3.7.0    | ✗      | 45441.6    | 21.50        | 8.10          |
| polka                    | 0.5.2    | ✓      | 45408.8    | 21.52        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45135.2    | 21.67        | 8.05          |
| fastify                  | 4.28.0   | ✓      | 44790.4    | 21.84        | 8.03          |
| 0http                    | 3.5.3    | ✓      | 44589.6    | 21.93        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44234.4    | 22.11        | 7.89          |
| polkadot                 | 1.0.0    | ✗      | 44156.8    | 22.15        | 7.87          |
| server-base              | 7.1.32   | ✗      | 43712.8    | 22.38        | 7.80          |
| h3                       | 1.11.1   | ✗      | 43313.6    | 22.59        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42116.8    | 23.25        | 7.51          |
| h3-router                | 1.11.1   | ✓      | 40476.0    | 24.21        | 7.22          |
| hono                     | 4.4.6    | ✓      | 39416.8    | 24.87        | 7.03          |
| restana                  | 4.9.9    | ✓      | 37811.2    | 25.94        | 6.74          |
| koa                      | 2.15.3   | ✗      | 36482.6    | 26.91        | 6.51          |
| take-five                | 2.0.0    | ✓      | 35160.6    | 27.93        | 12.64         |
| restify                  | 11.1.0   | ✓      | 34040.2    | 28.88        | 6.14          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33897.8    | 29.00        | 6.04          |
| koa-router               | 12.0.1   | ✓      | 33036.6    | 29.75        | 5.89          |
| hapi                     | 21.3.10  | ✓      | 31430.8    | 31.32        | 5.61          |
| fastify-big-json         | 4.28.0   | ✓      | 11759.0    | 84.47        | 135.29        |
| express                  | 4.19.2   | ✓      | 10433.4    | 95.21        | 1.86          |
| express-with-middlewares | 4.19.2   | ✓      | 9923.4     | 100.18       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
