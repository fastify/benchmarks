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
* __Node:__ `v20.15.1`
* __Run:__ Mon Jul 22 2024 01:41:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.12.0   | ✗      | 44863.2    | 21.79        | 8.00          |
| bare                     | v20.15.1 | ✗      | 44452.0    | 22.00        | 7.93          |
| connect                  | 3.7.0    | ✗      | 43702.4    | 22.38        | 7.79          |
| fastify                  | 4.28.1   | ✓      | 43471.2    | 22.50        | 7.79          |
| polka                    | 0.5.2    | ✓      | 43094.4    | 22.70        | 7.69          |
| rayo                     | 1.4.6    | ✓      | 42633.6    | 22.95        | 7.60          |
| server-base              | 7.1.32   | ✗      | 42162.4    | 23.21        | 7.52          |
| server-base-router       | 7.1.32   | ✓      | 41623.2    | 23.52        | 7.42          |
| polkadot                 | 1.0.0    | ✗      | 41136.8    | 23.81        | 7.34          |
| 0http                    | 3.5.3    | ✓      | 40488.0    | 24.20        | 7.22          |
| connect-router           | 1.3.8    | ✓      | 40116.0    | 24.43        | 7.15          |
| hono                     | 4.5.1    | ✓      | 37580.0    | 26.10        | 6.70          |
| h3-router                | 1.12.0   | ✓      | 37445.6    | 26.21        | 6.68          |
| restana                  | 4.9.9    | ✓      | 36007.0    | 27.27        | 6.42          |
| koa                      | 2.15.3   | ✗      | 34722.6    | 28.29        | 6.19          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33211.2    | 29.61        | 5.92          |
| take-five                | 2.0.0    | ✓      | 32914.2    | 29.88        | 11.83         |
| restify                  | 11.1.0   | ✓      | 32165.2    | 30.57        | 5.80          |
| koa-router               | 12.0.1   | ✓      | 32096.8    | 30.65        | 5.72          |
| hapi                     | 21.3.10  | ✓      | 29137.2    | 33.81        | 5.20          |
| fastify-big-json         | 4.28.1   | ✓      | 11301.6    | 87.93        | 130.03        |
| express                  | 4.19.2   | ✓      | 10568.8    | 94.00        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 9921.8     | 100.19       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
