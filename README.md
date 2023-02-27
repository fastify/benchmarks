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
* __Node:__ `v18.14.1`
* __Run:__ Mon Feb 27 2023 01:53:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| spirit-router            | 0.5.0   | ✓      | 23401.2    | 42.29        | 4.17          |
| spirit                   | 0.6.1   | ✗      | 23392.4    | 42.28        | 4.17          |
| polka                    | 0.5.2   | ✓      | 23100.0    | 42.79        | 4.12          |
| bare                     | 10.13.0 | ✗      | 22661.6    | 43.69        | 4.04          |
| connect                  | 3.7.0   | ✗      | 22165.6    | 44.68        | 3.95          |
| yeps                     | 1.1.1   | ✗      | 22031.2    | 44.89        | 3.93          |
| fastify                  | 4.13.0  | ✓      | 21850.4    | 45.36        | 3.92          |
| server-base              | 7.1.32  | ✗      | 21454.1    | 46.09        | 3.83          |
| server-base-router       | 7.1.32  | ✓      | 20675.6    | 47.84        | 3.69          |
| connect-router           | 1.3.8   | ✓      | 20541.1    | 48.19        | 3.66          |
| vapr                     | 0.6.0   | ✓      | 20337.3    | 48.66        | 3.34          |
| polkadot                 | 1.0.0   | ✗      | 20183.9    | 49.03        | 3.60          |
| yeps-router              | 1.2.0   | ✓      | 18786.1    | 52.71        | 3.35          |
| koa                      | 2.14.1  | ✗      | 18648.7    | 53.17        | 3.33          |
| restify                  | 11.1.0  | ✓      | 18572.7    | 53.32        | 3.35          |
| h3                       | 1.5.0   | ✗      | 18516.4    | 53.54        | 3.04          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18491.7    | 53.61        | 3.30          |
| restana                  | 4.9.7   | ✓      | 18348.5    | 53.95        | 3.27          |
| take-five                | 2.0.0   | ✓      | 18059.8    | 54.85        | 6.49          |
| h3-router                | 1.5.0   | ✓      | 18050.8    | 54.91        | 2.96          |
| 0http                    | v3.4.4  | ✓      | 16484.4    | 60.17        | 2.94          |
| koa-router               | 12.0.0  | ✓      | 16477.6    | 60.21        | 2.94          |
| hapi                     | 21.3.0  | ✓      | 14111.6    | 70.37        | 2.52          |
| fastify-big-json         | 4.13.0  | ✓      | 6552.7     | 152.19       | 75.39         |
| express                  | 4.18.2  | ✓      | 5348.4     | 186.20       | 0.95          |
| express-with-middlewares | 4.18.2  | ✓      | 4802.0     | 207.34       | 1.79          |
| trpc-router              | 10.13.0 | ✓      | 3627.9     | 274.47       | 1.08          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
