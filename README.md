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
* __Run:__ Mon Apr 17 2023 01:46:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 45088.8    | 21.71        | 8.04          |
| polkadot                 | 1.0.0   | ✗      | 44897.6    | 21.81        | 8.01          |
| polka                    | 0.5.2   | ✓      | 43833.6    | 22.34        | 7.82          |
| fastify                  | 4.15.0  | ✓      | 42538.4    | 23.04        | 7.63          |
| yeps                     | 1.1.1   | ✗      | 42094.4    | 23.25        | 7.51          |
| connect                  | 3.7.0   | ✗      | 41861.6    | 23.44        | 7.47          |
| h3                       | 1.6.4   | ✗      | 41577.6    | 23.60        | 6.82          |
| server-base              | 7.1.32  | ✗      | 41499.2    | 23.66        | 7.40          |
| server-base-router       | 7.1.32  | ✓      | 41365.6    | 23.73        | 7.38          |
| connect-router           | 1.3.8   | ✓      | 39932.2    | 24.57        | 7.12          |
| vapr                     | 0.6.0   | ✓      | 39044.0    | 25.12        | 6.40          |
| restana                  | 4.9.7   | ✓      | 38232.0    | 25.71        | 6.82          |
| spirit                   | 0.6.1   | ✗      | 36549.0    | 26.91        | 6.52          |
| spirit-router            | 0.5.0   | ✓      | 35918.6    | 27.39        | 6.41          |
| koa                      | 2.14.2  | ✗      | 34263.0    | 28.71        | 6.11          |
| yeps-router              | 1.2.0   | ✓      | 33566.6    | 29.29        | 5.99          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32645.6    | 30.16        | 5.82          |
| 0http                    | v3.5.1  | ✓      | 32460.6    | 30.36        | 5.79          |
| take-five                | 2.0.0   | ✓      | 32311.6    | 30.49        | 11.62         |
| restify                  | 11.1.0  | ✓      | 31354.0    | 31.40        | 5.65          |
| h3-router                | 1.6.4   | ✓      | 31099.8    | 31.70        | 5.10          |
| koa-router               | 12.0.0  | ✓      | 30204.0    | 32.63        | 5.39          |
| hapi                     | 21.3.1  | ✓      | 23246.0    | 42.57        | 4.15          |
| express                  | 4.18.2  | ✓      | 9702.5     | 102.50       | 1.73          |
| fastify-big-json         | 4.15.0  | ✓      | 9456.0     | 105.34       | 108.80        |
| express-with-middlewares | 4.18.2  | ✓      | 8633.5     | 115.23       | 3.21          |
| trpc-router              | 10.20.0 | ✓      | 6080.0     | 163.66       | 1.81          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
