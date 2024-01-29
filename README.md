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
* __Run:__ Mon Jan 29 2024 01:30:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 53506.4    | 18.20        | 9.54          |
| h3                       | 1.10.1   | ✗      | 49432.0    | 19.74        | 8.82          |
| h3-router                | 1.10.1   | ✓      | 47654.4    | 20.49        | 8.50          |
| 0http                    | 3.5.2    | ✓      | 46708.8    | 20.92        | 8.33          |
| bare                     | v20.11.0 | ✗      | 46181.6    | 21.14        | 8.24          |
| polka                    | 0.5.2    | ✓      | 45203.2    | 21.62        | 8.06          |
| fastify                  | 4.25.2   | ✓      | 44705.6    | 21.88        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44458.4    | 22.01        | 7.93          |
| rayo                     | 1.4.6    | ✓      | 44029.6    | 22.22        | 7.85          |
| server-base-router       | 7.1.32   | ✓      | 43216.0    | 22.63        | 7.71          |
| server-base              | 7.1.32   | ✗      | 42777.6    | 22.86        | 7.63          |
| connect-router           | 1.3.8    | ✓      | 41984.0    | 23.32        | 7.49          |
| restana                  | 4.9.7    | ✓      | 39707.2    | 24.69        | 7.08          |
| koa                      | 2.15.0   | ✗      | 35904.2    | 27.35        | 6.40          |
| hono                     | 3.12.8   | ✓      | 35679.8    | 27.52        | 6.36          |
| take-five                | 2.0.0    | ✓      | 34064.8    | 28.85        | 12.25         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33698.2    | 29.18        | 6.01          |
| restify                  | 11.1.0   | ✓      | 33242.8    | 29.58        | 5.99          |
| koa-router               | 12.0.1   | ✓      | 33073.8    | 29.73        | 5.90          |
| hapi                     | 21.3.2   | ✓      | 30683.6    | 32.07        | 5.47          |
| fastify-big-json         | 4.25.2   | ✓      | 11487.4    | 86.48        | 132.18        |
| express                  | 4.18.2   | ✓      | 10540.6    | 94.28        | 1.88          |
| express-with-middlewares | 4.18.2   | ✓      | 9915.9     | 100.25       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
