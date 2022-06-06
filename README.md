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
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 06 2022 02:02:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.3.0   | ✓      | 62957.6    | 15.38   | 11.23         |
| polkadot                 | 1.0.0   | ✗      | 61641.6    | 15.76   | 10.99         |
| polka                    | 0.5.2   | ✓      | 61420.0    | 15.78   | 10.95         |
| bare                     | 10.13.0 | ✗      | 61204.8    | 15.86   | 10.91         |
| fastify                  | 3.29.0  | ✓      | 60354.4    | 16.07   | 10.76         |
| foxify                   | 0.10.20 | ✓      | 59920.8    | 16.20   | 9.83          |
| connect                  | 3.7.0   | ✗      | 58992.8    | 16.45   | 10.52         |
| micro                    | 9.3.4   | ✗      | 58915.2    | 16.48   | 10.51         |
| restana                  | 4.9.5   | ✓      | 57398.4    | 16.95   | 10.24         |
| server-base              | 7.1.32  | ✗      | 56888.8    | 17.08   | 10.15         |
| rayo                     | 1.3.10  | ✓      | 56026.4    | 17.35   | 9.99          |
| server-base-router       | 7.1.32  | ✓      | 54400.8    | 17.89   | 9.70          |
| yeps                     | 1.1.1   | ✗      | 53906.4    | 18.06   | 9.61          |
| connect-router           | 1.3.7   | ✓      | 52467.2    | 18.56   | 9.36          |
| micro-route              | 2.5.0   | ✓      | 51976.8    | 18.75   | 9.27          |
| trek-engine              | 1.0.5   | ✗      | 50831.2    | 19.18   | 8.34          |
| trek-router              | 1.2.0   | ✓      | 49046.4    | 19.90   | 8.05          |
| vapr                     | 0.6.0   | ✓      | 47900.0    | 20.38   | 7.86          |
| yeps-router              | 1.2.0   | ✓      | 44407.2    | 22.03   | 7.92          |
| koa                      | 2.13.4  | ✗      | 44285.6    | 22.08   | 7.90          |
| spirit                   | 0.6.1   | ✗      | 43037.6    | 22.73   | 7.67          |
| spirit-router            | 0.5.0   | ✓      | 42323.2    | 23.13   | 7.55          |
| total.js                 | 3.4.13  | ✓      | 41483.2    | 23.61   | 12.70         |
| take-five                | 2.0.0   | ✓      | 40972.0    | 23.90   | 14.73         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 40601.6    | 24.13   | 7.24          |
| restify                  | 8.6.1   | ✓      | 39471.8    | 24.84   | 7.11          |
| koa-router               | 10.1.1  | ✓      | 39313.6    | 24.95   | 7.01          |
| hapi                     | 20.2.2  | ✓      | 33552.6    | 29.31   | 5.98          |
| microrouter              | 3.1.3   | ✓      | 32685.4    | 30.09   | 5.83          |
| egg.js                   | 2.35.0  | ✓      | 19441.2    | 50.92   | 6.95          |
| express                  | 4.18.1  | ✓      | 13672.6    | 72.59   | 2.44          |
| express-with-middlewares | 4.18.1  | ✓      | 11803.6    | 84.16   | 4.39          |
| fastify-big-json         | 3.29.0  | ✓      | 11645.6    | 85.39   | 133.97        |
| express-route-prefix     | 4.18.1  | ✓      | 11026.0    | 90.14   | 4.08          |
