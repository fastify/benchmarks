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
* __Node:__ `v18.17.1`
* __Run:__ Mon Sep 04 2023 01:37:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 50903.2    | 19.16        | 9.08          |
| fastify                  | 4.22.2  | ✓      | 50540.0    | 19.29        | 9.06          |
| bare                     | 10.13.0 | ✗      | 50436.0    | 19.33        | 8.99          |
| connect                  | 3.7.0   | ✗      | 48616.8    | 20.07        | 8.67          |
| server-base-router       | 7.1.32  | ✓      | 47767.2    | 20.42        | 8.52          |
| server-base              | 7.1.32  | ✗      | 47687.2    | 20.47        | 8.50          |
| yeps                     | 1.1.1   | ✗      | 46629.6    | 20.94        | 8.32          |
| connect-router           | 1.3.8   | ✓      | 45685.6    | 21.39        | 8.15          |
| restana                  | 4.9.7   | ✓      | 45649.6    | 21.39        | 8.14          |
| spirit                   | 0.6.1   | ✗      | 44764.8    | 21.87        | 7.98          |
| vapr                     | 0.6.0   | ✓      | 44040.0    | 22.21        | 7.22          |
| polkadot                 | 1.0.0   | ✗      | 42017.6    | 23.31        | 7.49          |
| spirit-router            | 0.5.0   | ✓      | 41329.4    | 23.70        | 7.37          |
| 0http                    | 3.5.2   | ✓      | 39705.4    | 24.70        | 7.08          |
| koa                      | 2.14.2  | ✗      | 39351.0    | 24.93        | 7.02          |
| h3                       | 1.8.1   | ✗      | 37932.6    | 25.88        | 6.22          |
| h3-router                | 1.8.1   | ✓      | 37869.4    | 25.92        | 6.21          |
| take-five                | 2.0.0   | ✓      | 37608.6    | 26.08        | 13.52         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37211.4    | 26.38        | 6.64          |
| yeps-router              | 1.2.0   | ✓      | 36732.2    | 26.74        | 6.55          |
| restify                  | 11.1.0  | ✓      | 36643.8    | 26.77        | 6.60          |
| koa-router               | 12.0.0  | ✓      | 34657.8    | 28.36        | 6.18          |
| hapi                     | 21.3.2  | ✓      | 32528.6    | 30.24        | 5.80          |
| express                  | 4.18.2  | ✓      | 11482.4    | 86.53        | 2.05          |
| fastify-big-json         | 4.22.2  | ✓      | 11021.2    | 90.21        | 126.81        |
| express-with-middlewares | 4.18.2  | ✓      | 10083.1    | 98.63        | 3.75          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.1 | ✓      | N/A        | N/A          | N/A           |
