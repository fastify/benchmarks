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
* __Run:__ Mon Sep 18 2023 01:37:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 54954.4    | 17.70        | 9.80          |
| bare                     | 10.13.0 | ✗      | 52074.4    | 18.70        | 9.29          |
| polka                    | 0.5.2   | ✓      | 50752.8    | 19.21        | 9.05          |
| fastify                  | 4.23.2  | ✓      | 49402.4    | 19.74        | 8.86          |
| server-base-router       | 7.1.32  | ✓      | 48384.8    | 20.16        | 8.63          |
| server-base              | 7.1.32  | ✗      | 48020.0    | 20.32        | 8.56          |
| connect                  | 3.7.0   | ✗      | 47968.8    | 20.36        | 8.55          |
| connect-router           | 1.3.8   | ✓      | 46089.6    | 21.21        | 8.22          |
| yeps                     | 1.1.1   | ✗      | 45660.0    | 21.40        | 8.14          |
| vapr                     | 0.6.0   | ✓      | 44015.2    | 22.22        | 7.22          |
| spirit                   | 0.6.1   | ✗      | 43797.6    | 22.36        | 7.81          |
| spirit-router            | 0.5.0   | ✓      | 41205.6    | 23.78        | 7.35          |
| 0http                    | 3.5.2   | ✓      | 39078.6    | 25.09        | 6.97          |
| koa                      | 2.14.2  | ✗      | 38996.6    | 25.13        | 6.95          |
| take-five                | 2.0.0   | ✓      | 37787.0    | 25.96        | 13.59         |
| h3-router                | 1.8.1   | ✓      | 37568.6    | 26.12        | 6.16          |
| h3                       | 1.8.1   | ✗      | 37301.4    | 26.33        | 6.12          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37083.4    | 26.47        | 6.61          |
| yeps-router              | 1.2.0   | ✓      | 36802.6    | 26.68        | 6.56          |
| restify                  | 11.1.0  | ✓      | 36176.2    | 27.14        | 6.52          |
| restana                  | 4.9.7   | ✓      | 34834.6    | 28.22        | 6.21          |
| koa-router               | 12.0.0  | ✓      | 34507.0    | 28.47        | 6.15          |
| hapi                     | 21.3.2  | ✓      | 32750.0    | 30.02        | 5.84          |
| express                  | 4.18.2  | ✓      | 11177.8    | 88.87        | 1.99          |
| fastify-big-json         | 4.23.2  | ✓      | 10942.0    | 90.90        | 125.90        |
| express-with-middlewares | 4.18.2  | ✓      | 10017.8    | 99.22        | 3.73          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.3 | ✓      | N/A        | N/A          | N/A           |
