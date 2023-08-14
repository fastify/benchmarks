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
* __Node:__ `v18.17.0`
* __Run:__ Mon Aug 14 2023 01:36:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 53312.0    | 18.28        | 9.51          |
| bare                     | 10.13.0 | ✗      | 50197.6    | 19.47        | 8.95          |
| fastify                  | 4.21.0  | ✓      | 49720.0    | 19.65        | 8.91          |
| polka                    | 0.5.2   | ✓      | 49564.0    | 19.72        | 8.84          |
| connect                  | 3.7.0   | ✗      | 47540.0    | 20.58        | 8.48          |
| server-base-router       | 7.1.32  | ✓      | 46766.4    | 20.89        | 8.34          |
| server-base              | 7.1.32  | ✗      | 46422.4    | 21.08        | 8.28          |
| yeps                     | 1.1.1   | ✗      | 46076.0    | 21.22        | 8.22          |
| connect-router           | 1.3.8   | ✓      | 44620.8    | 21.93        | 7.96          |
| spirit                   | 0.6.1   | ✗      | 42060.0    | 23.33        | 7.50          |
| vapr                     | 0.6.0   | ✓      | 41495.2    | 23.65        | 6.81          |
| spirit-router            | 0.5.0   | ✓      | 40863.2    | 24.01        | 7.29          |
| koa                      | 2.14.2  | ✗      | 38819.4    | 25.28        | 6.92          |
| h3                       | 1.7.1   | ✗      | 38485.0    | 25.53        | 6.31          |
| 0http                    | 3.5.2   | ✓      | 38082.6    | 25.82        | 6.79          |
| h3-router                | 1.7.1   | ✓      | 37899.8    | 25.92        | 6.22          |
| yeps-router              | 1.2.0   | ✓      | 36898.2    | 26.63        | 6.58          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36534.2    | 26.89        | 6.52          |
| take-five                | 2.0.0   | ✓      | 36177.6    | 27.17        | 13.01         |
| restify                  | 11.1.0  | ✓      | 35558.8    | 27.64        | 6.41          |
| koa-router               | 12.0.0  | ✓      | 34446.8    | 28.54        | 6.14          |
| restana                  | 4.9.7   | ✓      | 33219.4    | 29.63        | 5.92          |
| hapi                     | 21.3.2  | ✓      | 32941.2    | 29.88        | 5.87          |
| express                  | 4.18.2  | ✓      | 11243.8    | 88.39        | 2.01          |
| fastify-big-json         | 4.21.0  | ✓      | 11132.6    | 89.34        | 128.09        |
| express-with-middlewares | 4.18.2  | ✓      | 10093.8    | 98.52        | 3.75          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.37.1 | ✓      | N/A        | N/A          | N/A           |
