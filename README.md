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
* __Node:__ `v14.17.4`
* __Run:__ Mon Aug 16 2021 01:26:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.1   | ✓      | 37121.8    | 26.46   | 6.62          |
| polkadot                 | 1.0.0   | ✗      | 36684.2    | 26.77   | 6.54          |
| bare                     | 10.13.0 | ✗      | 36044.6    | 27.25   | 6.43          |
| fastify                  | 3.20.2  | ✓      | 35375.0    | 27.78   | 6.31          |
| connect                  | 3.7.0   | ✗      | 35198.8    | 27.92   | 6.28          |
| polka                    | 0.5.2   | ✓      | 35091.0    | 28.00   | 6.26          |
| micro                    | 9.3.4   | ✗      | 35015.4    | 28.06   | 6.24          |
| spirit                   | 0.6.1   | ✗      | 34499.4    | 28.58   | 6.15          |
| foxify                   | 0.10.20 | ✓      | 34300.6    | 28.66   | 5.63          |
| rayo                     | 1.3.6   | ✓      | 34187.8    | 28.75   | 6.10          |
| yeps                     | 1.1.1   | ✗      | 32294.0    | 30.47   | 5.76          |
| spirit-router            | 0.5.0   | ✓      | 31722.6    | 31.10   | 5.66          |
| server-base              | 7.1.27  | ✗      | 30697.2    | 32.07   | 5.47          |
| restana                  | 4.9.1   | ✓      | 29497.6    | 33.40   | 5.26          |
| server-base-router       | 7.1.27  | ✓      | 29377.6    | 33.54   | 5.24          |
| trek-engine              | 1.0.5   | ✗      | 29375.2    | 33.54   | 4.82          |
| connect-router           | 1.3.5   | ✓      | 29280.8    | 33.65   | 5.22          |
| trek-router              | 1.2.0   | ✓      | 28023.2    | 35.18   | 4.60          |
| micro-route              | 2.5.0   | ✓      | 27708.8    | 35.60   | 4.94          |
| yeps-router              | 1.2.0   | ✓      | 27316.8    | 36.11   | 4.87          |
| vapr                     | 0.6.0   | ✓      | 26324.4    | 37.49   | 4.32          |
| koa                      | 2.13.1  | ✗      | 25738.8    | 38.34   | 4.59          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 25320.0    | 38.99   | 4.52          |
| restify                  | 8.5.1   | ✓      | 23824.4    | 41.48   | 4.29          |
| koa-router               | 10.0.0  | ✓      | 21678.4    | 45.67   | 3.87          |
| take-five                | 2.0.0   | ✓      | 21001.2    | 47.12   | 7.55          |
| total.js                 | 3.4.9   | ✓      | 20324.8    | 48.69   | 6.22          |
| hapi                     | 20.1.5  | ✓      | 19620.3    | 50.44   | 3.50          |
| microrouter              | 3.1.3   | ✓      | 18728.9    | 52.89   | 3.34          |
| egg.js                   | 2.30.0  | ✓      | 12039.8    | 82.55   | 4.24          |
| express                  | 4.17.1  | ✓      | 7994.5     | 124.48  | 1.43          |
| express-route-prefix     | 4.17.1  | ✓      | 7471.3     | 133.22  | 2.76          |
| express-with-middlewares | 4.17.1  | ✓      | 7021.5     | 141.76  | 2.61          |
| fastify-big-json         | 3.20.2  | ✓      | 2251.3     | 441.34  | 25.90         |
