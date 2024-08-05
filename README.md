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
* __Run:__ Mon Aug 05 2024 01:41:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 46484.0    | 21.01        | 8.29          |
| fastify                  | 4.28.1   | ✓      | 45722.4    | 21.36        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45531.2    | 21.46        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45422.4    | 21.51        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45295.2    | 21.57        | 8.08          |
| connect                  | 3.7.0    | ✗      | 44693.6    | 21.89        | 7.97          |
| server-base              | 7.1.32   | ✗      | 44541.6    | 21.95        | 7.94          |
| server-base-router       | 7.1.32   | ✓      | 44009.6    | 22.21        | 7.85          |
| 0http                    | 3.5.3    | ✓      | 43340.8    | 22.58        | 7.73          |
| connect-router           | 1.3.8    | ✓      | 42428.0    | 23.05        | 7.57          |
| h3                       | 1.12.0   | ✗      | 40821.6    | 24.00        | 7.28          |
| hono                     | 4.5.3    | ✓      | 40231.2    | 24.35        | 7.17          |
| h3-router                | 1.12.0   | ✓      | 39842.4    | 24.60        | 7.11          |
| restana                  | 4.9.9    | ✓      | 37939.2    | 25.86        | 6.77          |
| koa                      | 2.15.3   | ✗      | 36627.8    | 26.81        | 6.53          |
| take-five                | 2.0.0    | ✓      | 34668.8    | 28.36        | 12.47         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34269.4    | 28.66        | 6.11          |
| restify                  | 11.1.0   | ✓      | 34209.8    | 28.72        | 6.17          |
| koa-router               | 12.0.1   | ✓      | 32744.6    | 30.02        | 5.84          |
| hapi                     | 21.3.10  | ✓      | 30946.8    | 31.81        | 5.52          |
| fastify-big-json         | 4.28.1   | ✓      | 11933.8    | 83.23        | 137.31        |
| express                  | 4.19.2   | ✓      | 11117.2    | 89.32        | 1.98          |
| express-with-middlewares | 4.19.2   | ✓      | 10292.6    | 96.53        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
