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
* __Run:__ Mon Jun 19 2023 01:54:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 43897.0    | 22.29        | 7.83          |
| polkadot                 | 1.0.0   | ✗      | 43798.4    | 22.33        | 7.81          |
| fastify                  | 4.18.0  | ✓      | 42570.4    | 22.99        | 7.63          |
| connect                  | 3.7.0   | ✗      | 41426.4    | 23.64        | 7.39          |
| yeps                     | 1.1.1   | ✗      | 41363.2    | 23.67        | 7.38          |
| polka                    | 0.5.2   | ✓      | 40966.2    | 23.92        | 7.31          |
| server-base-router       | 7.1.32  | ✓      | 39602.4    | 24.75        | 7.06          |
| server-base              | 7.1.32  | ✗      | 39565.0    | 24.77        | 7.06          |
| vapr                     | 0.6.0   | ✓      | 39180.8    | 25.02        | 6.43          |
| connect-router           | 1.3.8   | ✓      | 37185.6    | 26.39        | 6.63          |
| spirit-router            | 0.5.0   | ✓      | 36303.4    | 27.06        | 6.47          |
| spirit                   | 0.6.1   | ✗      | 36028.2    | 27.26        | 6.42          |
| take-five                | 2.0.0   | ✓      | 32591.6    | 30.18        | 11.72         |
| koa                      | 2.14.2  | ✗      | 32434.6    | 30.33        | 5.78          |
| yeps-router              | 1.2.0   | ✓      | 32189.2    | 30.56        | 5.74          |
| 0http                    | 3.5.2   | ✓      | 30688.0    | 32.10        | 5.47          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 30655.7    | 32.11        | 5.47          |
| h3                       | 1.6.6   | ✗      | 30342.0    | 32.47        | 4.98          |
| h3-router                | 1.6.6   | ✓      | 30171.6    | 32.66        | 4.95          |
| restify                  | 11.1.0  | ✓      | 29803.2    | 33.06        | 5.37          |
| restana                  | 4.9.7   | ✓      | 29446.4    | 33.47        | 5.25          |
| koa-router               | 12.0.0  | ✓      | 28898.0    | 34.10        | 5.15          |
| hapi                     | 21.3.2  | ✓      | 21970.4    | 45.00        | 3.92          |
| express                  | 4.18.2  | ✓      | 8922.9     | 111.45       | 1.59          |
| fastify-big-json         | 4.18.0  | ✓      | 8667.8     | 114.81       | 99.72         |
| express-with-middlewares | 4.18.2  | ✓      | 7914.9     | 125.69       | 2.94          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.31.0 | ✓      | N/A        | N/A          | N/A           |
