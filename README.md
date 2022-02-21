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
* __Run:__ Mon Feb 21 2022 01:36:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| foxify                   | 0.10.20 | ✓      | 49320.8    | 19.78   | 8.09          |
| bare                     | 10.13.0 | ✗      | 49283.2    | 19.79   | 8.79          |
| fastify                  | 3.27.2  | ✓      | 48975.2    | 19.91   | 8.73          |
| polkadot                 | 1.0.0   | ✗      | 48829.6    | 19.99   | 8.71          |
| connect                  | 3.7.0   | ✗      | 48684.0    | 20.05   | 8.68          |
| micro                    | 9.3.4   | ✗      | 48154.4    | 20.26   | 8.59          |
| 0http                    | 3.1.2   | ✓      | 48084.0    | 20.31   | 8.58          |
| polka                    | 0.5.2   | ✓      | 47717.6    | 20.46   | 8.51          |
| rayo                     | 1.3.10  | ✓      | 46808.8    | 20.87   | 8.35          |
| server-base-router       | 7.1.29  | ✓      | 46344.0    | 21.08   | 8.26          |
| server-base              | 7.1.29  | ✗      | 45724.8    | 21.37   | 8.15          |
| yeps                     | 1.1.1   | ✗      | 43210.4    | 22.64   | 7.71          |
| restana                  | 4.9.3   | ✓      | 42696.8    | 22.93   | 7.61          |
| connect-router           | 1.3.6   | ✓      | 41176.6    | 23.79   | 7.34          |
| micro-route              | 2.5.0   | ✓      | 40279.8    | 24.32   | 7.18          |
| trek-engine              | 1.0.5   | ✗      | 38857.0    | 25.24   | 6.37          |
| trek-router              | 1.2.0   | ✓      | 38549.8    | 25.45   | 6.32          |
| vapr                     | 0.6.0   | ✓      | 36750.6    | 26.71   | 6.03          |
| koa                      | 2.13.4  | ✗      | 35658.6    | 27.55   | 6.36          |
| yeps-router              | 1.2.0   | ✓      | 34936.6    | 28.12   | 6.23          |
| spirit                   | 0.6.1   | ✗      | 34010.4    | 28.92   | 6.07          |
| spirit-router            | 0.5.0   | ✓      | 33337.6    | 29.52   | 5.95          |
| take-five                | 2.0.0   | ✓      | 32166.0    | 30.59   | 11.56         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31943.2    | 30.81   | 5.70          |
| koa-router               | 10.1.1  | ✓      | 31747.2    | 30.99   | 5.66          |
| total.js                 | 3.4.13  | ✓      | 31089.2    | 31.67   | 9.52          |
| restify                  | 8.6.1   | ✓      | 29970.0    | 32.85   | 5.40          |
| hapi                     | 20.2.1  | ✓      | 25880.8    | 38.13   | 4.62          |
| microrouter              | 3.1.3   | ✓      | 24853.2    | 39.73   | 4.43          |
| egg.js                   | 2.33.1  | ✓      | 15793.4    | 62.78   | 5.65          |
| express                  | 4.17.3  | ✓      | 9934.9     | 100.05  | 1.77          |
| express-route-prefix     | 4.17.3  | ✓      | 8741.9     | 113.79  | 3.23          |
| express-with-middlewares | 4.17.3  | ✓      | 8695.0     | 114.40  | 3.23          |
| fastify-big-json         | 3.27.2  | ✓      | 8485.6     | 117.30  | 97.62         |
