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
* __Node:__ `v14.20.0`
* __Run:__ Mon Sep 05 2022 02:38:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 63640.8    | 15.19   | 11.35         |
| bare                     | 10.13.0 | ✗      | 62512.0    | 15.51   | 11.15         |
| fastify                  | 4.5.3   | ✓      | 60012.0    | 16.16   | 10.76         |
| 0http                    | 3.4.1   | ✓      | 59847.2    | 16.23   | 10.67         |
| micro                    | 9.4.1   | ✗      | 58949.6    | 16.46   | 10.51         |
| polka                    | 0.5.2   | ✓      | 58643.2    | 16.56   | 10.46         |
| connect                  | 3.7.0   | ✗      | 57877.4    | 16.79   | 10.32         |
| foxify                   | 0.10.20 | ✓      | 57001.6    | 17.04   | 9.35          |
| restana                  | 4.9.6   | ✓      | 56461.6    | 17.22   | 10.07         |
| rayo                     | 1.3.10  | ✓      | 56253.0    | 17.28   | 10.03         |
| server-base              | 7.1.32  | ✗      | 55598.4    | 17.49   | 9.91          |
| server-base-router       | 7.1.32  | ✓      | 55133.6    | 17.64   | 9.83          |
| yeps                     | 1.1.1   | ✗      | 54132.0    | 17.97   | 9.65          |
| connect-router           | 1.3.7   | ✓      | 52312.0    | 18.62   | 9.33          |
| micro-route              | 2.5.0   | ✓      | 51511.2    | 18.92   | 9.19          |
| trek-engine              | 1.0.5   | ✗      | 49700.8    | 19.63   | 8.15          |
| trek-router              | 1.2.0   | ✓      | 48907.2    | 19.95   | 8.02          |
| vapr                     | 0.6.0   | ✓      | 47356.8    | 20.61   | 7.77          |
| spirit                   | 0.6.1   | ✗      | 43992.8    | 22.24   | 7.85          |
| yeps-router              | 1.2.0   | ✓      | 43715.2    | 22.37   | 7.80          |
| koa                      | 2.13.4  | ✗      | 43567.2    | 22.45   | 7.77          |
| spirit-router            | 0.5.0   | ✓      | 42277.6    | 23.15   | 7.54          |
| total.js                 | 3.4.13  | ✓      | 41524.0    | 23.59   | 12.71         |
| take-five                | 2.0.0   | ✓      | 41194.4    | 23.77   | 14.81         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 39865.6    | 24.59   | 7.11          |
| restify                  | 8.6.1   | ✓      | 37987.4    | 25.82   | 6.85          |
| koa-router               | 12.0.0  | ✓      | 37912.6    | 25.88   | 6.76          |
| hapi                     | 20.2.2  | ✓      | 33438.2    | 29.41   | 5.96          |
| microrouter              | 3.1.3   | ✓      | 31596.4    | 31.15   | 5.63          |
| trpc-router              | 9.27.2  | ✓      | 26864.4    | 36.73   | 5.94          |
| egg.js                   | 3.1.0   | ✓      | 19687.2    | 50.30   | 7.04          |
| express                  | 4.18.1  | ✓      | 13609.0    | 72.94   | 2.43          |
| express-with-middlewares | 4.18.1  | ✓      | 11896.4    | 83.50   | 4.42          |
| fastify-big-json         | 4.5.3   | ✓      | 11720.4    | 84.80   | 134.85        |
| express-route-prefix     | 4.18.1  | ✓      | 11036.5    | 90.07   | 4.08          |
