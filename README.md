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
* __Run:__ Mon Feb 28 2022 01:40:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 61.1       | 17.49   | 0.01          |
| 0http                    | 3.1.2   | ✓      | 57.7       | 18.08   | 0.01          |
| bare                     | 10.13.0 | ✗      | 56.8       | 17.66   | 0.01          |
| foxify                   | 0.10.20 | ✓      | 56.5       | 17.84   | 0.01          |
| fastify                  | 3.27.2  | ✓      | 56.2       | 17.75   | 0.01          |
| connect                  | 3.7.0   | ✗      | 55.8       | 17.90   | 0.01          |
| polka                    | 0.5.2   | ✓      | 55.8       | 18.32   | 0.01          |
| micro                    | 9.3.4   | ✗      | 52.6       | 18.93   | 0.01          |
| rayo                     | 1.3.10  | ✓      | 51.7       | 19.22   | 0.01          |
| restana                  | 4.9.3   | ✓      | 51.3       | 20.04   | 0.01          |
| yeps                     | 1.1.1   | ✗      | 50.5       | 19.80   | 0.01          |
| server-base              | 7.1.29  | ✗      | 49.6       | 20.15   | 0.01          |
| server-base-router       | 7.1.29  | ✓      | 49.5       | 20.08   | 0.01          |
| connect-router           | 1.3.6   | ✓      | 48.1       | 20.83   | 0.01          |
| micro-route              | 2.5.0   | ✓      | 48.1       | 20.73   | 0.01          |
| trek-engine              | 1.0.5   | ✗      | 45.6       | 22.00   | 0.01          |
| trek-router              | 1.2.0   | ✓      | 43.4       | 23.04   | 0.01          |
| vapr                     | 0.6.0   | ✓      | 43.0       | 23.30   | 0.01          |
| yeps-router              | 1.2.0   | ✓      | 41.2       | 24.25   | 0.01          |
| spirit                   | 0.6.1   | ✗      | 41.0       | 27.60   | 0.01          |
| koa                      | 2.13.4  | ✗      | 40.2       | 24.99   | 0.01          |
| spirit-router            | 0.5.0   | ✓      | 40.0       | 27.95   | 0.01          |
| total.js                 | 3.4.13  | ✓      | 37.3       | 26.86   | 0.01          |
| take-five                | 2.0.0   | ✓      | 37.0       | 27.06   | 0.01          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36.7       | 27.28   | 0.01          |
| koa-router               | 10.1.1  | ✓      | 35.5       | 28.32   | 0.01          |
| restify                  | 8.6.1   | ✓      | 34.3       | 29.15   | 0.01          |
| microrouter              | 3.1.3   | ✓      | 28.4       | 35.14   | 0.01          |
| hapi                     | 20.2.1  | ✓      | 28.4       | 35.27   | 0.01          |
| egg.js                   | 2.33.1  | ✓      | 19.3       | 53.52   | 0.01          |
| express                  | 4.17.3  | ✓      | 13.1       | 80.00   | 0.00          |
| fastify-big-json         | 3.27.2  | ✓      | 12.7       | 102.28  | 0.15          |
| express-with-middlewares | 4.17.3  | ✓      | 11.0       | 94.77   | 0.00          |
| express-route-prefix     | 4.17.3  | ✓      | 11.0       | 97.65   | 0.00          |
