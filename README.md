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
* __Run:__ Mon Mar 14 2022 01:44:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 67.5       | 16.82   | 0.01          |
| 0http                    | 3.1.2   | ✓      | 61.2       | 16.79   | 0.01          |
| fastify                  | 3.27.4  | ✓      | 59.6       | 16.60   | 0.01          |
| bare                     | 10.13.0 | ✗      | 58.7       | 16.82   | 0.01          |
| polka                    | 0.5.2   | ✓      | 58.5       | 16.82   | 0.01          |
| foxify                   | 0.10.20 | ✓      | 58.4       | 16.82   | 0.01          |
| micro                    | 9.3.4   | ✗      | 58.1       | 16.87   | 0.01          |
| connect                  | 3.7.0   | ✗      | 57.3       | 17.18   | 0.01          |
| rayo                     | 1.3.10  | ✓      | 56.0       | 17.48   | 0.01          |
| yeps                     | 1.1.1   | ✗      | 52.8       | 18.66   | 0.01          |
| restana                  | 4.9.3   | ✓      | 52.6       | 19.33   | 0.01          |
| connect-router           | 1.3.6   | ✓      | 50.4       | 19.59   | 0.01          |
| server-base-router       | 7.1.32  | ✓      | 50.0       | 19.90   | 0.01          |
| trek-engine              | 1.0.5   | ✗      | 49.7       | 19.99   | 0.01          |
| micro-route              | 2.5.0   | ✓      | 48.1       | 20.50   | 0.01          |
| trek-router              | 1.2.0   | ✓      | 48.1       | 20.54   | 0.01          |
| server-base              | 7.1.32  | ✗      | 48.0       | 20.76   | 0.01          |
| vapr                     | 0.6.0   | ✓      | 45.6       | 22.24   | 0.01          |
| spirit-router            | 0.5.0   | ✓      | 44.5       | 26.86   | 0.01          |
| koa                      | 2.13.4  | ✗      | 43.3       | 22.82   | 0.01          |
| yeps-router              | 1.2.0   | ✓      | 42.6       | 23.22   | 0.01          |
| total.js                 | 3.4.13  | ✓      | 39.0       | 25.42   | 0.01          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 38.8       | 25.59   | 0.01          |
| take-five                | 2.0.0   | ✓      | 38.5       | 25.68   | 0.01          |
| spirit                   | 0.6.1   | ✗      | 37.3       | 31.03   | 0.01          |
| koa-router               | 10.1.1  | ✓      | 36.3       | 27.39   | 0.01          |
| restify                  | 8.6.1   | ✓      | 36.3       | 27.40   | 0.01          |
| hapi                     | 20.2.1  | ✓      | 31.1       | 32.05   | 0.01          |
| microrouter              | 3.1.3   | ✓      | 29.8       | 33.39   | 0.01          |
| egg.js                   | 2.33.1  | ✓      | 20.0       | 51.02   | 0.01          |
| fastify-big-json         | 3.27.4  | ✓      | 13.3       | 95.88   | 0.15          |
| express                  | 4.17.3  | ✓      | 13.2       | 77.74   | 0.00          |
| express-route-prefix     | 4.17.3  | ✓      | 11.5       | 92.89   | 0.00          |
| express-with-middlewares | 4.17.3  | ✓      | 11.2       | 92.13   | 0.00          |
