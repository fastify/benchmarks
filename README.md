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
* __Run:__ Mon Mar 07 2022 01:41:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| rayo                     | 1.3.10  | ✓      | 143.6      | 21.70   | 0.03          |
| polkadot                 | 1.0.0   | ✗      | 66.2       | 20.78   | 0.01          |
| 0http                    | 3.1.2   | ✓      | 61.4       | 20.44   | 0.01          |
| fastify                  | 3.27.2  | ✓      | 59.9       | 20.68   | 0.01          |
| bare                     | 10.13.0 | ✗      | 50.9       | 20.75   | 0.01          |
| polka                    | 0.5.2   | ✓      | 49.3       | 20.21   | 0.01          |
| micro                    | 9.3.4   | ✗      | 48.9       | 20.54   | 0.01          |
| spirit-router            | 0.5.0   | ✓      | 48.1       | 30.78   | 0.01          |
| foxify                   | 0.10.20 | ✓      | 48.0       | 21.17   | 0.01          |
| connect                  | 3.7.0   | ✗      | 47.7       | 21.16   | 0.01          |
| spirit                   | 0.6.1   | ✗      | 47.1       | 30.82   | 0.01          |
| server-base              | 7.1.29  | ✗      | 45.2       | 22.03   | 0.01          |
| connect-router           | 1.3.6   | ✓      | 44.4       | 22.53   | 0.01          |
| yeps                     | 1.1.1   | ✗      | 44.1       | 22.73   | 0.01          |
| server-base-router       | 7.1.29  | ✓      | 43.6       | 23.01   | 0.01          |
| micro-route              | 2.5.0   | ✓      | 43.6       | 22.80   | 0.01          |
| restana                  | 4.9.3   | ✓      | 43.2       | 24.43   | 0.01          |
| trek-engine              | 1.0.5   | ✗      | 39.6       | 25.43   | 0.01          |
| vapr                     | 0.6.0   | ✓      | 39.3       | 26.56   | 0.01          |
| trek-router              | 1.2.0   | ✓      | 38.3       | 26.53   | 0.01          |
| koa                      | 2.13.4  | ✗      | 34.9       | 28.88   | 0.01          |
| yeps-router              | 1.2.0   | ✓      | 34.4       | 29.26   | 0.01          |
| take-five                | 2.0.0   | ✓      | 33.6       | 32.09   | 0.01          |
| total.js                 | 3.4.13  | ✓      | 32.8       | 30.89   | 0.01          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32.7       | 31.04   | 0.01          |
| koa-router               | 10.1.1  | ✓      | 31.5       | 32.00   | 0.01          |
| restify                  | 8.6.1   | ✓      | 31.2       | 33.80   | 0.01          |
| hapi                     | 20.2.1  | ✓      | 25.1       | 40.01   | 0.00          |
| microrouter              | 3.1.3   | ✓      | 24.8       | 40.56   | 0.00          |
| egg.js                   | 2.33.1  | ✓      | 16.4       | 63.67   | 0.01          |
| fastify-big-json         | 3.27.2  | ✓      | 10.5       | 125.31  | 0.12          |
| express                  | 4.17.3  | ✓      | 10.3       | 101.11  | 0.00          |
| express-route-prefix     | 4.17.3  | ✓      | 9.4        | 116.08  | 0.00          |
| express-with-middlewares | 4.17.3  | ✓      | 9.1        | 116.19  | 0.00          |
