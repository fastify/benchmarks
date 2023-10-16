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
* __Node:__ `v18.18.0`
* __Run:__ Mon Oct 16 2023 01:39:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 51593.6    | 18.89        | 9.20          |
| bare                     | 10.13.0 | ✗      | 48882.4    | 19.97        | 8.72          |
| polka                    | 0.5.2   | ✓      | 48882.4    | 19.96        | 8.72          |
| fastify                  | 4.24.2  | ✓      | 47945.6    | 20.37        | 8.60          |
| connect                  | 3.7.0   | ✗      | 46652.6    | 20.96        | 8.32          |
| server-base-router       | 7.1.32  | ✓      | 46129.6    | 21.18        | 8.23          |
| server-base              | 7.1.32  | ✗      | 45790.4    | 21.35        | 8.17          |
| yeps                     | 1.1.1   | ✗      | 45308.8    | 21.58        | 8.08          |
| restana                  | 4.9.7   | ✓      | 43902.4    | 22.29        | 7.83          |
| connect-router           | 1.3.8   | ✓      | 43412.0    | 22.54        | 7.74          |
| vapr                     | 0.6.0   | ✓      | 42468.8    | 23.05        | 6.97          |
| spirit                   | 0.6.1   | ✗      | 41063.2    | 23.87        | 7.32          |
| spirit-router            | 0.5.0   | ✓      | 39243.4    | 24.98        | 7.00          |
| 0http                    | 3.5.2   | ✓      | 37535.0    | 26.15        | 6.69          |
| koa                      | 2.14.2  | ✗      | 37180.2    | 26.41        | 6.63          |
| h3                       | 1.8.2   | ✗      | 36174.2    | 27.16        | 5.93          |
| take-five                | 2.0.0   | ✓      | 35979.8    | 27.29        | 12.94         |
| yeps-router              | 1.2.0   | ✓      | 35576.6    | 27.60        | 6.34          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35121.0    | 27.97        | 6.26          |
| restify                  | 11.1.0  | ✓      | 34747.2    | 28.27        | 6.26          |
| h3-router                | 1.8.2   | ✓      | 34608.2    | 28.40        | 5.68          |
| koa-router               | 12.0.1  | ✓      | 34096.6    | 28.84        | 6.08          |
| hapi                     | 21.3.2  | ✓      | 31412.8    | 31.34        | 5.60          |
| express                  | 4.18.2  | ✓      | 10979.4    | 90.50        | 1.96          |
| fastify-big-json         | 4.24.2  | ✓      | 10465.8    | 95.08        | 120.42        |
| express-with-middlewares | 4.18.2  | ✓      | 9774.0     | 101.72       | 3.63          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.40.0 | ✓      | N/A        | N/A          | N/A           |
