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
* __Run:__ Mon Mar 25 2024 01:31:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 46403.2    | 21.04        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 45286.4    | 21.59        | 8.08          |
| fastify                  | 4.26.2   | ✓      | 44930.4    | 21.77        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 44820.8    | 21.82        | 7.99          |
| polka                    | 0.5.2    | ✓      | 44806.4    | 21.82        | 7.99          |
| connect                  | 3.7.0    | ✗      | 44613.6    | 21.92        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 44087.2    | 22.19        | 7.86          |
| server-base              | 7.1.32   | ✗      | 43882.4    | 22.28        | 7.83          |
| connect-router           | 1.3.8    | ✓      | 41748.0    | 23.45        | 7.45          |
| h3                       | 1.11.1   | ✗      | 41244.8    | 23.75        | 7.36          |
| hono                     | 4.1.3    | ✓      | 40760.8    | 24.03        | 7.27          |
| h3-router                | 1.11.1   | ✓      | 40036.0    | 24.47        | 7.14          |
| 0http                    | 3.5.2    | ✓      | 39024.0    | 25.13        | 6.96          |
| koa                      | 2.15.2   | ✗      | 36028.2    | 27.24        | 6.43          |
| take-five                | 2.0.0    | ✓      | 34499.8    | 28.48        | 12.40         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33789.8    | 29.09        | 6.03          |
| restify                  | 11.1.0   | ✓      | 33445.4    | 29.39        | 6.03          |
| restana                  | 4.9.7    | ✓      | 33345.4    | 29.48        | 5.95          |
| koa-router               | 12.0.1   | ✓      | 33077.0    | 29.73        | 5.90          |
| hapi                     | 21.3.7   | ✓      | 30700.4    | 32.05        | 5.48          |
| fastify-big-json         | 4.26.2   | ✓      | 11755.4    | 84.51        | 135.25        |
| express                  | 4.19.1   | ✓      | 10546.8    | 94.19        | 1.88          |
| express-with-middlewares | 4.19.1   | ✓      | 10044.0    | 98.93        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
