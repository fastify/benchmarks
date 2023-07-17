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
* __Run:__ Mon Jul 17 2023 02:05:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 49536.8    | 19.72        | 8.83          |
| polka                    | 0.5.2   | ✓      | 49408.0    | 19.77        | 8.81          |
| fastify                  | 4.19.2  | ✓      | 47992.8    | 20.36        | 8.60          |
| server-base              | 7.1.32  | ✗      | 47434.4    | 20.61        | 8.46          |
| connect                  | 3.7.0   | ✗      | 47308.8    | 20.66        | 8.44          |
| server-base-router       | 7.1.32  | ✓      | 47220.8    | 20.70        | 8.42          |
| yeps                     | 1.1.1   | ✗      | 45180.8    | 21.66        | 8.06          |
| connect-router           | 1.3.8   | ✓      | 44282.4    | 22.11        | 7.90          |
| spirit                   | 0.6.1   | ✗      | 44269.6    | 22.13        | 7.89          |
| vapr                     | 0.6.0   | ✓      | 42312.0    | 23.18        | 6.94          |
| polkadot                 | 1.0.0   | ✗      | 39926.4    | 24.55        | 7.12          |
| koa                      | 2.14.2  | ✗      | 37755.8    | 26.00        | 6.73          |
| take-five                | 2.0.0   | ✓      | 37412.6    | 26.24        | 13.45         |
| h3                       | 1.7.1   | ✗      | 37399.0    | 26.28        | 6.13          |
| h3-router                | 1.7.1   | ✓      | 36728.2    | 26.75        | 6.02          |
| 0http                    | 3.5.2   | ✓      | 36636.2    | 26.84        | 6.53          |
| restify                  | 11.1.0  | ✓      | 36568.6    | 26.89        | 6.59          |
| yeps-router              | 1.2.0   | ✓      | 35952.6    | 27.34        | 6.41          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35699.2    | 27.56        | 6.37          |
| koa-router               | 12.0.0  | ✓      | 34117.8    | 28.85        | 6.08          |
| restana                  | 4.9.7   | ✓      | 34050.4    | 28.89        | 6.07          |
| spirit-router            | 0.5.0   | ✓      | 32638.6    | 30.15        | 5.82          |
| hapi                     | 21.3.2  | ✓      | 32473.4    | 30.34        | 5.79          |
| express                  | 4.18.2  | ✓      | 11257.2    | 88.27        | 2.01          |
| fastify-big-json         | 4.19.2  | ✓      | 10835.6    | 91.75        | 124.67        |
| express-with-middlewares | 4.18.2  | ✓      | 10016.0    | 99.26        | 3.72          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.34.0 | ✓      | N/A        | N/A          | N/A           |
