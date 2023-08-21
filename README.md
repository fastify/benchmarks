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
* __Node:__ `v18.17.0`
* __Run:__ Mon Aug 21 2023 01:36:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 45736.8    | 21.38        | 8.16          |
| polka                    | 0.5.2   | ✓      | 45672.0    | 21.40        | 8.15          |
| fastify                  | 4.21.0  | ✓      | 44820.0    | 21.81        | 8.04          |
| connect                  | 3.7.0   | ✗      | 43964.8    | 22.26        | 7.84          |
| server-base              | 7.1.32  | ✗      | 42932.8    | 22.80        | 7.66          |
| server-base-router       | 7.1.32  | ✓      | 42586.4    | 22.98        | 7.59          |
| yeps                     | 1.1.1   | ✗      | 41832.0    | 23.41        | 7.46          |
| connect-router           | 1.3.8   | ✓      | 41035.2    | 23.89        | 7.32          |
| vapr                     | 0.6.0   | ✓      | 39228.0    | 24.99        | 6.43          |
| spirit                   | 0.6.1   | ✗      | 38824.2    | 25.26        | 6.92          |
| spirit-router            | 0.5.0   | ✓      | 37094.6    | 26.46        | 6.62          |
| polkadot                 | 1.0.0   | ✗      | 35267.4    | 27.87        | 6.29          |
| koa                      | 2.14.2  | ✗      | 34639.8    | 28.36        | 6.18          |
| 0http                    | 3.5.2   | ✓      | 33975.8    | 28.94        | 6.06          |
| yeps-router              | 1.2.0   | ✓      | 33745.8    | 29.12        | 6.02          |
| take-five                | 2.0.0   | ✓      | 33643.8    | 29.21        | 12.10         |
| h3                       | 1.8.0   | ✗      | 33588.0    | 29.28        | 5.51          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33339.0    | 29.51        | 5.95          |
| h3-router                | 1.8.0   | ✓      | 32896.0    | 29.91        | 5.40          |
| restify                  | 11.1.0  | ✓      | 32072.4    | 30.67        | 5.78          |
| restana                  | 4.9.7   | ✓      | 30892.8    | 31.87        | 5.51          |
| koa-router               | 12.0.0  | ✓      | 30672.4    | 32.09        | 5.47          |
| hapi                     | 21.3.2  | ✓      | 28503.6    | 34.58        | 5.08          |
| express                  | 4.18.2  | ✓      | 9678.6     | 102.72       | 1.73          |
| fastify-big-json         | 4.21.0  | ✓      | 9251.8     | 107.70       | 106.43        |
| express-with-middlewares | 4.18.2  | ✓      | 8542.5     | 116.41       | 3.18          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.37.1 | ✓      | N/A        | N/A          | N/A           |
