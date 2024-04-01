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
* __Node:__ `v20.11.1`
* __Run:__ Mon Apr 01 2024 01:36:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 45809.6    | 21.32        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45707.2    | 21.39        | 8.15          |
| polka                    | 0.5.2    | ✓      | 45227.2    | 21.61        | 8.07          |
| fastify                  | 4.26.2   | ✓      | 45012.8    | 21.72        | 8.07          |
| rayo                     | 1.4.6    | ✓      | 44436.8    | 22.01        | 7.92          |
| server-base-router       | 7.1.32   | ✓      | 43818.4    | 22.32        | 7.81          |
| connect                  | 3.7.0    | ✗      | 43801.6    | 22.34        | 7.81          |
| server-base              | 7.1.32   | ✗      | 43305.6    | 22.59        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42027.2    | 23.29        | 7.50          |
| h3                       | 1.11.1   | ✗      | 41857.6    | 23.39        | 7.46          |
| h3-router                | 1.11.1   | ✓      | 41233.6    | 23.76        | 7.35          |
| 0http                    | 3.5.2    | ✓      | 40437.6    | 24.23        | 7.21          |
| hono                     | 4.1.7    | ✓      | 39654.4    | 24.72        | 7.07          |
| koa                      | 2.15.2   | ✗      | 36059.4    | 27.23        | 6.43          |
| restana                  | 4.9.7    | ✓      | 34618.2    | 28.39        | 6.17          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34093.0    | 28.83        | 6.08          |
| restify                  | 11.1.0   | ✓      | 33728.8    | 29.15        | 6.08          |
| take-five                | 2.0.0    | ✓      | 33314.6    | 29.51        | 11.98         |
| koa-router               | 12.0.1   | ✓      | 33194.6    | 29.63        | 5.92          |
| hapi                     | 21.3.7   | ✓      | 31112.0    | 31.65        | 5.55          |
| fastify-big-json         | 4.26.2   | ✓      | 11850.0    | 83.81        | 136.33        |
| express                  | 4.19.2   | ✓      | 10814.4    | 91.89        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 9976.8     | 99.63        | 3.71          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
