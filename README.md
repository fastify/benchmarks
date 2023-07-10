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
* __Node:__ `v18.16.1`
* __Run:__ Mon Jul 10 2023 02:01:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 41842.4    | 23.41        | 7.46          |
| polka                    | 0.5.2   | ✓      | 40425.8    | 24.23        | 7.21          |
| fastify                  | 4.19.2  | ✓      | 38999.8    | 25.14        | 6.99          |
| server-base-router       | 7.1.32  | ✓      | 38362.6    | 25.57        | 6.84          |
| connect                  | 3.7.0   | ✗      | 37728.6    | 26.02        | 6.73          |
| yeps                     | 1.1.1   | ✗      | 37607.4    | 26.09        | 6.71          |
| server-base              | 7.1.32  | ✗      | 37408.6    | 26.23        | 6.67          |
| connect-router           | 1.3.8   | ✓      | 36040.6    | 27.25        | 6.43          |
| restana                  | 4.9.7   | ✓      | 35307.0    | 27.82        | 6.30          |
| spirit                   | 0.6.1   | ✗      | 34841.0    | 28.20        | 6.21          |
| spirit-router            | 0.5.0   | ✓      | 34089.2    | 28.84        | 6.08          |
| vapr                     | 0.6.0   | ✓      | 34031.4    | 28.89        | 5.58          |
| polkadot                 | 1.0.0   | ✗      | 31412.6    | 31.33        | 5.60          |
| h3-router                | 1.7.1   | ✓      | 30400.0    | 32.41        | 4.99          |
| koa                      | 2.14.2  | ✗      | 30249.6    | 32.56        | 5.39          |
| h3                       | 1.7.1   | ✗      | 30198.4    | 32.65        | 4.95          |
| yeps-router              | 1.2.0   | ✓      | 29510.4    | 33.38        | 5.26          |
| 0http                    | 3.5.2   | ✓      | 29288.8    | 33.66        | 5.22          |
| take-five                | 2.0.0   | ✓      | 29270.0    | 33.66        | 10.52         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 28536.7    | 34.53        | 5.09          |
| restify                  | 11.1.0  | ✓      | 27503.6    | 35.85        | 4.96          |
| koa-router               | 12.0.0  | ✓      | 26372.4    | 37.42        | 4.70          |
| hapi                     | 21.3.2  | ✓      | 21099.9    | 46.90        | 3.76          |
| express                  | 4.18.2  | ✓      | 8594.0     | 115.72       | 1.53          |
| fastify-big-json         | 4.19.2  | ✓      | 8205.8     | 121.42       | 94.41         |
| express-with-middlewares | 4.18.2  | ✓      | 7597.2     | 130.99       | 2.83          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.34.0 | ✓      | N/A        | N/A          | N/A           |
