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
* __Run:__ Mon May 23 2022 01:54:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 57487.2    | 16.90   | 10.25         |
| fastify                  | 3.29.0  | ✓      | 56457.6    | 17.21   | 10.07         |
| bare                     | 10.13.0 | ✗      | 56161.6    | 17.31   | 10.02         |
| micro                    | 9.3.4   | ✗      | 55957.6    | 17.37   | 9.98          |
| foxify                   | 0.10.20 | ✓      | 55584.8    | 17.49   | 9.12          |
| polka                    | 0.5.2   | ✓      | 55409.6    | 17.55   | 9.88          |
| connect                  | 3.7.0   | ✗      | 55112.8    | 17.65   | 9.83          |
| 0http                    | 3.2.0   | ✓      | 54625.6    | 17.81   | 9.74          |
| rayo                     | 1.3.10  | ✓      | 53973.6    | 18.03   | 9.63          |
| server-base-router       | 7.1.32  | ✓      | 51321.6    | 18.99   | 9.15          |
| restana                  | 4.9.5   | ✓      | 50134.4    | 19.45   | 8.94          |
| server-base              | 7.1.32  | ✗      | 49968.0    | 19.52   | 8.91          |
| yeps                     | 1.1.1   | ✗      | 49023.2    | 19.91   | 8.74          |
| connect-router           | 1.3.7   | ✓      | 48901.6    | 19.96   | 8.72          |
| micro-route              | 2.5.0   | ✓      | 47657.6    | 20.49   | 8.50          |
| trek-router              | 1.2.0   | ✓      | 44994.4    | 21.73   | 7.38          |
| trek-engine              | 1.0.5   | ✗      | 44122.4    | 22.16   | 7.24          |
| vapr                     | 0.6.0   | ✓      | 42447.2    | 23.06   | 6.96          |
| yeps-router              | 1.2.0   | ✓      | 41015.2    | 23.88   | 7.31          |
| koa                      | 2.13.4  | ✗      | 38879.4    | 25.22   | 6.93          |
| spirit                   | 0.6.1   | ✗      | 38084.0    | 25.77   | 6.79          |
| total.js                 | 3.4.13  | ✓      | 37692.6    | 26.03   | 11.54         |
| take-five                | 2.0.0   | ✓      | 36955.0    | 26.56   | 13.29         |
| spirit-router            | 0.5.0   | ✓      | 36234.4    | 27.11   | 6.46          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36231.8    | 27.10   | 6.46          |
| restify                  | 8.6.1   | ✓      | 36151.4    | 27.15   | 6.52          |
| koa-router               | 10.1.1  | ✓      | 35013.4    | 28.06   | 6.24          |
| hapi                     | 20.2.2  | ✓      | 29838.4    | 33.01   | 5.32          |
| microrouter              | 3.1.3   | ✓      | 28735.2    | 34.29   | 5.12          |
| egg.js                   | 2.35.0  | ✓      | 18455.9    | 53.69   | 6.60          |
| express                  | 4.18.1  | ✓      | 11883.0    | 83.58   | 2.12          |
| express-with-middlewares | 4.18.1  | ✓      | 10411.1    | 95.49   | 3.87          |
| express-route-prefix     | 4.18.1  | ✓      | 10288.4    | 96.65   | 3.81          |
| fastify-big-json         | 3.29.0  | ✓      | 10041.0    | 99.15   | 115.51        |
