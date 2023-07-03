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
* __Node:__ `v18.16.1`
* __Run:__ Mon Jul 03 2023 02:03:55 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 45997.6    | 21.25        | 8.20          |
| polka                    | 0.5.2   | ✓      | 45631.2    | 21.42        | 8.14          |
| fastify                  | 4.19.1  | ✓      | 44976.0    | 21.74        | 8.06          |
| server-base              | 7.1.32  | ✗      | 43111.2    | 22.69        | 7.69          |
| connect                  | 3.7.0   | ✗      | 42800.0    | 22.86        | 7.63          |
| server-base-router       | 7.1.32  | ✓      | 42521.6    | 23.02        | 7.58          |
| yeps                     | 1.1.1   | ✗      | 41808.0    | 23.43        | 7.46          |
| connect-router           | 1.3.8   | ✓      | 40595.8    | 24.13        | 7.24          |
| vapr                     | 0.6.0   | ✓      | 39053.6    | 25.11        | 6.41          |
| spirit                   | 0.6.1   | ✗      | 37387.0    | 26.25        | 6.67          |
| spirit-router            | 0.5.0   | ✓      | 36515.0    | 26.91        | 6.51          |
| polkadot                 | 1.0.0   | ✗      | 35755.0    | 27.48        | 6.38          |
| h3                       | 1.7.1   | ✗      | 34145.4    | 28.79        | 5.60          |
| koa                      | 2.14.2  | ✗      | 34113.4    | 28.82        | 6.08          |
| 0http                    | 3.5.2   | ✓      | 33583.0    | 29.29        | 5.99          |
| yeps-router              | 1.2.0   | ✓      | 33557.0    | 29.30        | 5.98          |
| h3-router                | 1.7.1   | ✓      | 33258.2    | 29.57        | 5.46          |
| take-five                | 2.0.0   | ✓      | 32913.6    | 29.88        | 11.83         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32027.0    | 30.73        | 5.71          |
| restify                  | 11.1.0  | ✓      | 31372.8    | 31.37        | 5.65          |
| koa-router               | 12.0.0  | ✓      | 29588.8    | 33.29        | 5.28          |
| restana                  | 4.9.7   | ✓      | 28895.6    | 34.10        | 5.15          |
| hapi                     | 21.3.2  | ✓      | 27702.4    | 35.61        | 4.94          |
| express                  | 4.18.2  | ✓      | 9588.1     | 103.69       | 1.71          |
| fastify-big-json         | 4.19.1  | ✓      | 9141.0     | 108.94       | 105.17        |
| express-with-middlewares | 4.18.2  | ✓      | 8397.4     | 118.44       | 3.12          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.33.0 | ✓      | N/A        | N/A          | N/A           |
