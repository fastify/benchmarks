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
* __Run:__ Mon Oct 10 2022 02:36:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 63484.0    | 15.25        | 11.32         |
| bare                     | 10.13.0 | ✗      | 61476.8    | 15.78        | 10.96         |
| polka                    | 0.5.2   | ✓      | 60180.0    | 16.12        | 10.73         |
| foxify                   | 0.10.20 | ✓      | 60116.8    | 16.13        | 9.86          |
| 0http                    | 3.4.1   | ✓      | 59494.4    | 16.32        | 10.61         |
| fastify                  | 4.7.0   | ✓      | 59235.2    | 16.39        | 10.62         |
| rayo                     | 1.3.10  | ✓      | 57682.4    | 16.84        | 10.29         |
| micro                    | 9.4.1   | ✗      | 56687.2    | 17.14        | 10.11         |
| server-base              | 7.1.32  | ✗      | 55227.2    | 17.61        | 9.85          |
| connect                  | 3.7.0   | ✗      | 55207.8    | 17.62        | 9.85          |
| restana                  | 4.9.6   | ✓      | 54135.2    | 18.02        | 9.65          |
| server-base-router       | 7.1.32  | ✓      | 53588.8    | 18.17        | 9.56          |
| yeps                     | 1.1.1   | ✗      | 52698.4    | 18.48        | 9.40          |
| connect-router           | 1.3.7   | ✓      | 52044.0    | 18.73        | 9.28          |
| micro-route              | 2.5.0   | ✓      | 51857.6    | 18.79        | 9.25          |
| trek-engine              | 1.0.5   | ✗      | 48326.4    | 20.21        | 7.93          |
| trek-router              | 1.2.0   | ✓      | 47776.0    | 20.44        | 7.84          |
| vapr                     | 0.6.0   | ✓      | 47559.2    | 20.53        | 7.80          |
| yeps-router              | 1.2.0   | ✓      | 44151.2    | 22.15        | 7.87          |
| koa                      | 2.13.4  | ✗      | 43056.8    | 22.72        | 7.68          |
| spirit                   | 0.6.1   | ✗      | 42938.4    | 22.79        | 7.66          |
| spirit-router            | 0.5.0   | ✓      | 41903.2    | 23.37        | 7.47          |
| total.js                 | 3.4.13  | ✓      | 41308.8    | 23.71        | 12.65         |
| take-five                | 2.0.0   | ✓      | 40705.4    | 24.07        | 14.63         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 39443.4    | 24.86        | 7.03          |
| restify                  | 8.6.1   | ✓      | 39121.0    | 25.07        | 7.05          |
| koa-router               | 12.0.0  | ✓      | 36661.8    | 26.78        | 6.54          |
| hapi                     | 20.2.2  | ✓      | 33339.4    | 29.50        | 5.94          |
| microrouter              | 3.1.3   | ✓      | 32660.4    | 30.12        | 5.82          |
| trpc-router              | 9.27.4  | ✓      | 27652.8    | 35.65        | 6.12          |
| egg.js                   | 3.3.3   | ✓      | 19217.6    | 51.53        | 6.87          |
| express                  | 4.18.2  | ✓      | 13634.8    | 72.80        | 2.43          |
| express-route-prefix     | 4.18.2  | ✓      | 11829.2    | 83.98        | 4.38          |
| express-with-middlewares | 4.18.2  | ✓      | 11753.8    | 84.52        | 4.37          |
| fastify-big-json         | 4.7.0   | ✓      | 11711.6    | 84.90        | 134.74        |
