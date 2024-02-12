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
* __Node:__ `v20.11.0`
* __Run:__ Mon Feb 12 2024 01:30:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.10.1   | ✗      | 46774.4    | 20.87        | 8.34          |
| 0http                    | 3.5.2    | ✓      | 46124.0    | 21.19        | 8.23          |
| bare                     | v20.11.0 | ✗      | 45696.8    | 21.38        | 8.15          |
| fastify                  | 4.26.0   | ✓      | 44116.8    | 22.17        | 7.91          |
| rayo                     | 1.4.6    | ✓      | 44093.6    | 22.18        | 7.86          |
| connect                  | 3.7.0    | ✗      | 44041.8    | 22.21        | 7.85          |
| polka                    | 0.5.2    | ✓      | 43724.0    | 22.37        | 7.80          |
| server-base-router       | 7.1.32   | ✓      | 43354.4    | 22.56        | 7.73          |
| server-base              | 7.1.32   | ✗      | 43111.2    | 22.69        | 7.69          |
| polkadot                 | 1.0.0    | ✗      | 42760.8    | 22.89        | 7.63          |
| h3-router                | 1.10.1   | ✓      | 42312.8    | 23.13        | 7.55          |
| connect-router           | 1.3.8    | ✓      | 41048.0    | 23.86        | 7.32          |
| restana                  | 4.9.7    | ✓      | 36109.4    | 27.19        | 6.44          |
| koa                      | 2.15.0   | ✗      | 35409.4    | 27.74        | 6.31          |
| hono                     | 3.12.12  | ✓      | 34475.2    | 28.51        | 6.15          |
| take-five                | 2.0.0    | ✓      | 34345.4    | 28.62        | 12.35         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33524.8    | 29.32        | 5.98          |
| restify                  | 11.1.0   | ✓      | 32586.6    | 30.20        | 5.87          |
| koa-router               | 12.0.1   | ✓      | 32132.6    | 30.62        | 5.73          |
| hapi                     | 21.3.3   | ✓      | 29671.6    | 33.19        | 5.29          |
| fastify-big-json         | 4.26.0   | ✓      | 11196.6    | 88.75        | 128.82        |
| express                  | 4.18.2   | ✓      | 10648.8    | 93.28        | 1.90          |
| express-with-middlewares | 4.18.2   | ✓      | 9880.2     | 100.60       | 3.67          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.1  | ✓      | N/A        | N/A          | N/A           |
