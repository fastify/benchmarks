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
* __Node:__ `v18.12.1`
* __Run:__ Thu Dec 22 2022 14:32:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 62846.4    | 15.35        | 11.21         |
| h3                       | 0.8.6   | ✗      | 59300.0    | 16.34        | 9.73          |
| bare                     | 10.13.0 | ✗      | 56005.6    | 17.36        | 9.99          |
| foxify                   | 0.10.20 | ✓      | 55008.8    | 17.67        | 9.02          |
| polka                    | 0.5.2   | ✓      | 54711.2    | 17.75        | 9.76          |
| connect                  | 3.7.0   | ✗      | 53907.2    | 18.06        | 9.61          |
| server-base-router       | 7.1.32  | ✓      | 53636.0    | 18.15        | 9.56          |
| server-base              | 7.1.32  | ✗      | 53282.4    | 18.28        | 9.50          |
| micro                    | 9.4.1   | ✗      | 53176.8    | 18.32        | 9.48          |
| restana                  | 4.9.7   | ✓      | 52197.6    | 18.66        | 9.31          |
| connect-router           | 1.3.7   | ✓      | 51050.4    | 19.09        | 9.10          |
| yeps                     | 1.1.1   | ✗      | 50697.2    | 19.24        | 9.04          |
| micro-route              | 2.5.0   | ✓      | 50235.2    | 19.39        | 8.96          |
| spirit                   | 0.6.1   | ✗      | 49398.4    | 19.75        | 8.81          |
| spirit-router            | 0.5.0   | ✓      | 48652.8    | 20.07        | 8.68          |
| vapr                     | 0.6.0   | ✓      | 48503.2    | 20.11        | 7.96          |
| 0http                    | v3.4.2  | ✓      | 43939.2    | 22.28        | 7.84          |
| trek-engine              | 1.0.5   | ✗      | 43896.6    | 22.28        | 7.20          |
| h3-router                | 0.8.6   | ✓      | 43396.8    | 22.56        | 7.12          |
| trek-router              | 1.2.0   | ✓      | 43157.0    | 22.67        | 7.08          |
| koa                      | 2.14.1  | ✗      | 43064.8    | 22.72        | 7.68          |
| yeps-router              | 1.2.0   | ✓      | 40612.0    | 24.14        | 7.24          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 40019.2    | 24.49        | 7.14          |
| take-five                | 2.0.0   | ✓      | 40002.4    | 24.52        | 14.38         |
| koa-router               | 12.0.0  | ✓      | 37575.0    | 26.12        | 6.70          |
| microrouter              | 3.1.3   | ✓      | 34446.2    | 28.52        | 6.14          |
| galatajs                 | 0.1.1   | ✓      | 16832.2    | 58.91        | 2.76          |
| egg.js                   | 3.9.2   | ✓      | 15930.4    | 62.22        | 5.70          |
| express                  | 4.18.2  | ✓      | 12097.8    | 82.10        | 2.16          |
| express-route-prefix     | 4.18.2  | ✓      | 11053.8    | 89.89        | 4.09          |
| express-with-middlewares | 4.18.2  | ✓      | 10678.6    | 93.05        | 3.97          |
| fastify-big-json         | 4.10.2  | ✓      | 9787.1     | 101.62       | 112.60        |
| fastify                  | 4.10.2  | ✓      | N/A        | N/A          | N/A           |
| hapi                     | 20.2.2  | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 9.27.3  | ✓      | N/A        | N/A          | N/A           |
