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
* __Run:__ Mon Jun 05 2023 01:56:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 46618.4    | 20.99        | 8.31          |
| fastify                  | 4.17.0  | ✓      | 44367.2    | 22.08        | 7.95          |
| polka                    | 0.5.2   | ✓      | 44202.4    | 22.16        | 7.88          |
| yeps                     | 1.1.1   | ✗      | 42358.4    | 23.17        | 7.55          |
| server-base              | 7.1.32  | ✗      | 41983.2    | 23.36        | 7.49          |
| connect                  | 3.7.0   | ✗      | 41774.4    | 23.48        | 7.45          |
| connect-router           | 1.3.8   | ✓      | 40812.8    | 24.03        | 7.28          |
| server-base-router       | 7.1.32  | ✓      | 40727.2    | 24.09        | 7.26          |
| restana                  | 4.9.7   | ✓      | 39808.6    | 24.66        | 7.10          |
| vapr                     | 0.6.0   | ✓      | 38134.4    | 25.78        | 6.26          |
| spirit                   | 0.6.1   | ✗      | 37886.6    | 25.93        | 6.76          |
| spirit-router            | 0.5.0   | ✓      | 36936.2    | 26.63        | 6.59          |
| koa                      | 2.14.2  | ✗      | 35356.8    | 27.82        | 6.31          |
| yeps-router              | 1.2.0   | ✓      | 34116.6    | 28.85        | 6.08          |
| polkadot                 | 1.0.0   | ✗      | 33989.6    | 28.98        | 6.06          |
| h3                       | 1.6.6   | ✗      | 33617.6    | 29.29        | 5.51          |
| take-five                | 2.0.0   | ✓      | 33575.6    | 29.36        | 12.07         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33082.9    | 29.74        | 5.90          |
| 0http                    | 3.5.2   | ✓      | 32660.0    | 30.17        | 5.82          |
| restify                  | 11.1.0  | ✓      | 32598.6    | 30.21        | 5.88          |
| h3-router                | 1.6.6   | ✓      | 32167.4    | 30.61        | 5.28          |
| koa-router               | 12.0.0  | ✓      | 30685.2    | 32.11        | 5.47          |
| hapi                     | 21.3.2  | ✓      | 29628.0    | 33.31        | 5.28          |
| fastify-big-json         | 4.17.0  | ✓      | 9889.0     | 100.72       | 113.77        |
| express                  | 4.18.2  | ✓      | 9679.5     | 102.79       | 1.73          |
| express-with-middlewares | 4.18.2  | ✓      | 8737.5     | 113.84       | 3.25          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.29.1 | ✓      | N/A        | N/A          | N/A           |
