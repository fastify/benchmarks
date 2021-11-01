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
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov 01 2021 01:32:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.22.1  | ✓      | 56404.0    | 17.23   | 10.06         |
| 0http                    | 3.1.1   | ✓      | 56017.6    | 17.35   | 9.99          |
| foxify                   | 0.10.20 | ✓      | 55913.6    | 17.39   | 9.17          |
| polka                    | 0.5.2   | ✓      | 54866.4    | 17.73   | 9.78          |
| polkadot                 | 1.0.0   | ✗      | 54212.0    | 17.94   | 9.67          |
| connect                  | 3.7.0   | ✗      | 53582.4    | 18.17   | 9.56          |
| rayo                     | 1.3.6   | ✓      | 52578.4    | 18.52   | 9.38          |
| micro                    | 9.3.4   | ✗      | 52432.0    | 18.57   | 9.35          |
| bare                     | 10.13.0 | ✗      | 51621.7    | 18.88   | 9.21          |
| server-base-router       | 7.1.29  | ✓      | 49865.6    | 19.56   | 8.89          |
| server-base              | 7.1.29  | ✗      | 49604.0    | 19.67   | 8.85          |
| yeps                     | 1.1.1   | ✗      | 49201.6    | 19.83   | 8.77          |
| restana                  | 4.9.1   | ✓      | 48772.8    | 19.99   | 8.70          |
| connect-router           | 1.3.5   | ✓      | 46924.8    | 20.81   | 8.37          |
| micro-route              | 2.5.0   | ✓      | 46643.2    | 20.94   | 8.32          |
| trek-engine              | 1.0.5   | ✗      | 42181.6    | 23.22   | 6.92          |
| trek-router              | 1.2.0   | ✓      | 42079.6    | 23.27   | 6.90          |
| vapr                     | 0.6.0   | ✓      | 41316.2    | 23.71   | 6.78          |
| koa                      | 2.13.4  | ✗      | 39508.6    | 24.82   | 7.05          |
| yeps-router              | 1.2.0   | ✓      | 39307.4    | 24.94   | 7.01          |
| take-five                | 2.0.0   | ✓      | 36213.4    | 27.11   | 13.02         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36180.2    | 27.16   | 6.45          |
| total.js                 | 3.4.12  | ✓      | 35965.4    | 27.31   | 11.01         |
| spirit                   | 0.6.1   | ✗      | 34972.2    | 28.09   | 6.24          |
| koa-router               | 10.1.1  | ✓      | 34792.6    | 28.23   | 6.21          |
| restify                  | 8.6.0   | ✓      | 34683.8    | 28.35   | 6.25          |
| spirit-router            | 0.5.0   | ✓      | 34446.2    | 28.53   | 6.14          |
| hapi                     | 20.2.1  | ✓      | 28526.4    | 34.55   | 5.09          |
| microrouter              | 3.1.3   | ✓      | 27406.8    | 36.00   | 4.89          |
| egg.js                   | 2.31.0  | ✓      | 18633.6    | 53.16   | 6.66          |
| express                  | 4.17.1  | ✓      | 12143.4    | 81.78   | 2.17          |
| express-with-middlewares | 4.17.1  | ✓      | 10384.6    | 95.71   | 3.86          |
| fastify-big-json         | 3.22.1  | ✓      | 9900.4     | 100.53  | 113.91        |
| express-route-prefix     | 4.17.1  | ✓      | 9845.5     | 101.01  | 3.64          |
