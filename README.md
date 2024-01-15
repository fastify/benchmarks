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

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.10.0`
* __Run:__ Mon Jan 15 2024 01:36:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 54210.4    | 17.95        | 9.67          |
| h3                       | 1.10.0   | ✗      | 47981.6    | 20.35        | 7.87          |
| 0http                    | 3.5.2    | ✓      | 47063.2    | 20.76        | 8.39          |
| bare                     | v20.10.0 | ✗      | 45953.6    | 21.26        | 8.19          |
| h3-router                | 1.10.0   | ✓      | 45524.0    | 21.47        | 7.47          |
| fastify                  | 4.25.2   | ✓      | 45250.4    | 21.60        | 8.11          |
| polka                    | 0.5.2    | ✓      | 44788.8    | 21.84        | 7.99          |
| connect                  | 3.7.0    | ✗      | 44737.6    | 21.86        | 7.98          |
| rayo                     | 1.4.5    | ✓      | 44646.4    | 21.91        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 44302.4    | 22.07        | 7.90          |
| server-base              | 7.1.32   | ✗      | 42556.0    | 23.00        | 7.59          |
| restana                  | 4.9.7    | ✓      | 40946.4    | 23.92        | 7.30          |
| connect-router           | 1.3.8    | ✓      | 40934.4    | 23.93        | 7.30          |
| koa                      | 2.15.0   | ✗      | 36651.2    | 26.77        | 6.54          |
| hono                     | 3.12.3   | ✓      | 36272.2    | 27.06        | 6.47          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34476.4    | 28.51        | 6.15          |
| restify                  | 11.1.0   | ✓      | 33902.6    | 28.99        | 6.11          |
| take-five                | 2.0.0    | ✓      | 33856.0    | 29.03        | 12.17         |
| koa-router               | 12.0.1   | ✓      | 33019.0    | 29.78        | 5.89          |
| hapi                     | 21.3.2   | ✓      | 28967.2    | 34.01        | 5.17          |
| fastify-big-json         | 4.25.2   | ✓      | 11581.4    | 85.75        | 133.25        |
| express                  | 4.18.2   | ✓      | 10729.0    | 92.62        | 1.91          |
| express-with-middlewares | 4.18.2   | ✓      | 9845.2     | 100.98       | 3.66          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
