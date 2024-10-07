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
* __Run:__ Mon Oct 07 2024 01:49:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 46448.8    | 21.02        | 8.28          |
| fastify                  | 5.0.0    | ✓      | 45497.6    | 21.47        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45340.0    | 21.56        | 8.09          |
| server-base              | 7.1.32   | ✗      | 45147.2    | 21.67        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 44916.0    | 21.78        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44222.4    | 22.11        | 7.89          |
| 0http                    | 3.5.3    | ✓      | 43778.4    | 22.35        | 7.81          |
| polkadot                 | 1.0.0    | ✗      | 43240.0    | 22.63        | 7.71          |
| micro                    | 10.0.1   | ✗      | 43107.2    | 22.70        | 7.69          |
| rayo                     | 1.4.6    | ✓      | 42604.0    | 22.97        | 7.60          |
| connect-router           | 1.3.8    | ✓      | 42317.6    | 23.13        | 7.55          |
| micro-route              | 2.5.0    | ✓      | 41241.6    | 23.75        | 7.35          |
| h3                       | 1.13.0   | ✗      | 39692.0    | 24.70        | 7.08          |
| restana                  | 4.9.9    | ✓      | 39293.6    | 24.95        | 7.01          |
| hono                     | 4.6.3    | ✓      | 38809.6    | 25.27        | 6.92          |
| h3-router                | 1.13.0   | ✓      | 38130.4    | 25.73        | 6.80          |
| koa                      | 2.15.3   | ✗      | 36351.4    | 27.00        | 6.48          |
| take-five                | 2.0.0    | ✓      | 34684.2    | 28.34        | 12.47         |
| restify                  | 11.1.0   | ✓      | 34370.0    | 28.58        | 6.20          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33937.4    | 28.96        | 6.05          |
| koa-router               | 12.0.1   | ✓      | 32686.2    | 30.09        | 5.83          |
| hapi                     | 21.3.10  | ✓      | 30553.6    | 32.22        | 5.45          |
| microrouter              | 3.1.3    | ✓      | 28810.8    | 34.20        | 5.14          |
| fastify-big-json         | 5.0.0    | ✓      | 11749.2    | 84.54        | 135.18        |
| express                  | 5.0.0    | ✓      | 10001.0    | 99.37        | 1.78          |
| express-with-middlewares | 5.0.0    | ✓      | 9097.3     | 109.30       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
