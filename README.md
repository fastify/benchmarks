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
* __Run:__ Tue Aug 03 2021 18:58:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 38775.2    | 25.32   | 6.92          |
| 0http                    | 3.1.1   | ✓      | 36490.2    | 26.93   | 6.51          |
| micro                    | 9.3.4   | ✗      | 36400.6    | 26.98   | 6.49          |
| polka                    | 0.5.2   | ✓      | 34905.8    | 28.15   | 6.22          |
| rayo                     | 1.3.6   | ✓      | 34679.4    | 28.33   | 6.18          |
| foxify                   | 0.10.20 | ✓      | 34387.2    | 28.58   | 5.64          |
| bare                     | 10.13.0 | ✗      | 34140.2    | 28.80   | 6.09          |
| fastify                  | 3.20.1  | ✓      | 33931.8    | 28.97   | 6.05          |
| spirit                   | 0.6.1   | ✗      | 33603.2    | 29.36   | 5.99          |
| spirit-router            | 0.5.0   | ✓      | 33080.8    | 29.83   | 5.90          |
| trek-engine              | 1.0.5   | ✗      | 31964.4    | 30.78   | 5.24          |
| connect                  | 3.7.0   | ✗      | 31665.6    | 31.09   | 5.65          |
| server-base              | 7.1.27  | ✗      | 31545.6    | 31.20   | 5.63          |
| server-base-router       | 7.1.27  | ✓      | 31246.4    | 31.51   | 5.57          |
| trek-router              | 1.2.0   | ✓      | 30922.8    | 31.84   | 5.07          |
| restana                  | 4.9.1   | ✓      | 30618.4    | 32.16   | 5.46          |
| yeps                     | 1.1.1   | ✗      | 29902.4    | 32.94   | 5.33          |
| connect-router           | 1.3.5   | ✓      | 29312.4    | 33.62   | 5.23          |
| micro-route              | 2.5.0   | ✓      | 28531.2    | 34.55   | 5.09          |
| yeps-router              | 1.2.0   | ✓      | 27616.0    | 35.70   | 4.93          |
| koa                      | 2.13.1  | ✗      | 25124.4    | 39.30   | 4.48          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 24908.8    | 39.64   | 4.44          |
| vapr                     | 0.6.0   | ✓      | 24180.4    | 40.85   | 3.97          |
| restify                  | 8.5.1   | ✓      | 23190.0    | 42.61   | 4.18          |
| koa-router               | 10.0.0  | ✓      | 22547.6    | 43.85   | 4.02          |
| take-five                | 2.0.0   | ✓      | 21813.6    | 45.34   | 7.84          |
| total.js                 | 3.4.9   | ✓      | 21695.2    | 45.57   | 6.64          |
| hapi                     | 20.1.5  | ✓      | 19391.3    | 51.06   | 3.46          |
| microrouter              | 3.1.3   | ✓      | 19129.3    | 51.76   | 3.41          |
| egg.js                   | 2.29.4  | ✓      | 12811.4    | 77.52   | 4.51          |
| express                  | 4.17.1  | ✓      | 8439.9     | 117.88  | 1.51          |
| express-route-prefix     | 4.17.1  | ✓      | 6920.3     | 143.78  | 2.56          |
| express-with-middlewares | 4.17.1  | ✓      | 6712.3     | 148.27  | 2.50          |
| fastify-big-json         | 3.20.1  | ✓      | 2369.5     | 419.86  | 27.26         |
