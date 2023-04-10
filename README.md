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
* __Run:__ Mon Apr 10 2023 01:45:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 55034.4    | 17.68        | 9.81          |
| bare                     | 10.13.0 | ✗      | 49546.4    | 19.69        | 8.84          |
| polka                    | 0.5.2   | ✓      | 49260.0    | 19.80        | 8.79          |
| server-base              | 7.1.32  | ✗      | 48651.2    | 20.06        | 8.68          |
| server-base-router       | 7.1.32  | ✓      | 48179.2    | 20.24        | 8.59          |
| fastify                  | 4.15.0  | ✓      | 47838.4    | 20.41        | 8.58          |
| connect                  | 3.7.0   | ✗      | 47620.8    | 20.50        | 8.49          |
| yeps                     | 1.1.1   | ✗      | 47302.4    | 20.64        | 8.44          |
| vapr                     | 0.6.0   | ✓      | 44871.2    | 21.80        | 7.36          |
| connect-router           | 1.3.8   | ✓      | 44662.4    | 21.89        | 7.97          |
| spirit                   | 0.6.1   | ✗      | 44165.6    | 22.16        | 7.88          |
| spirit-router            | 0.5.0   | ✓      | 42474.4    | 23.04        | 7.57          |
| h3                       | 1.6.4   | ✗      | 40434.4    | 24.24        | 6.63          |
| h3-router                | 1.6.4   | ✓      | 39211.2    | 25.02        | 6.43          |
| koa                      | 2.14.1  | ✗      | 38772.6    | 25.29        | 6.91          |
| 0http                    | v3.5.1  | ✓      | 38710.2    | 25.34        | 6.90          |
| take-five                | 2.0.0   | ✓      | 38125.4    | 25.73        | 13.71         |
| yeps-router              | 1.2.0   | ✓      | 37792.8    | 25.95        | 6.74          |
| restify                  | 11.1.0  | ✓      | 35963.4    | 27.30        | 6.48          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35961.4    | 27.34        | 6.41          |
| restana                  | 4.9.7   | ✓      | 35562.6    | 27.62        | 6.34          |
| koa-router               | 12.0.0  | ✓      | 33213.0    | 29.60        | 5.92          |
| hapi                     | 21.3.1  | ✓      | 26462.8    | 37.28        | 4.72          |
| express                  | 4.18.2  | ✓      | 11119.2    | 89.38        | 1.98          |
| fastify-big-json         | 4.15.0  | ✓      | 10881.4    | 91.43        | 125.19        |
| express-with-middlewares | 4.18.2  | ✓      | 9856.2     | 100.85       | 3.67          |
| trpc-router              | 10.19.1 | ✓      | 6550.7     | 151.90       | 1.96          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
