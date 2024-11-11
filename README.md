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
* __Node:__ `v20.18.0`
* __Run:__ Mon Nov 11 2024 01:49:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 45676.0    | 21.39        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 45360.0    | 21.54        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45065.6    | 21.70        | 8.04          |
| polka                    | 0.5.2    | ✓      | 45032.0    | 21.70        | 8.03          |
| server-base              | 7.1.32   | ✗      | 44968.0    | 21.74        | 8.02          |
| connect                  | 3.7.0    | ✗      | 44905.6    | 21.78        | 8.01          |
| fastify                  | 5.1.0    | ✓      | 44836.0    | 21.80        | 8.04          |
| 0http                    | 3.5.3    | ✓      | 44600.8    | 21.93        | 7.95          |
| micro                    | 10.0.1   | ✗      | 43444.8    | 22.52        | 7.75          |
| polkadot                 | 1.0.0    | ✗      | 43297.6    | 22.60        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 41615.2    | 23.53        | 7.42          |
| micro-route              | 2.5.0    | ✓      | 40812.8    | 24.00        | 7.28          |
| adonisjs                 | 7.2.5    | ✓      | 40781.6    | 24.02        | 7.27          |
| h3                       | 1.13.0   | ✗      | 40538.4    | 24.16        | 7.23          |
| h3-router                | 1.13.0   | ✓      | 39611.2    | 24.74        | 7.06          |
| hono                     | 4.6.9    | ✓      | 38847.2    | 25.24        | 6.93          |
| restana                  | 4.9.9    | ✓      | 36211.8    | 27.10        | 6.46          |
| koa                      | 2.15.3   | ✗      | 36163.8    | 27.15        | 6.45          |
| take-five                | 2.0.0    | ✓      | 34663.0    | 28.35        | 12.46         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34052.6    | 28.87        | 6.07          |
| restify                  | 11.1.0   | ✓      | 34022.4    | 28.89        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 33310.2    | 29.52        | 5.94          |
| hapi                     | 21.3.12  | ✓      | 30788.6    | 31.97        | 5.49          |
| microrouter              | 3.1.3    | ✓      | 28943.2    | 34.04        | 5.16          |
| fastify-big-json         | 5.1.0    | ✓      | 11897.2    | 83.50        | 136.88        |
| express                  | 5.0.1    | ✓      | 9819.3     | 101.25       | 1.75          |
| express-with-middlewares | 5.0.1    | ✓      | 8884.8     | 111.92       | 3.30          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
