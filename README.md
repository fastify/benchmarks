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
* __Run:__ Mon Jan 01 2024 01:38:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 54303.2    | 17.90        | 9.68          |
| h3                       | 1.9.0    | ✗      | 48574.4    | 20.10        | 7.97          |
| h3-router                | 1.9.0    | ✓      | 47341.6    | 20.62        | 7.77          |
| 0http                    | 3.5.2    | ✓      | 47340.0    | 20.63        | 8.44          |
| bare                     | v20.10.0 | ✗      | 45638.4    | 21.40        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45141.6    | 21.67        | 8.05          |
| fastify                  | 4.25.2   | ✓      | 44764.0    | 21.86        | 8.03          |
| polka                    | 0.5.2    | ✓      | 44752.8    | 21.85        | 7.98          |
| rayo                     | 1.4.5    | ✓      | 43984.8    | 22.23        | 7.84          |
| server-base-router       | 7.1.32   | ✓      | 43621.6    | 22.42        | 7.78          |
| server-base              | 7.1.32   | ✗      | 43037.6    | 22.73        | 7.68          |
| connect-router           | 1.3.8    | ✓      | 41197.6    | 23.77        | 7.35          |
| restana                  | 4.9.7    | ✓      | 39789.6    | 24.64        | 7.10          |
| hono                     | 3.11.11  | ✓      | 36112.8    | 27.18        | 6.44          |
| koa                      | 2.15.0   | ✗      | 35968.2    | 27.32        | 6.41          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34639.6    | 28.38        | 6.18          |
| take-five                | 2.0.0    | ✓      | 34014.0    | 28.88        | 12.23         |
| restify                  | 11.1.0   | ✓      | 33538.6    | 29.31        | 6.05          |
| koa-router               | 12.0.1   | ✓      | 33222.6    | 29.58        | 5.92          |
| hapi                     | 21.3.2   | ✓      | 30760.4    | 31.98        | 5.49          |
| fastify-big-json         | 4.25.2   | ✓      | 11395.6    | 87.20        | 131.12        |
| express                  | 4.18.2   | ✓      | 11017.8    | 90.18        | 1.96          |
| express-with-middlewares | 4.18.2   | ✓      | 9921.8     | 100.18       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
