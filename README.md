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
* __Node:__ `v14.19.2`
* __Run:__ Mon May 30 2022 02:05:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 61880.0    | 15.69   | 11.04         |
| bare                     | 10.13.0 | ✗      | 60824.8    | 15.94   | 10.85         |
| 0http                    | 3.3.0   | ✓      | 60276.8    | 16.07   | 10.75         |
| fastify                  | 3.29.0  | ✓      | 60010.4    | 16.16   | 10.70         |
| polka                    | 0.5.2   | ✓      | 59775.2    | 16.23   | 10.66         |
| foxify                   | 0.10.20 | ✓      | 59141.6    | 16.41   | 9.70          |
| connect                  | 3.7.0   | ✗      | 57480.0    | 16.90   | 10.25         |
| rayo                     | 1.3.10  | ✓      | 57165.6    | 16.99   | 10.19         |
| micro                    | 9.3.4   | ✗      | 56992.8    | 17.05   | 10.16         |
| server-base-router       | 7.1.32  | ✓      | 55642.4    | 17.47   | 9.92          |
| restana                  | 4.9.5   | ✓      | 55434.4    | 17.45   | 9.89          |
| server-base              | 7.1.32  | ✗      | 55376.0    | 17.56   | 9.88          |
| yeps                     | 1.1.1   | ✗      | 53012.0    | 18.37   | 9.45          |
| connect-router           | 1.3.7   | ✓      | 51734.4    | 18.83   | 9.23          |
| micro-route              | 2.5.0   | ✓      | 51007.2    | 19.11   | 9.10          |
| trek-engine              | 1.0.5   | ✗      | 49639.2    | 19.65   | 8.14          |
| trek-router              | 1.2.0   | ✓      | 48092.0    | 20.30   | 7.89          |
| vapr                     | 0.6.0   | ✓      | 45779.2    | 21.34   | 7.51          |
| yeps-router              | 1.2.0   | ✓      | 44329.6    | 22.06   | 7.91          |
| koa                      | 2.13.4  | ✗      | 42857.6    | 22.83   | 7.64          |
| spirit                   | 0.6.1   | ✗      | 41265.6    | 23.72   | 7.36          |
| spirit-router            | 0.5.0   | ✓      | 40588.8    | 24.14   | 7.24          |
| total.js                 | 3.4.13  | ✓      | 40491.2    | 24.21   | 12.39         |
| take-five                | 2.0.0   | ✓      | 39831.8    | 24.60   | 14.32         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 38673.4    | 25.36   | 6.90          |
| koa-router               | 10.1.1  | ✓      | 38269.4    | 25.63   | 6.83          |
| restify                  | 8.6.1   | ✓      | 37947.4    | 25.86   | 6.84          |
| hapi                     | 20.2.2  | ✓      | 32976.4    | 29.82   | 5.88          |
| microrouter              | 3.1.3   | ✓      | 31787.6    | 30.96   | 5.67          |
| egg.js                   | 2.35.0  | ✓      | 19356.4    | 51.15   | 6.92          |
| express                  | 4.18.1  | ✓      | 13273.0    | 74.81   | 2.37          |
| express-route-prefix     | 4.18.1  | ✓      | 11883.0    | 83.61   | 4.40          |
| fastify-big-json         | 3.29.0  | ✓      | 11761.6    | 84.50   | 135.32        |
| express-with-middlewares | 4.18.1  | ✓      | 11524.0    | 86.22   | 4.29          |
