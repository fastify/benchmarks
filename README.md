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
* __Run:__ Mon Jun 24 2024 01:38:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 54566.4    | 17.81        | 9.73          |
| h3                       | 1.12.0   | ✗      | 48948.0    | 19.93        | 8.73          |
| bare                     | v20.14.0 | ✗      | 46847.2    | 20.85        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46380.8    | 21.05        | 8.27          |
| polka                    | 0.5.2    | ✓      | 45805.6    | 21.34        | 8.17          |
| fastify                  | 4.28.0   | ✓      | 45369.6    | 21.53        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45290.4    | 21.58        | 8.08          |
| rayo                     | 1.4.6    | ✓      | 44778.4    | 21.84        | 7.98          |
| server-base-router       | 7.1.32   | ✓      | 44640.0    | 21.91        | 7.96          |
| 0http                    | 3.5.3    | ✓      | 44279.2    | 22.09        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 42777.6    | 22.87        | 7.63          |
| h3-router                | 1.12.0   | ✓      | 40840.0    | 23.98        | 7.28          |
| hono                     | 4.4.7    | ✓      | 38841.6    | 25.24        | 6.93          |
| restana                  | 4.9.9    | ✓      | 37971.2    | 25.83        | 6.77          |
| koa                      | 2.15.3   | ✗      | 35938.6    | 27.32        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35580.8    | 27.61        | 12.79         |
| restify                  | 11.1.0   | ✓      | 34420.6    | 28.55        | 6.20          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34163.6    | 28.77        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 33513.8    | 29.34        | 5.98          |
| hapi                     | 21.3.10  | ✓      | 31282.2    | 31.46        | 5.58          |
| fastify-big-json         | 4.28.0   | ✓      | 11782.0    | 84.32        | 135.56        |
| express                  | 4.19.2   | ✓      | 10500.8    | 94.65        | 1.87          |
| express-with-middlewares | 4.19.2   | ✓      | 10083.3    | 98.59        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
