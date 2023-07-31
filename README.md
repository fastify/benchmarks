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
* __Run:__ Mon Jul 31 2023 01:47:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 44042.6    | 22.27        | 7.85          |
| polka                    | 0.5.2   | ✓      | 43945.6    | 22.29        | 7.84          |
| fastify                  | 4.21.0  | ✓      | 43935.0    | 22.30        | 7.88          |
| connect                  | 3.7.0   | ✗      | 41687.0    | 23.54        | 7.43          |
| server-base              | 7.1.32  | ✗      | 41456.8    | 23.69        | 7.39          |
| h3-router                | 1.7.1   | ✓      | 41077.6    | 23.90        | 6.74          |
| server-base-router       | 7.1.32  | ✓      | 40936.8    | 23.97        | 7.30          |
| yeps                     | 1.1.1   | ✗      | 40264.2    | 24.43        | 7.18          |
| connect-router           | 1.3.8   | ✓      | 39286.4    | 24.99        | 7.01          |
| vapr                     | 0.6.0   | ✓      | 37106.6    | 26.49        | 6.09          |
| spirit                   | 0.6.1   | ✗      | 36548.8    | 26.91        | 6.52          |
| spirit-router            | 0.5.0   | ✓      | 35310.4    | 27.89        | 6.30          |
| koa                      | 2.14.2  | ✗      | 34291.8    | 28.70        | 6.12          |
| yeps-router              | 1.2.0   | ✓      | 33243.0    | 29.64        | 5.93          |
| polkadot                 | 1.0.0   | ✗      | 32083.8    | 30.74        | 5.72          |
| h3                       | 1.7.1   | ✗      | 32027.6    | 30.77        | 5.25          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31922.4    | 30.87        | 5.69          |
| take-five                | 2.0.0   | ✓      | 31601.4    | 31.19        | 11.36         |
| restify                  | 11.1.0  | ✓      | 31277.6    | 31.48        | 5.64          |
| 0http                    | 3.5.2   | ✓      | 30550.4    | 32.28        | 5.45          |
| koa-router               | 12.0.0  | ✓      | 30496.8    | 32.32        | 5.44          |
| hapi                     | 21.3.2  | ✓      | 28220.0    | 34.98        | 5.03          |
| restana                  | 4.9.7   | ✓      | 27258.4    | 36.19        | 4.86          |
| express                  | 4.18.2  | ✓      | 9516.4     | 104.48       | 1.70          |
| fastify-big-json         | 4.21.0  | ✓      | 9391.9     | 105.97       | 108.06        |
| express-with-middlewares | 4.18.2  | ✓      | 8395.4     | 118.51       | 3.12          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.36.0 | ✓      | N/A        | N/A          | N/A           |
