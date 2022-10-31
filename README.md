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
* __Node:__ `v14.20.1`
* __Run:__ Mon Oct 31 2022 02:37:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 62799.2    | 15.44        | 11.20         |
| bare                     | 10.13.0 | ✗      | 61769.6    | 15.70        | 11.02         |
| h3-router                | 0.8.6   | ✓      | 61224.8    | 15.81        | 10.04         |
| 0http                    | 3.4.1   | ✓      | 61162.4    | 15.87        | 10.91         |
| fastify                  | 4.9.2   | ✓      | 61001.6    | 15.89        | 10.94         |
| h3                       | 0.8.6   | ✗      | 60525.6    | 16.00        | 9.93          |
| polka                    | 0.5.2   | ✓      | 60313.6    | 16.07        | 10.76         |
| foxify                   | 0.10.20 | ✓      | 59852.8    | 16.21        | 9.82          |
| connect                  | 3.7.0   | ✗      | 57830.2    | 16.80        | 10.31         |
| micro                    | 9.4.1   | ✗      | 57349.6    | 16.93        | 10.23         |
| restana                  | 4.9.6   | ✓      | 56785.6    | 17.18        | 10.13         |
| rayo                     | 1.3.10  | ✓      | 56719.2    | 17.13        | 10.11         |
| server-base-router       | 7.1.32  | ✓      | 56380.0    | 17.24        | 10.05         |
| server-base              | 7.1.32  | ✗      | 56053.6    | 17.35        | 10.00         |
| yeps                     | 1.1.1   | ✗      | 54696.0    | 17.78        | 9.75          |
| connect-router           | 1.3.7   | ✓      | 52648.0    | 18.49        | 9.39          |
| micro-route              | 2.5.0   | ✓      | 52604.0    | 18.50        | 9.38          |
| trek-engine              | 1.0.5   | ✗      | 49996.0    | 19.51        | 8.20          |
| trek-router              | 1.2.0   | ✓      | 49481.6    | 19.72        | 8.12          |
| vapr                     | 0.6.0   | ✓      | 48892.8    | 19.96        | 8.02          |
| yeps-router              | 1.2.0   | ✓      | 44951.2    | 21.75        | 8.02          |
| koa                      | 2.13.4  | ✗      | 44372.8    | 22.04        | 7.91          |
| spirit                   | 0.6.1   | ✗      | 44215.2    | 22.12        | 7.89          |
| spirit-router            | 0.5.0   | ✓      | 43845.6    | 22.31        | 7.82          |
| total.js                 | 3.4.13  | ✓      | 41391.2    | 23.65        | 12.67         |
| take-five                | 2.0.0   | ✓      | 41020.0    | 23.87        | 14.75         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 40889.0    | 23.95        | 7.29          |
| restify                  | 8.6.1   | ✓      | 38980.0    | 25.15        | 7.03          |
| koa-router               | 12.0.0  | ✓      | 37425.0    | 26.22        | 6.67          |
| hapi                     | 20.2.2  | ✓      | 33867.4    | 29.02        | 6.04          |
| microrouter              | 3.1.3   | ✓      | 33407.4    | 29.42        | 5.96          |
| trpc-router              | 9.27.4  | ✓      | 28211.6    | 34.94        | 6.24          |
| egg.js                   | 3.3.3   | ✓      | 19526.8    | 50.68        | 6.98          |
| express                  | 4.18.2  | ✓      | 13783.8    | 72.00        | 2.46          |
| express-route-prefix     | 4.18.2  | ✓      | 12052.6    | 82.42        | 4.46          |
| fastify-big-json         | 4.9.2   | ✓      | 11914.0    | 83.45        | 137.08        |
| express-with-middlewares | 4.18.2  | ✓      | 11798.0    | 84.20        | 4.39          |
