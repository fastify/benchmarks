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
* __Node:__ `v18.14.2`
* __Run:__ Mon Mar 06 2023 01:54:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 47318.4    | 20.64        | 8.44          |
| bare                     | 10.13.0 | ✗      | 46368.8    | 21.06        | 8.27          |
| fastify                  | 4.14.0  | ✓      | 46114.4    | 21.18        | 8.27          |
| server-base              | 7.1.32  | ✗      | 43863.2    | 22.30        | 7.82          |
| server-base-router       | 7.1.32  | ✓      | 43151.2    | 22.67        | 7.69          |
| connect                  | 3.7.0   | ✗      | 42727.2    | 22.90        | 7.62          |
| yeps                     | 1.1.1   | ✗      | 42050.4    | 23.28        | 7.50          |
| connect-router           | 1.3.8   | ✓      | 40944.0    | 23.93        | 7.30          |
| restana                  | 4.9.7   | ✓      | 40287.4    | 24.34        | 7.18          |
| spirit                   | 0.6.1   | ✗      | 40211.2    | 24.37        | 7.17          |
| vapr                     | 0.6.0   | ✓      | 38727.4    | 25.32        | 6.35          |
| spirit-router            | 0.5.0   | ✓      | 36979.4    | 26.56        | 6.59          |
| polkadot                 | 1.0.0   | ✗      | 36360.0    | 27.01        | 6.48          |
| h3                       | 1.5.0   | ✗      | 36163.4    | 27.16        | 5.93          |
| koa                      | 2.14.1  | ✗      | 34611.8    | 28.39        | 6.17          |
| h3-router                | 1.5.0   | ✓      | 34044.4    | 28.88        | 5.58          |
| yeps-router              | 1.2.0   | ✓      | 33899.4    | 29.01        | 6.04          |
| 0http                    | v3.5.1  | ✓      | 33150.8    | 29.69        | 5.91          |
| take-five                | 2.0.0   | ✓      | 33112.0    | 29.70        | 11.90         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32732.8    | 30.04        | 5.84          |
| restify                  | 11.1.0  | ✓      | 32638.8    | 30.13        | 5.88          |
| koa-router               | 12.0.0  | ✓      | 31142.8    | 31.61        | 5.55          |
| hapi                     | 21.3.0  | ✓      | 28482.0    | 34.59        | 5.08          |
| fastify-big-json         | 4.14.0  | ✓      | 9900.5     | 100.50       | 113.90        |
| express                  | 4.18.2  | ✓      | 9871.1     | 100.75       | 1.76          |
| express-with-middlewares | 4.18.2  | ✓      | 8688.8     | 114.47       | 3.23          |
| trpc-router              | 10.14.0 | ✓      | 6104.7     | 163.04       | 1.82          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
