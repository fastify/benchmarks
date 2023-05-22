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
* __Run:__ Mon May 22 2023 01:50:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 54612.8    | 17.86        | 9.74          |
| bare                     | 10.13.0 | ✗      | 50569.6    | 19.30        | 9.02          |
| 0http                    | 3.5.2   | ✓      | 49883.2    | 19.57        | 8.90          |
| polka                    | 0.5.2   | ✓      | 49444.0    | 19.75        | 8.82          |
| fastify                  | 4.17.0  | ✓      | 48808.8    | 20.03        | 8.75          |
| server-base-router       | 7.1.32  | ✓      | 47868.8    | 20.42        | 8.54          |
| server-base              | 7.1.32  | ✗      | 47147.2    | 20.72        | 8.41          |
| yeps                     | 1.1.1   | ✗      | 46780.0    | 20.89        | 8.34          |
| connect                  | 3.7.0   | ✗      | 45902.4    | 21.32        | 8.19          |
| spirit                   | 0.6.1   | ✗      | 44591.2    | 21.98        | 7.95          |
| connect-router           | 1.3.8   | ✓      | 44387.2    | 22.06        | 7.92          |
| vapr                     | 0.6.0   | ✓      | 44074.4    | 22.21        | 7.23          |
| spirit-router            | 0.5.0   | ✓      | 42837.6    | 22.87        | 7.64          |
| h3                       | 1.6.6   | ✗      | 39200.8    | 25.06        | 6.43          |
| koa                      | 2.14.2  | ✗      | 38877.4    | 25.24        | 6.93          |
| h3-router                | 1.6.6   | ✓      | 38154.6    | 25.73        | 6.26          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36938.2    | 26.58        | 6.59          |
| yeps-router              | 1.2.0   | ✓      | 36914.6    | 26.60        | 6.58          |
| take-five                | 2.0.0   | ✓      | 36627.8    | 26.82        | 13.17         |
| restify                  | 11.1.0  | ✓      | 36269.8    | 27.08        | 6.54          |
| restana                  | 4.9.7   | ✓      | 34621.4    | 28.40        | 6.17          |
| koa-router               | 12.0.0  | ✓      | 33854.0    | 29.05        | 6.04          |
| hapi                     | 21.3.2  | ✓      | 32741.8    | 30.05        | 5.84          |
| express                  | 4.18.2  | ✓      | 11434.8    | 86.88        | 2.04          |
| fastify-big-json         | 4.17.0  | ✓      | 11304.4    | 87.94        | 130.07        |
| express-with-middlewares | 4.18.2  | ✓      | 10213.4    | 97.37        | 3.80          |
| trpc-router              | 10.27.1 | ✓      | 6280.2     | 158.53       | 1.84          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
