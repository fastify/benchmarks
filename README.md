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
* __Node:__ `v18.14.0`
* __Run:__ Mon Feb 13 2023 01:54:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| h3                       | 1.4.0   | ✗      | 52022.4    | 18.74        | 8.53          |
| fastify                  | 4.13.0  | ✓      | 51470.4    | 18.94        | 9.23          |
| h3-router                | 1.4.0   | ✓      | 50491.2    | 19.31        | 8.28          |
| polka                    | 0.5.2   | ✓      | 50355.2    | 19.34        | 8.98          |
| bare                     | 10.13.0 | ✗      | 49680.8    | 19.61        | 8.86          |
| server-base-router       | 7.1.32  | ✓      | 48888.8    | 19.96        | 8.72          |
| connect                  | 3.7.0   | ✗      | 48845.6    | 19.99        | 8.71          |
| server-base              | 7.1.32  | ✗      | 48062.4    | 20.28        | 8.57          |
| yeps                     | 1.1.1   | ✗      | 47897.6    | 20.39        | 8.54          |
| connect-router           | 1.3.7   | ✓      | 46059.2    | 21.22        | 8.21          |
| restana                  | 4.9.7   | ✓      | 45800.8    | 21.32        | 8.17          |
| spirit                   | 0.6.1   | ✗      | 44367.2    | 22.07        | 7.91          |
| vapr                     | 0.6.0   | ✓      | 43764.0    | 22.33        | 7.18          |
| polkadot                 | 1.0.0   | ✗      | 43261.6    | 22.63        | 7.72          |
| spirit-router            | 0.5.0   | ✓      | 42821.6    | 22.85        | 7.64          |
| koa                      | 2.14.1  | ✗      | 39790.4    | 24.65        | 7.10          |
| 0http                    | v3.4.3  | ✓      | 39603.2    | 24.77        | 7.06          |
| yeps-router              | 1.2.0   | ✓      | 38097.6    | 25.75        | 6.79          |
| take-five                | 2.0.0   | ✓      | 37785.0    | 25.97        | 13.58         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37549.4    | 26.12        | 6.70          |
| restify                  | 11.0.0  | ✓      | 36764.2    | 26.69        | 6.63          |
| koa-router               | 12.0.0  | ✓      | 34744.2    | 28.30        | 6.20          |
| hapi                     | 21.2.2  | ✓      | 33021.2    | 29.77        | 5.89          |
| express                  | 4.18.2  | ✓      | 11727.4    | 84.70        | 2.09          |
| fastify-big-json         | 4.13.0  | ✓      | 10965.0    | 90.74        | 126.16        |
| express-with-middlewares | 4.18.2  | ✓      | 10209.0    | 97.38        | 3.80          |
| trpc-router              | 10.11.0 | ✓      | 6613.0     | 150.48       | 1.97          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
