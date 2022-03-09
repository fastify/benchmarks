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
* __Run:__ Wed Mar 09 2022 08:30:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| spirit                   | 0.6.1   | ✗      | 158.4      | 29.47   | 0.03          |
| spirit-router            | 0.5.0   | ✓      | 135.1      | 30.67   | 0.02          |
| polkadot                 | 1.0.0   | ✗      | 59.5       | 27.04   | 0.01          |
| 0http                    | 3.1.2   | ✓      | 37.5       | 29.76   | 0.01          |
| bare                     | 10.13.0 | ✗      | 34.8       | 29.53   | 0.01          |
| fastify                  | 3.27.3  | ✓      | 34.7       | 29.84   | 0.01          |
| micro                    | 9.3.4   | ✗      | 34.6       | 29.50   | 0.01          |
| polka                    | 0.5.2   | ✓      | 33.7       | 30.43   | 0.01          |
| rayo                     | 1.3.10  | ✓      | 33.3       | 30.61   | 0.01          |
| server-base              | 7.1.29  | ✗      | 31.7       | 32.18   | 0.01          |
| foxify                   | 0.10.20 | ✓      | 31.6       | 32.12   | 0.01          |
| connect                  | 3.7.0   | ✗      | 31.2       | 32.46   | 0.01          |
| server-base-router       | 7.1.29  | ✓      | 31.0       | 32.76   | 0.01          |
| yeps                     | 1.1.1   | ✗      | 30.5       | 33.84   | 0.01          |
| trek-engine              | 1.0.5   | ✗      | 29.3       | 34.86   | 0.00          |
| micro-route              | 2.5.0   | ✓      | 29.1       | 34.88   | 0.01          |
| restana                  | 4.9.3   | ✓      | 28.8       | 35.91   | 0.01          |
| connect-router           | 1.3.6   | ✓      | 27.4       | 37.17   | 0.00          |
| trek-router              | 1.2.0   | ✓      | 27.3       | 37.10   | 0.00          |
| yeps-router              | 1.2.0   | ✓      | 26.0       | 39.28   | 0.00          |
| vapr                     | 0.6.0   | ✓      | 24.4       | 41.63   | 0.00          |
| koa                      | 2.13.4  | ✗      | 24.0       | 42.42   | 0.00          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 22.4       | 45.18   | 0.00          |
| restify                  | 8.6.1   | ✓      | 21.8       | 46.12   | 0.00          |
| take-five                | 2.0.0   | ✓      | 21.7       | 46.81   | 0.01          |
| koa-router               | 10.1.1  | ✓      | 21.5       | 47.01   | 0.00          |
| total.js                 | 3.4.13  | ✓      | 20.9       | 48.57   | 0.01          |
| hapi                     | 20.2.1  | ✓      | 19.1       | 53.16   | 0.00          |
| microrouter              | 3.1.3   | ✓      | 18.6       | 54.23   | 0.00          |
| egg.js                   | 2.33.1  | ✓      | 12.1       | 85.68   | 0.00          |
| fastify-big-json         | 3.27.3  | ✓      | 10.1       | 127.22  | 0.12          |
| express                  | 4.17.3  | ✓      | 8.3        | 124.40  | 0.00          |
| express-route-prefix     | 4.17.3  | ✓      | 7.8        | 137.50  | 0.00          |
| express-with-middlewares | 4.17.3  | ✓      | 7.0        | 150.51  | 0.00          |
