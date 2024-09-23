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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 23 2024 01:47:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 48157.6    | 20.27        | 8.59          |
| connect                  | 3.7.0    | ✗      | 47019.2    | 20.74        | 8.38          |
| fastify                  | 4.28.1   | ✓      | 46896.0    | 20.81        | 8.41          |
| 0http                    | 3.5.3    | ✓      | 46489.6    | 21.01        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46448.0    | 21.01        | 8.28          |
| polka                    | 0.5.2    | ✓      | 46421.6    | 21.03        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46364.0    | 21.08        | 8.27          |
| server-base              | 7.1.32   | ✗      | 46288.8    | 21.09        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 46212.8    | 21.12        | 8.24          |
| micro                    | 10.0.1   | ✗      | 45887.2    | 21.29        | 8.18          |
| connect-router           | 1.3.8    | ✓      | 44087.2    | 22.17        | 7.86          |
| h3                       | 1.12.0   | ✗      | 42801.6    | 22.87        | 7.63          |
| restana                  | 4.9.9    | ✓      | 42366.4    | 23.11        | 7.56          |
| micro-route              | 2.5.0    | ✓      | 42266.4    | 23.17        | 7.54          |
| h3-router                | 1.12.0   | ✓      | 41398.4    | 23.65        | 7.38          |
| hono                     | 4.6.2    | ✓      | 41198.4    | 23.79        | 7.35          |
| koa                      | 2.15.3   | ✗      | 37051.2    | 26.47        | 6.61          |
| take-five                | 2.0.0    | ✓      | 35841.8    | 27.38        | 12.89         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35272.6    | 27.84        | 6.29          |
| restify                  | 11.1.0   | ✓      | 34626.2    | 28.38        | 6.24          |
| koa-router               | 12.0.1   | ✓      | 33856.8    | 29.03        | 6.04          |
| hapi                     | 21.3.10  | ✓      | 32115.2    | 30.64        | 5.73          |
| microrouter              | 3.1.3    | ✓      | 31008.8    | 31.74        | 5.53          |
| fastify-big-json         | 4.28.1   | ✓      | 11874.8    | 83.65        | 136.63        |
| express                  | 4.21.0   | ✓      | 11156.8    | 89.05        | 1.99          |
| express-with-middlewares | 4.21.0   | ✓      | 10401.8    | 95.55        | 3.87          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
