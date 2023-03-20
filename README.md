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
* __Node:__ `v18.15.0`
* __Run:__ Mon Mar 20 2023 01:53:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 25910.4    | 38.08        | 4.62          |
| bare                     | 10.13.0 | ✗      | 25150.8    | 39.26        | 4.49          |
| polka                    | 0.5.2   | ✓      | 24574.4    | 40.18        | 4.38          |
| spirit-router            | 0.5.0   | ✓      | 23230.8    | 42.55        | 4.14          |
| connect                  | 3.7.0   | ✗      | 23063.2    | 42.85        | 4.11          |
| spirit                   | 0.6.1   | ✗      | 22900.0    | 43.16        | 4.08          |
| server-base              | 7.1.32  | ✗      | 22794.0    | 43.38        | 4.06          |
| server-base-router       | 7.1.32  | ✓      | 22022.0    | 44.90        | 3.93          |
| yeps                     | 1.1.1   | ✗      | 21877.6    | 45.22        | 3.90          |
| fastify                  | 4.14.1  | ✓      | 21768.4    | 45.42        | 3.90          |
| connect-router           | 1.3.8   | ✓      | 20904.3    | 47.32        | 3.73          |
| vapr                     | 0.6.0   | ✓      | 20875.6    | 47.39        | 3.42          |
| restana                  | 4.9.7   | ✓      | 19575.1    | 50.56        | 3.49          |
| koa                      | 2.14.1  | ✗      | 19470.1    | 50.87        | 3.47          |
| h3                       | 1.6.2   | ✗      | 19448.3    | 50.91        | 3.19          |
| h3-router                | 1.6.2   | ✓      | 19403.9    | 51.04        | 3.18          |
| restify                  | 11.1.0  | ✓      | 19286.1    | 51.34        | 3.48          |
| yeps-router              | 1.2.0   | ✓      | 18910.4    | 52.36        | 3.37          |
| take-five                | 2.0.0   | ✓      | 18745.3    | 52.83        | 6.74          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18714.3    | 52.92        | 3.34          |
| 0http                    | v3.5.1  | ✓      | 18148.5    | 54.61        | 3.24          |
| koa-router               | 12.0.0  | ✓      | 17036.3    | 58.18        | 3.04          |
| hapi                     | 21.3.0  | ✓      | 16561.6    | 59.87        | 2.95          |
| fastify-big-json         | 4.14.1  | ✓      | 6392.7     | 156.08       | 73.55         |
| express                  | 4.18.2  | ✓      | 5753.2     | 173.06       | 1.03          |
| express-with-middlewares | 4.18.2  | ✓      | 4977.6     | 199.87       | 1.85          |
| trpc-router              | 10.16.0 | ✓      | 3591.4     | 277.24       | 1.07          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
