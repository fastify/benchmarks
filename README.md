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
* __Run:__ Mon May 13 2024 01:35:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.12.2 | ✗      | 46787.2    | 20.87        | 8.34          |
| fastify                  | 4.27.0   | ✓      | 46242.4    | 21.12        | 8.29          |
| polkadot                 | 1.0.0    | ✗      | 45978.4    | 21.25        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45187.2    | 21.63        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 45177.6    | 21.65        | 8.06          |
| connect                  | 3.7.0    | ✗      | 45014.4    | 21.72        | 8.03          |
| 0http                    | 3.5.3    | ✓      | 44776.0    | 21.84        | 7.98          |
| server-base              | 7.1.32   | ✗      | 43916.0    | 22.27        | 7.83          |
| server-base-router       | 7.1.32   | ✓      | 43814.4    | 22.32        | 7.81          |
| h3                       | 1.11.1   | ✗      | 42585.6    | 22.98        | 7.59          |
| connect-router           | 1.3.8    | ✓      | 42102.4    | 23.26        | 7.51          |
| h3-router                | 1.11.1   | ✓      | 40936.8    | 23.93        | 7.30          |
| hono                     | 4.3.6    | ✓      | 39856.8    | 24.58        | 7.11          |
| restana                  | 4.9.9    | ✓      | 38075.2    | 25.77        | 6.79          |
| koa                      | 2.15.3   | ✗      | 36606.2    | 26.81        | 6.53          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34740.6    | 28.27        | 6.20          |
| take-five                | 2.0.0    | ✓      | 33810.0    | 29.07        | 12.16         |
| restify                  | 11.1.0   | ✓      | 33467.6    | 29.37        | 6.03          |
| koa-router               | 12.0.1   | ✓      | 33356.6    | 29.49        | 5.95          |
| hapi                     | 21.3.9   | ✓      | 30923.6    | 31.83        | 5.51          |
| fastify-big-json         | 4.27.0   | ✓      | 11563.4    | 85.91        | 133.05        |
| express                  | 4.19.2   | ✓      | 10605.0    | 93.72        | 1.89          |
| express-with-middlewares | 4.19.2   | ✓      | 10068.0    | 98.74        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
