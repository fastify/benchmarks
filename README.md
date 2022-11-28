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
* __Run:__ Mon Nov 28 2022 01:59:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 56880.0    | 17.08        | 10.14         |
| polka                    | 0.5.2   | ✓      | 56643.2    | 17.16        | 10.10         |
| polkadot                 | 1.0.0   | ✗      | 56530.4    | 17.19        | 10.08         |
| fastify                  | 4.10.2  | ✓      | 55552.8    | 17.50        | 9.96          |
| 0http                    | 3.4.1   | ✓      | 55496.8    | 17.50        | 9.90          |
| foxify                   | 0.10.20 | ✓      | 54909.6    | 17.71        | 9.01          |
| micro                    | 9.4.1   | ✗      | 54426.4    | 17.87        | 9.71          |
| connect                  | 3.7.0   | ✗      | 54310.4    | 17.93        | 9.69          |
| h3                       | 0.8.6   | ✗      | 53839.2    | 18.08        | 8.83          |
| server-base              | 7.1.32  | ✗      | 53562.4    | 18.17        | 9.55          |
| h3-router                | 0.8.6   | ✓      | 53523.2    | 18.19        | 8.78          |
| yeps                     | 1.1.1   | ✗      | 51696.8    | 18.85        | 9.22          |
| server-base-router       | 7.1.32  | ✓      | 51435.2    | 18.95        | 9.17          |
| restana                  | 4.9.6   | ✓      | 50481.6    | 19.29        | 9.00          |
| micro-route              | 2.5.0   | ✓      | 49720.8    | 19.61        | 8.87          |
| connect-router           | 1.3.7   | ✓      | 48875.2    | 19.97        | 8.72          |
| trek-engine              | 1.0.5   | ✗      | 47154.6    | 20.72        | 7.73          |
| trek-router              | 1.2.0   | ✓      | 45995.2    | 21.25        | 7.54          |
| vapr                     | 0.6.0   | ✓      | 44784.0    | 21.83        | 7.35          |
| yeps-router              | 1.2.0   | ✓      | 42227.2    | 23.19        | 7.53          |
| koa                      | 2.13.4  | ✗      | 41260.6    | 23.74        | 7.36          |
| spirit                   | 0.6.1   | ✗      | 39509.8    | 24.83        | 7.05          |
| take-five                | 2.0.0   | ✓      | 39118.2    | 25.07        | 14.06         |
| total.js                 | 3.4.13  | ✓      | 37926.6    | 25.86        | 11.61         |
| spirit-router            | 0.5.0   | ✓      | 37467.8    | 26.20        | 6.68          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37204.6    | 26.38        | 6.64          |
| restify                  | 8.6.1   | ✓      | 36091.4    | 27.21        | 6.50          |
| koa-router               | 12.0.0  | ✓      | 33704.6    | 29.17        | 6.01          |
| hapi                     | 20.2.2  | ✓      | 30315.2    | 32.48        | 5.41          |
| microrouter              | 3.1.3   | ✓      | 29310.0    | 33.61        | 5.23          |
| trpc-router              | 9.27.4  | ✓      | 25342.4    | 38.95        | 5.61          |
| egg.js                   | 3.5.0   | ✓      | 18604.1    | 53.24        | 6.65          |
| express                  | 4.18.2  | ✓      | 12064.0    | 82.36        | 2.15          |
| express-with-middlewares | 4.18.2  | ✓      | 10672.4    | 93.14        | 3.97          |
| express-route-prefix     | 4.18.2  | ✓      | 10395.5    | 95.59        | 3.85          |
| fastify-big-json         | 4.10.2  | ✓      | 9820.1     | 101.40       | 112.99        |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
