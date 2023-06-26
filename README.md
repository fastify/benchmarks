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
* __Node:__ `v18.16.0`
* __Run:__ Mon Jun 26 2023 02:03:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 51184.8    | 19.02        | 9.13          |
| 0http                    | 3.5.2   | ✓      | 50869.6    | 19.16        | 9.07          |
| polka                    | 0.5.2   | ✓      | 50756.8    | 19.19        | 9.05          |
| fastify                  | 4.18.0  | ✓      | 48968.8    | 19.93        | 8.78          |
| server-base              | 7.1.32  | ✗      | 48229.6    | 20.24        | 8.60          |
| server-base-router       | 7.1.32  | ✓      | 47768.8    | 20.44        | 8.52          |
| connect                  | 3.7.0   | ✗      | 47726.4    | 20.45        | 8.51          |
| yeps                     | 1.1.1   | ✗      | 47050.4    | 20.75        | 8.39          |
| restana                  | 4.9.7   | ✓      | 45490.4    | 21.49        | 8.11          |
| connect-router           | 1.3.8   | ✓      | 45299.2    | 21.58        | 8.08          |
| vapr                     | 0.6.0   | ✓      | 43452.8    | 22.53        | 7.13          |
| spirit                   | 0.6.1   | ✗      | 42593.6    | 22.97        | 7.60          |
| polkadot                 | 1.0.0   | ✗      | 42432.0    | 23.09        | 7.57          |
| spirit-router            | 0.5.0   | ✓      | 41744.0    | 23.47        | 7.44          |
| h3                       | 1.7.0   | ✗      | 40853.6    | 24.00        | 6.70          |
| h3-router                | 1.7.0   | ✓      | 39285.8    | 24.97        | 6.44          |
| koa                      | 2.14.2  | ✗      | 38457.8    | 25.50        | 6.86          |
| take-five                | 2.0.0   | ✓      | 36787.8    | 26.68        | 13.23         |
| yeps-router              | 1.2.0   | ✓      | 36050.6    | 27.23        | 6.43          |
| restify                  | 11.1.0  | ✓      | 35709.0    | 27.51        | 6.44          |
| koa-router               | 12.0.0  | ✓      | 33612.4    | 29.24        | 5.99          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32384.0    | 30.38        | 5.77          |
| hapi                     | 21.3.2  | ✓      | 32228.0    | 30.53        | 5.75          |
| express                  | 4.18.2  | ✓      | 11517.0    | 86.26        | 2.05          |
| fastify-big-json         | 4.18.0  | ✓      | 10749.0    | 92.48        | 123.67        |
| express-with-middlewares | 4.18.2  | ✓      | 10135.6    | 98.08        | 3.77          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.32.0 | ✓      | N/A        | N/A          | N/A           |
