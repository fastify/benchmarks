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
* __Run:__ Mon Aug 07 2023 01:47:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 40871.4    | 23.98        | 7.29          |
| fastify                  | 4.21.0  | ✓      | 40464.0    | 24.22        | 7.25          |
| bare                     | 10.13.0 | ✗      | 38056.6    | 25.79        | 6.79          |
| connect                  | 3.7.0   | ✗      | 37669.3    | 26.06        | 6.72          |
| server-base              | 7.1.32  | ✗      | 37620.6    | 26.08        | 6.71          |
| yeps                     | 1.1.1   | ✗      | 36488.6    | 26.92        | 6.51          |
| server-base-router       | 7.1.32  | ✓      | 36236.8    | 27.09        | 6.46          |
| vapr                     | 0.6.0   | ✓      | 35119.4    | 27.97        | 5.76          |
| connect-router           | 1.3.8   | ✓      | 34810.2    | 28.22        | 6.21          |
| spirit                   | 0.6.1   | ✗      | 34487.6    | 28.50        | 6.15          |
| spirit-router            | 0.5.0   | ✓      | 32035.2    | 30.71        | 5.71          |
| polkadot                 | 1.0.0   | ✗      | 30258.4    | 32.57        | 5.40          |
| 0http                    | 3.5.2   | ✓      | 30057.4    | 32.79        | 5.36          |
| koa                      | 2.14.2  | ✗      | 29538.2    | 33.36        | 5.27          |
| h3                       | 1.7.1   | ✗      | 29385.6    | 33.53        | 4.82          |
| yeps-router              | 1.2.0   | ✓      | 28907.6    | 34.09        | 5.16          |
| take-five                | 2.0.0   | ✓      | 28610.0    | 34.45        | 10.29         |
| restify                  | 11.1.0  | ✓      | 28298.0    | 34.84        | 5.10          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 27793.2    | 35.47        | 4.96          |
| h3-router                | 1.7.1   | ✓      | 27020.8    | 36.51        | 4.43          |
| restana                  | 4.9.7   | ✓      | 26438.4    | 37.34        | 4.71          |
| koa-router               | 12.0.0  | ✓      | 25712.0    | 38.39        | 4.59          |
| hapi                     | 21.3.2  | ✓      | 25407.3    | 38.87        | 4.53          |
| express                  | 4.18.2  | ✓      | 8508.3     | 116.90       | 1.52          |
| fastify-big-json         | 4.21.0  | ✓      | 8415.0     | 118.25       | 96.82         |
| express-with-middlewares | 4.18.2  | ✓      | 7298.1     | 136.34       | 2.71          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.37.1 | ✓      | N/A        | N/A          | N/A           |
