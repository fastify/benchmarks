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
* __Node:__ `v14.20.0`
* __Run:__ Mon Sep 26 2022 02:34:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 50425.6    | 19.34   | 8.99          |
| polka                    | 0.5.2   | ✓      | 49260.8    | 19.82   | 8.79          |
| foxify                   | 0.10.20 | ✓      | 48927.2    | 19.95   | 8.03          |
| polkadot                 | 1.0.0   | ✗      | 48787.2    | 20.00   | 8.70          |
| fastify                  | 4.6.0   | ✓      | 48020.8    | 20.32   | 8.61          |
| micro                    | 9.4.1   | ✗      | 47976.8    | 20.35   | 8.56          |
| connect                  | 3.7.0   | ✗      | 47454.4    | 20.58   | 8.46          |
| rayo                     | 1.3.10  | ✓      | 47435.2    | 20.59   | 8.46          |
| server-base-router       | 7.1.32  | ✓      | 46911.2    | 20.82   | 8.37          |
| 0http                    | 3.4.1   | ✓      | 46602.4    | 20.96   | 8.31          |
| server-base              | 7.1.32  | ✗      | 45132.0    | 21.66   | 8.05          |
| yeps                     | 1.1.1   | ✗      | 44807.2    | 21.82   | 7.99          |
| connect-router           | 1.3.7   | ✓      | 43764.0    | 22.36   | 7.80          |
| restana                  | 4.9.6   | ✓      | 41727.2    | 23.47   | 7.44          |
| micro-route              | 2.5.0   | ✓      | 41281.8    | 23.73   | 7.36          |
| trek-engine              | 1.0.5   | ✗      | 39677.8    | 24.72   | 6.51          |
| trek-router              | 1.2.0   | ✓      | 39451.0    | 24.85   | 6.47          |
| vapr                     | 0.6.0   | ✓      | 38423.4    | 25.52   | 6.30          |
| koa                      | 2.13.4  | ✗      | 36293.0    | 27.05   | 6.47          |
| yeps-router              | 1.2.0   | ✓      | 35797.0    | 27.43   | 6.38          |
| spirit                   | 0.6.1   | ✗      | 34563.8    | 28.46   | 6.16          |
| spirit-router            | 0.5.0   | ✓      | 34179.4    | 28.79   | 6.10          |
| total.js                 | 3.4.13  | ✓      | 32613.2    | 30.17   | 9.98          |
| take-five                | 2.0.0   | ✓      | 32194.4    | 30.56   | 11.58         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31897.4    | 30.85   | 5.69          |
| restify                  | 8.6.1   | ✓      | 30908.0    | 31.85   | 5.57          |
| koa-router               | 12.0.0  | ✓      | 29435.2    | 33.47   | 5.25          |
| hapi                     | 20.2.2  | ✓      | 26447.2    | 37.30   | 4.72          |
| microrouter              | 3.1.3   | ✓      | 25466.8    | 38.76   | 4.54          |
| trpc-router              | 9.27.2  | ✓      | 21138.0    | 46.79   | 4.68          |
| egg.js                   | 3.3.0   | ✓      | 15922.9    | 62.32   | 5.69          |
| express                  | 4.18.1  | ✓      | 10147.4    | 97.97   | 1.81          |
| express-with-middlewares | 4.18.1  | ✓      | 8695.5     | 114.40  | 3.23          |
| fastify-big-json         | 4.6.0   | ✓      | 8686.1     | 114.58  | 99.93         |
| express-route-prefix     | 4.18.1  | ✓      | 8639.5     | 115.14  | 3.20          |
