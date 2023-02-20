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
* __Run:__ Mon Feb 20 2023 01:54:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 41720.8    | 23.48        | 7.44          |
| bare                     | 10.13.0 | ✗      | 41575.2    | 23.56        | 7.41          |
| fastify                  | 4.13.0  | ✓      | 41109.6    | 23.82        | 7.37          |
| polka                    | 0.5.2   | ✓      | 40914.4    | 23.94        | 7.30          |
| h3                       | 1.5.0   | ✗      | 40476.0    | 24.21        | 6.64          |
| 0http                    | v3.4.4  | ✓      | 39347.8    | 24.91        | 7.02          |
| server-base-router       | 7.1.32  | ✓      | 38653.4    | 25.37        | 6.89          |
| yeps                     | 1.1.1   | ✗      | 37968.2    | 25.84        | 6.77          |
| server-base              | 7.1.32  | ✗      | 37820.2    | 25.94        | 6.74          |
| connect                  | 3.7.0   | ✗      | 37797.6    | 25.95        | 6.74          |
| connect-router           | 1.3.7   | ✓      | 37545.4    | 26.14        | 6.70          |
| spirit                   | 0.6.1   | ✗      | 35835.4    | 27.42        | 6.39          |
| vapr                     | 0.6.0   | ✓      | 34907.8    | 28.16        | 5.73          |
| spirit-router            | 0.5.0   | ✓      | 34644.6    | 28.37        | 6.18          |
| yeps-router              | 1.2.0   | ✓      | 30678.0    | 32.10        | 5.47          |
| koa                      | 2.14.1  | ✗      | 30612.4    | 32.17        | 5.46          |
| h3-router                | 1.5.0   | ✓      | 30141.6    | 32.68        | 4.94          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 29239.6    | 33.70        | 5.21          |
| take-five                | 2.0.0   | ✓      | 29135.6    | 33.81        | 10.48         |
| restify                  | 11.0.0  | ✓      | 28376.0    | 34.75        | 5.11          |
| koa-router               | 12.0.0  | ✓      | 27148.4    | 36.33        | 4.84          |
| restana                  | 4.9.7   | ✓      | 26142.8    | 37.77        | 4.66          |
| hapi                     | 21.3.0  | ✓      | 20857.3    | 47.45        | 3.72          |
| express                  | 4.18.2  | ✓      | 8769.9     | 113.42       | 1.56          |
| fastify-big-json         | 4.13.0  | ✓      | 8103.2     | 122.82       | 93.22         |
| express-with-middlewares | 4.18.2  | ✓      | 7593.5     | 131.03       | 2.82          |
| trpc-router              | 10.12.0 | ✓      | 5213.9     | 190.90       | 1.56          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
