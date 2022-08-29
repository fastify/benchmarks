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
* __Run:__ Mon Aug 29 2022 02:37:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 54167.2    | 17.98   | 9.66          |
| micro                    | 9.4.1   | ✗      | 52876.8    | 18.42   | 9.43          |
| polka                    | 0.5.2   | ✓      | 52558.4    | 18.53   | 9.37          |
| polkadot                 | 1.0.0   | ✗      | 52366.4    | 18.60   | 9.34          |
| fastify                  | 4.5.3   | ✓      | 51595.2    | 18.89   | 9.25          |
| foxify                   | 0.10.20 | ✓      | 51431.2    | 18.95   | 8.44          |
| connect                  | 3.7.0   | ✗      | 51271.4    | 19.02   | 9.14          |
| 0http                    | 3.4.1   | ✓      | 50724.0    | 19.21   | 9.05          |
| rayo                     | 1.3.10  | ✓      | 49818.4    | 19.58   | 8.88          |
| server-base-router       | 7.1.32  | ✓      | 48136.8    | 20.27   | 8.58          |
| server-base              | 7.1.32  | ✗      | 46489.2    | 21.01   | 8.29          |
| connect-router           | 1.3.7   | ✓      | 46172.8    | 21.18   | 8.23          |
| yeps                     | 1.1.1   | ✗      | 46116.8    | 21.18   | 8.23          |
| restana                  | 4.9.6   | ✓      | 45979.2    | 21.26   | 8.20          |
| micro-route              | 2.5.0   | ✓      | 44890.4    | 21.78   | 8.01          |
| trek-engine              | 1.0.5   | ✗      | 43563.0    | 22.46   | 7.15          |
| vapr                     | 0.6.0   | ✓      | 41634.4    | 23.52   | 6.83          |
| trek-router              | 1.2.0   | ✓      | 40463.8    | 24.22   | 6.64          |
| yeps-router              | 1.2.0   | ✓      | 38485.6    | 25.49   | 6.86          |
| koa                      | 2.13.4  | ✗      | 36969.8    | 26.56   | 6.59          |
| total.js                 | 3.4.13  | ✓      | 35159.0    | 27.94   | 10.76         |
| take-five                | 2.0.0   | ✓      | 34971.4    | 28.09   | 12.57         |
| spirit                   | 0.6.1   | ✗      | 34483.4    | 28.50   | 6.15          |
| restify                  | 8.6.1   | ✓      | 34253.4    | 28.69   | 6.17          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34228.2    | 28.72   | 6.10          |
| spirit-router            | 0.5.0   | ✓      | 32788.4    | 30.01   | 5.85          |
| koa-router               | 12.0.0  | ✓      | 31230.4    | 31.52   | 5.57          |
| hapi                     | 20.2.2  | ✓      | 27530.8    | 35.82   | 4.91          |
| microrouter              | 3.1.3   | ✓      | 26932.0    | 36.63   | 4.80          |
| egg.js                   | 3.1.0   | ✓      | 17805.7    | 55.66   | 6.37          |
| express                  | 4.18.1  | ✓      | 11660.2    | 85.21   | 2.08          |
| express-with-middlewares | 4.18.1  | ✓      | 9963.0     | 99.78   | 3.71          |
| express-route-prefix     | 4.18.1  | ✓      | 9793.0     | 101.54  | 3.62          |
| fastify-big-json         | 4.5.3   | ✓      | 9380.0     | 106.25  | 107.92        |
