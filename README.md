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
* __Node:__ `v18.14.0`
* __Run:__ Sat Feb 11 2023 14:45:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 23548.4    | 41.96        | 4.20          |
| polkadot                 | 1.0.0   | ✗      | 22844.0    | 43.27        | 4.07          |
| h3-router                | 1.4.0   | ✓      | 22690.0    | 43.56        | 3.72          |
| spirit-router            | 0.5.0   | ✓      | 22129.2    | 44.71        | 3.95          |
| connect                  | 3.7.0   | ✗      | 22126.8    | 44.71        | 3.95          |
| spirit                   | 0.6.1   | ✗      | 21977.6    | 45.01        | 3.92          |
| polka                    | 0.5.2   | ✓      | 21882.4    | 45.19        | 3.90          |
| server-base              | 7.1.32  | ✗      | 21275.3    | 46.49        | 3.79          |
| fastify                  | 4.13.0  | ✓      | 21190.6    | 46.72        | 3.80          |
| yeps                     | 1.1.1   | ✗      | 21100.4    | 46.87        | 3.76          |
| 0http                    | v3.4.3  | ✓      | 20598.7    | 48.05        | 3.67          |
| vapr                     | 0.6.0   | ✓      | 20020.5    | 49.43        | 3.28          |
| server-base-router       | 7.1.32  | ✓      | 19417.7    | 51.01        | 3.46          |
| connect-router           | 1.3.7   | ✓      | 19010.5    | 52.09        | 3.39          |
| yeps-router              | 1.2.0   | ✓      | 18901.5    | 52.38        | 3.37          |
| h3                       | 1.4.0   | ✗      | 18828.4    | 52.61        | 3.09          |
| koa                      | 2.14.1  | ✗      | 18710.0    | 52.93        | 3.34          |
| take-five                | 2.0.0   | ✓      | 18334.5    | 54.01        | 6.59          |
| restify                  | 11.0.0  | ✓      | 18274.3    | 54.20        | 3.29          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18142.7    | 54.59        | 3.24          |
| restana                  | 4.9.7   | ✓      | 17695.1    | 55.99        | 3.16          |
| koa-router               | 12.0.0  | ✓      | 16809.4    | 58.97        | 3.00          |
| hapi                     | 21.2.1  | ✓      | 16325.5    | 60.72        | 2.91          |
| fastify-big-json         | 4.13.0  | ✓      | 6456.7     | 154.56       | 74.29         |
| express                  | 4.18.2  | ✓      | 5510.7     | 180.64       | 0.98          |
| express-with-middlewares | 4.18.2  | ✓      | 4781.9     | 208.21       | 1.78          |
| trpc-router              | 10.11.0 | ✓      | 3534.0     | 281.65       | 1.05          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
