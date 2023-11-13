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

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.9.0`
* __Run:__ Mon Nov 13 2023 01:43:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 46077.6    | 21.19        | 8.22          |
| spirit                   | 0.6.1   | ✗      | 45994.4    | 21.22        | 8.20          |
| fastify                  | 4.24.3  | ✓      | 45958.4    | 21.24        | 8.24          |
| polka                    | 0.5.2   | ✓      | 45950.4    | 21.26        | 8.19          |
| spirit-router            | 0.5.0   | ✓      | 45384.8    | 21.56        | 8.09          |
| connect                  | 3.7.0   | ✗      | 44778.4    | 21.84        | 7.99          |
| server-base-router       | 7.1.32  | ✓      | 44053.6    | 22.18        | 7.86          |
| rayo                     | 1.4.5   | ✓      | 43756.8    | 22.34        | 7.80          |
| server-base              | 7.1.32  | ✗      | 43396.0    | 22.54        | 7.74          |
| yeps                     | 1.1.1   | ✗      | 42203.2    | 23.19        | 7.53          |
| connect-router           | 1.3.8   | ✓      | 41486.4    | 23.62        | 7.40          |
| polkadot                 | 1.0.0   | ✗      | 40974.4    | 23.91        | 7.31          |
| vapr                     | 0.6.0   | ✓      | 40787.2    | 24.01        | 6.69          |
| h3                       | 1.8.2   | ✗      | 40456.0    | 24.22        | 6.64          |
| h3-router                | 1.8.2   | ✓      | 39198.4    | 25.01        | 6.43          |
| 0http                    | 3.5.2   | ✓      | 38226.4    | 25.67        | 6.82          |
| yeps-router              | 1.2.0   | ✓      | 36628.8    | 26.81        | 6.53          |
| koa                      | 2.14.2  | ✗      | 36143.4    | 27.15        | 6.45          |
| restify                  | 11.1.0  | ✓      | 34253.4    | 28.67        | 6.17          |
| take-five                | 2.0.0   | ✓      | 34231.6    | 28.72        | 12.31         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33856.6    | 29.05        | 6.04          |
| koa-router               | 12.0.1  | ✓      | 33596.2    | 29.27        | 5.99          |
| restana                  | 4.9.7   | ✓      | 32876.2    | 29.90        | 5.86          |
| hapi                     | 21.3.2  | ✓      | 30675.2    | 32.07        | 5.47          |
| hono                     | 3.9.2   | ✓      | 12221.4    | 81.26        | 2.18          |
| fastify-big-json         | 4.24.3  | ✓      | 11540.8    | 86.08        | 132.79        |
| express                  | 4.18.2  | ✓      | 10714.2    | 92.73        | 1.91          |
| express-with-middlewares | 4.18.2  | ✓      | 10156.6    | 97.86        | 3.78          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.43.3 | ✓      | N/A        | N/A          | N/A           |
