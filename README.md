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
* __Node:__ `v14.19.0`
* __Run:__ Mon Feb 14 2022 01:33:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 59119.2    | 16.42   | 10.54         |
| fastify                  | 3.27.1  | ✓      | 58831.2    | 16.50   | 10.49         |
| polka                    | 0.5.2   | ✓      | 58264.8    | 16.67   | 10.39         |
| server-base              | 7.1.29  | ✗      | 56887.2    | 17.08   | 10.14         |
| bare                     | 10.13.0 | ✗      | 56849.6    | 17.09   | 10.14         |
| rayo                     | 1.3.10  | ✓      | 56544.0    | 17.19   | 10.08         |
| connect                  | 3.7.0   | ✗      | 56455.6    | 17.22   | 10.07         |
| 0http                    | 3.1.2   | ✓      | 56326.4    | 17.26   | 10.05         |
| server-base-router       | 7.1.29  | ✓      | 55768.8    | 17.43   | 9.95          |
| foxify                   | 0.10.20 | ✓      | 55268.2    | 17.60   | 9.07          |
| micro                    | 9.3.4   | ✗      | 55188.0    | 17.62   | 9.84          |
| connect-router           | 1.3.6   | ✓      | 52371.2    | 18.60   | 9.34          |
| restana                  | 4.9.3   | ✓      | 52059.2    | 18.71   | 9.28          |
| yeps                     | 1.1.1   | ✗      | 50713.6    | 19.22   | 9.04          |
| micro-route              | 2.5.0   | ✓      | 47763.2    | 20.44   | 8.52          |
| trek-engine              | 1.0.5   | ✗      | 47189.0    | 20.69   | 7.74          |
| trek-router              | 1.2.0   | ✓      | 46608.8    | 20.96   | 7.64          |
| vapr                     | 0.6.0   | ✓      | 45417.6    | 21.52   | 7.45          |
| koa                      | 2.13.4  | ✗      | 41103.2    | 23.83   | 7.33          |
| spirit                   | 0.6.1   | ✗      | 38966.4    | 25.17   | 6.95          |
| spirit-router            | 0.5.0   | ✓      | 38024.8    | 25.82   | 6.78          |
| yeps-router              | 1.2.0   | ✓      | 37700.8    | 26.02   | 6.72          |
| total.js                 | 3.4.13  | ✓      | 37592.6    | 26.10   | 11.51         |
| take-five                | 2.0.0   | ✓      | 37488.6    | 26.17   | 13.48         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36864.2    | 26.62   | 6.57          |
| restify                  | 8.6.1   | ✓      | 36482.6    | 26.92   | 6.58          |
| koa-router               | 10.1.1  | ✓      | 35668.6    | 27.54   | 6.36          |
| hapi                     | 20.2.1  | ✓      | 30670.0    | 32.12   | 5.47          |
| microrouter              | 3.1.3   | ✓      | 29041.6    | 33.92   | 5.18          |
| egg.js                   | 2.33.1  | ✓      | 19092.7    | 51.85   | 6.83          |
| express                  | 4.17.2  | ✓      | 12447.4    | 79.78   | 2.22          |
| express-with-middlewares | 4.17.2  | ✓      | 10512.8    | 94.54   | 3.91          |
| express-route-prefix     | 4.17.2  | ✓      | 10259.4    | 96.87   | 3.80          |
| fastify-big-json         | 3.27.1  | ✓      | 10027.5    | 99.27   | 115.36        |
