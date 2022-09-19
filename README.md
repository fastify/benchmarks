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
* __Run:__ Mon Sep 19 2022 02:41:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 34302.2    | 28.70   | 6.12          |
| bare                     | 10.13.0 | ✗      | 33825.0    | 29.09   | 6.03          |
| micro                    | 9.4.1   | ✗      | 32545.4    | 30.24   | 5.80          |
| polka                    | 0.5.2   | ✓      | 30903.8    | 31.86   | 5.51          |
| foxify                   | 0.10.20 | ✓      | 30741.8    | 32.06   | 5.04          |
| server-base              | 7.1.32  | ✗      | 30365.0    | 32.44   | 5.42          |
| spirit-router            | 0.5.0   | ✓      | 30248.0    | 32.67   | 5.39          |
| fastify                  | 4.6.0   | ✓      | 29717.6    | 33.17   | 5.33          |
| connect                  | 3.7.0   | ✗      | 29083.2    | 33.90   | 5.19          |
| 0http                    | 3.4.1   | ✓      | 28996.2    | 34.00   | 5.17          |
| rayo                     | 1.3.10  | ✓      | 28389.6    | 34.72   | 5.06          |
| server-base-router       | 7.1.32  | ✓      | 28166.4    | 35.01   | 5.02          |
| yeps                     | 1.1.1   | ✗      | 27852.4    | 35.40   | 4.97          |
| micro-route              | 2.5.0   | ✓      | 27105.6    | 36.39   | 4.83          |
| connect-router           | 1.3.7   | ✓      | 26632.8    | 37.06   | 4.75          |
| spirit                   | 0.6.1   | ✗      | 26601.4    | 37.19   | 4.74          |
| trek-router              | 1.2.0   | ✓      | 25259.1    | 39.09   | 4.14          |
| trek-engine              | 1.0.5   | ✗      | 24989.6    | 39.56   | 4.10          |
| yeps-router              | 1.2.0   | ✓      | 24836.0    | 39.75   | 4.43          |
| restana                  | 4.9.6   | ✓      | 24421.2    | 40.45   | 4.36          |
| vapr                     | 0.6.0   | ✓      | 24318.8    | 40.63   | 3.99          |
| restify                  | 8.6.1   | ✓      | 22277.2    | 44.39   | 4.02          |
| koa                      | 2.13.4  | ✗      | 22126.0    | 44.71   | 3.95          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21384.4    | 46.30   | 3.81          |
| total.js                 | 3.4.13  | ✓      | 21238.0    | 46.58   | 6.50          |
| take-five                | 2.0.0   | ✓      | 20852.4    | 47.46   | 7.50          |
| koa-router               | 12.0.0  | ✓      | 20473.7    | 48.34   | 3.65          |
| hapi                     | 20.2.2  | ✓      | 18740.3    | 52.84   | 3.34          |
| microrouter              | 3.1.3   | ✓      | 18303.5    | 54.13   | 3.26          |
| trpc-router              | 9.27.2  | ✓      | 17741.5    | 55.84   | 3.93          |
| egg.js                   | 3.1.0   | ✓      | 10925.8    | 91.02   | 3.91          |
| express                  | 4.18.1  | ✓      | 7580.1     | 131.26  | 1.35          |
| fastify-big-json         | 4.6.0   | ✓      | 7140.2     | 139.57  | 82.15         |
| express-with-middlewares | 4.18.1  | ✓      | 6653.0     | 149.65  | 2.47          |
| express-route-prefix     | 4.18.1  | ✓      | 6576.0     | 151.41  | 2.43          |
