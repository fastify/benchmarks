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
* __Run:__ Mon Feb 05 2024 01:31:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 51949.6    | 18.75        | 9.26          |
| h3-router                | 1.10.1   | ✓      | 46184.8    | 21.15        | 8.24          |
| h3                       | 1.10.1   | ✗      | 45827.2    | 21.32        | 8.17          |
| bare                     | v20.11.0 | ✗      | 45445.6    | 21.50        | 8.10          |
| 0http                    | 3.5.2    | ✓      | 44336.0    | 22.06        | 7.91          |
| fastify                  | 4.26.0   | ✓      | 43677.6    | 22.40        | 7.83          |
| connect                  | 3.7.0    | ✗      | 43676.0    | 22.40        | 7.79          |
| polka                    | 0.5.2    | ✓      | 43608.8    | 22.43        | 7.78          |
| rayo                     | 1.4.6    | ✓      | 43536.8    | 22.47        | 7.76          |
| server-base-router       | 7.1.32   | ✓      | 43412.0    | 22.53        | 7.74          |
| server-base              | 7.1.32   | ✗      | 43310.4    | 22.58        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 41559.2    | 23.56        | 7.41          |
| restana                  | 4.9.7    | ✓      | 37582.2    | 26.11        | 6.70          |
| koa                      | 2.15.0   | ✗      | 35275.8    | 27.85        | 6.29          |
| hono                     | 3.12.10  | ✓      | 34144.2    | 28.78        | 6.09          |
| take-five                | 2.0.0    | ✓      | 33445.8    | 29.39        | 12.02         |
| restify                  | 11.1.0   | ✓      | 32948.6    | 29.85        | 5.94          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32502.2    | 30.26        | 5.80          |
| koa-router               | 12.0.1   | ✓      | 32440.2    | 30.31        | 5.79          |
| hapi                     | 21.3.3   | ✓      | 29838.8    | 33.01        | 5.32          |
| fastify-big-json         | 4.26.0   | ✓      | 11192.2    | 88.78        | 128.77        |
| express                  | 4.18.2   | ✓      | 10281.4    | 96.68        | 1.83          |
| express-with-middlewares | 4.18.2   | ✓      | 9716.1     | 102.30       | 3.61          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
