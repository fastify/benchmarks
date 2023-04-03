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

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.15.0`
* __Run:__ Mon Apr 03 2023 01:44:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 48925.6    | 19.95        | 8.73          |
| polka                    | 0.5.2   | ✓      | 48072.8    | 20.32        | 8.57          |
| fastify                  | 4.15.0  | ✓      | 45925.6    | 21.28        | 8.23          |
| server-base-router       | 7.1.32  | ✓      | 45376.8    | 21.55        | 8.09          |
| server-base              | 7.1.32  | ✗      | 45288.8    | 21.58        | 8.08          |
| connect                  | 3.7.0   | ✗      | 45171.2    | 21.64        | 8.06          |
| yeps                     | 1.1.1   | ✗      | 42541.6    | 23.01        | 7.59          |
| connect-router           | 1.3.8   | ✓      | 42136.0    | 23.24        | 7.51          |
| vapr                     | 0.6.0   | ✓      | 40173.6    | 24.40        | 6.59          |
| spirit                   | 0.6.1   | ✗      | 39899.2    | 24.56        | 7.12          |
| spirit-router            | 0.5.0   | ✓      | 37528.8    | 26.15        | 6.69          |
| polkadot                 | 1.0.0   | ✗      | 36336.2    | 27.02        | 6.48          |
| h3                       | 1.6.4   | ✗      | 36269.8    | 27.08        | 5.95          |
| koa                      | 2.14.1  | ✗      | 35768.2    | 27.47        | 6.38          |
| 0http                    | v3.5.1  | ✓      | 35007.4    | 28.09        | 6.24          |
| h3-router                | 1.6.4   | ✓      | 34733.2    | 28.29        | 5.70          |
| yeps-router              | 1.2.0   | ✓      | 34657.8    | 28.35        | 6.18          |
| take-five                | 2.0.0   | ✓      | 34413.8    | 28.55        | 12.37         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33252.8    | 29.57        | 5.93          |
| restify                  | 11.1.0  | ✓      | 32999.2    | 29.80        | 5.95          |
| restana                  | 4.9.7   | ✓      | 30978.8    | 31.79        | 5.52          |
| koa-router               | 12.0.0  | ✓      | 30671.2    | 32.09        | 5.47          |
| hapi                     | 21.3.1  | ✓      | 24088.4    | 41.00        | 4.30          |
| express                  | 4.18.2  | ✓      | 10210.8    | 97.38        | 1.82          |
| fastify-big-json         | 4.15.0  | ✓      | 9700.5     | 102.56       | 111.60        |
| express-with-middlewares | 4.18.2  | ✓      | 8772.5     | 113.38       | 3.26          |
| trpc-router              | 10.18.0 | ✓      | 6125.3     | 162.46       | 1.83          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
