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
* __Run:__ Mon Sep 09 2024 01:45:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.28.1   | ✓      | 46841.6    | 20.84        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46616.0    | 20.96        | 8.31          |
| connect                  | 3.7.0    | ✗      | 46491.2    | 21.00        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46134.4    | 21.16        | 8.23          |
| server-base              | 7.1.32   | ✗      | 46067.2    | 21.20        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45731.2    | 21.35        | 8.16          |
| bare                     | v20.17.0 | ✗      | 45720.8    | 21.37        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45465.6    | 21.49        | 8.11          |
| micro                    | 10.0.1   | ✗      | 45176.8    | 21.63        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 44144.8    | 22.14        | 7.87          |
| 0http                    | 3.5.3    | ✓      | 42408.0    | 23.08        | 7.56          |
| micro-route              | 2.5.0    | ✓      | 42179.2    | 23.21        | 7.52          |
| h3                       | 1.12.0   | ✗      | 42012.8    | 23.31        | 7.49          |
| hono                     | 4.5.11   | ✓      | 40638.4    | 24.09        | 7.25          |
| h3-router                | 1.12.0   | ✓      | 39412.8    | 24.88        | 7.03          |
| restana                  | 4.9.9    | ✓      | 38546.6    | 25.44        | 6.87          |
| koa                      | 2.15.3   | ✗      | 36617.8    | 26.81        | 6.53          |
| restify                  | 11.1.0   | ✓      | 35297.8    | 27.84        | 6.36          |
| take-five                | 2.0.0    | ✓      | 34965.6    | 28.08        | 12.57         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34469.0    | 28.50        | 6.15          |
| koa-router               | 12.0.1   | ✓      | 34147.6    | 28.77        | 6.09          |
| hapi                     | 21.3.10  | ✓      | 31489.4    | 31.25        | 5.62          |
| microrouter              | 3.1.3    | ✓      | 30046.4    | 32.77        | 5.36          |
| fastify-big-json         | 4.28.1   | ✓      | 11689.6    | 84.99        | 134.50        |
| express                  | 4.19.2   | ✓      | 10888.2    | 91.26        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10170.8    | 97.69        | 3.78          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
