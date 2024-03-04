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
* __Node:__ `v20.11.1`
* __Run:__ Mon Mar 04 2024 01:30:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 46362.4    | 21.06        | 8.27          |
| connect                  | 3.7.0    | ✗      | 45498.4    | 21.48        | 8.11          |
| polka                    | 0.5.2    | ✓      | 45356.8    | 21.55        | 8.09          |
| fastify                  | 4.26.2   | ✓      | 44939.2    | 21.76        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 44376.0    | 22.04        | 7.91          |
| polkadot                 | 1.0.0    | ✗      | 44264.8    | 22.10        | 7.89          |
| server-base-router       | 7.1.32   | ✓      | 44263.2    | 22.09        | 7.89          |
| server-base              | 7.1.32   | ✗      | 42943.2    | 22.78        | 7.66          |
| h3                       | 1.11.1   | ✗      | 42456.0    | 23.05        | 7.57          |
| connect-router           | 1.3.8    | ✓      | 41798.4    | 23.43        | 7.45          |
| h3-router                | 1.11.1   | ✓      | 40369.6    | 24.27        | 7.20          |
| 0http                    | 3.5.2    | ✓      | 39906.4    | 24.57        | 7.12          |
| koa                      | 2.15.0   | ✗      | 35757.4    | 27.46        | 6.38          |
| take-five                | 2.0.0    | ✓      | 34510.2    | 28.47        | 12.41         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33840.2    | 29.05        | 6.04          |
| restify                  | 11.1.0   | ✓      | 33582.0    | 29.28        | 6.05          |
| restana                  | 4.9.7    | ✓      | 33275.8    | 29.55        | 5.93          |
| hono                     | 4.0.9    | ✓      | 33193.0    | 29.62        | 5.92          |
| koa-router               | 12.0.1   | ✓      | 33044.0    | 29.76        | 5.89          |
| hapi                     | 21.3.3   | ✓      | 30591.2    | 32.17        | 5.46          |
| fastify-big-json         | 4.26.2   | ✓      | 11800.2    | 84.17        | 135.76        |
| express                  | 4.18.3   | ✓      | 10655.0    | 93.23        | 1.90          |
| express-with-middlewares | 4.18.3   | ✓      | 9942.8     | 99.97        | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.1  | ✓      | N/A        | N/A          | N/A           |
