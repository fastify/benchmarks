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
* __Run:__ Mon Sep 30 2024 01:49:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 47945.6    | 20.36        | 8.55          |
| fastify                  | 5.0.0    | ✓      | 46100.8    | 21.18        | 8.27          |
| polka                    | 0.5.2    | ✓      | 46033.6    | 21.21        | 8.21          |
| connect                  | 3.7.0    | ✗      | 45569.4    | 21.44        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45564.8    | 21.45        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45308.0    | 21.58        | 8.08          |
| server-base-router       | 7.1.32   | ✓      | 45208.0    | 21.63        | 8.06          |
| micro                    | 10.0.1   | ✗      | 44620.8    | 21.91        | 7.96          |
| 0http                    | 3.5.3    | ✓      | 44395.2    | 22.03        | 7.92          |
| polkadot                 | 1.0.0    | ✗      | 44219.2    | 22.11        | 7.89          |
| connect-router           | 1.3.8    | ✓      | 43345.6    | 22.56        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 42116.8    | 23.25        | 7.51          |
| h3                       | 1.12.0   | ✗      | 40780.8    | 24.02        | 7.27          |
| hono                     | 4.6.3    | ✓      | 40492.8    | 24.19        | 7.22          |
| restana                  | 4.9.9    | ✓      | 40243.2    | 24.34        | 7.18          |
| h3-router                | 1.12.0   | ✓      | 39540.0    | 24.80        | 7.05          |
| koa                      | 2.15.3   | ✗      | 37335.2    | 26.28        | 6.66          |
| take-five                | 2.0.0    | ✓      | 35333.0    | 27.80        | 12.70         |
| restify                  | 11.1.0   | ✓      | 34967.0    | 28.09        | 6.30          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34561.8    | 28.43        | 6.16          |
| koa-router               | 12.0.1   | ✓      | 34310.6    | 28.63        | 6.12          |
| hapi                     | 21.3.10  | ✓      | 31561.0    | 31.18        | 5.63          |
| microrouter              | 3.1.3    | ✓      | 30209.2    | 32.59        | 5.39          |
| fastify-big-json         | 5.0.0    | ✓      | 11640.8    | 85.35        | 133.93        |
| express                  | 5.0.0    | ✓      | 9944.8     | 99.92        | 1.77          |
| express-with-middlewares | 5.0.0    | ✓      | 9047.5     | 109.92       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
