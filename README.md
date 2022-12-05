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
* __Node:__ `v14.21.1`
* __Run:__ Mon Dec 05 2022 01:56:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 55748.8    | 17.45        | 9.94          |
| foxify                   | 0.10.20 | ✓      | 55627.2    | 17.48        | 9.12          |
| bare                     | 10.13.0 | ✗      | 55620.0    | 17.49        | 9.92          |
| polkadot                 | 1.0.0   | ✗      | 55521.6    | 17.51        | 9.90          |
| 0http                    | 3.4.1   | ✓      | 53868.8    | 18.09        | 9.61          |
| fastify                  | 4.10.2  | ✓      | 53710.4    | 18.11        | 9.63          |
| h3                       | 0.8.6   | ✗      | 53424.8    | 18.22        | 8.76          |
| micro                    | 9.4.1   | ✗      | 52684.0    | 18.49        | 9.39          |
| h3-router                | 0.8.6   | ✓      | 52430.4    | 18.58        | 8.60          |
| connect                  | 3.7.0   | ✗      | 52363.2    | 18.60        | 9.34          |
| server-base-router       | 7.1.32  | ✓      | 50870.4    | 19.17        | 9.07          |
| server-base              | 7.1.32  | ✗      | 50636.0    | 19.26        | 9.03          |
| yeps                     | 1.1.1   | ✗      | 49945.6    | 19.52        | 8.91          |
| restana                  | 4.9.6   | ✓      | 49102.4    | 19.88        | 8.76          |
| connect-router           | 1.3.7   | ✓      | 48875.2    | 19.97        | 8.72          |
| micro-route              | 2.5.0   | ✓      | 46719.2    | 20.91        | 8.33          |
| trek-engine              | 1.0.5   | ✗      | 45451.8    | 21.51        | 7.46          |
| vapr                     | 0.6.0   | ✓      | 43806.2    | 22.33        | 7.19          |
| trek-router              | 1.2.0   | ✓      | 43606.2    | 22.44        | 7.15          |
| yeps-router              | 1.2.0   | ✓      | 40733.6    | 24.05        | 7.26          |
| koa                      | 2.13.4  | ✗      | 39265.0    | 24.98        | 7.00          |
| spirit                   | 0.6.1   | ✗      | 38353.6    | 25.59        | 6.84          |
| spirit-router            | 0.5.0   | ✓      | 37714.6    | 26.02        | 6.73          |
| total.js                 | 3.4.13  | ✓      | 37419.8    | 26.22        | 11.46         |
| take-five                | 2.0.0   | ✓      | 37401.4    | 26.24        | 13.45         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36058.6    | 27.24        | 6.43          |
| restify                  | 8.6.1   | ✓      | 35010.2    | 28.06        | 6.31          |
| koa-router               | 12.0.0  | ✓      | 32867.4    | 29.92        | 5.86          |
| hapi                     | 20.2.2  | ✓      | 29314.8    | 33.61        | 5.23          |
| microrouter              | 3.1.3   | ✓      | 28860.4    | 34.14        | 5.15          |
| trpc-router              | 9.27.4  | ✓      | 24976.4    | 39.52        | 5.53          |
| egg.js                   | 3.5.0   | ✓      | 18494.7    | 53.55        | 6.61          |
| express                  | 4.18.2  | ✓      | 12077.6    | 82.23        | 2.15          |
| express-with-middlewares | 4.18.2  | ✓      | 10336.5    | 96.19        | 3.84          |
| express-route-prefix     | 4.18.2  | ✓      | 9930.4     | 99.99        | 3.67          |
| fastify-big-json         | 4.10.2  | ✓      | 9744.0     | 102.09       | 112.11        |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
