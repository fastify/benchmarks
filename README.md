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
* __Node:__ `v20.12.2`
* __Run:__ Mon Apr 22 2024 01:33:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.12.2 | ✗      | 46896.8    | 20.82        | 8.36          |
| fastify                  | 4.26.2   | ✓      | 45871.2    | 21.30        | 8.22          |
| connect                  | 3.7.0    | ✗      | 45844.0    | 21.31        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45483.2    | 21.49        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 44964.0    | 21.75        | 8.02          |
| polka                    | 0.5.2    | ✓      | 44564.0    | 21.94        | 7.95          |
| server-base              | 7.1.32   | ✗      | 44480.8    | 21.99        | 7.93          |
| 0http                    | 3.5.3    | ✓      | 44324.8    | 22.06        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 43236.0    | 22.62        | 7.71          |
| connect-router           | 1.3.8    | ✓      | 43136.8    | 22.68        | 7.69          |
| h3                       | 1.11.1   | ✗      | 40539.2    | 24.18        | 7.23          |
| h3-router                | 1.11.1   | ✓      | 40508.8    | 24.18        | 7.22          |
| hono                     | 4.2.6    | ✓      | 39608.0    | 24.74        | 7.06          |
| restana                  | 4.9.9    | ✓      | 38464.0    | 25.49        | 6.86          |
| koa                      | 2.15.3   | ✗      | 36555.8    | 26.85        | 6.52          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34586.6    | 28.39        | 6.17          |
| take-five                | 2.0.0    | ✓      | 33743.6    | 29.13        | 12.13         |
| restify                  | 11.1.0   | ✓      | 33533.4    | 29.32        | 6.04          |
| koa-router               | 12.0.1   | ✓      | 32970.4    | 29.83        | 5.88          |
| hapi                     | 21.3.9   | ✓      | 30278.0    | 32.51        | 5.40          |
| fastify-big-json         | 4.26.2   | ✓      | 11839.4    | 83.91        | 136.22        |
| express                  | 4.19.2   | ✓      | 11080.2    | 89.67        | 1.98          |
| express-with-middlewares | 4.19.2   | ✓      | 9944.2     | 99.94        | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
