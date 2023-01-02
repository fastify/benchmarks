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
* __Node:__ `v18.12.1`
* __Run:__ Mon Jan 02 2023 01:48:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 55361.6    | 17.59        | 9.87          |
| h3                       | 1.0.2   | ✗      | 51929.6    | 18.78        | 8.52          |
| bare                     | 10.13.0 | ✗      | 51567.2    | 18.91        | 9.20          |
| h3-router                | 1.0.2   | ✓      | 51539.2    | 18.92        | 8.45          |
| polka                    | 0.5.2   | ✓      | 50164.8    | 19.46        | 8.95          |
| connect                  | 3.7.0   | ✗      | 49320.0    | 19.81        | 8.79          |
| yeps                     | 1.1.1   | ✗      | 48857.6    | 19.97        | 8.71          |
| server-base-router       | 7.1.32  | ✓      | 48639.2    | 20.07        | 8.67          |
| fastify                  | 4.11.0  | ✓      | 48241.6    | 20.25        | 8.65          |
| server-base              | 7.1.32  | ✗      | 48037.6    | 20.35        | 8.57          |
| connect-router           | 1.3.7   | ✓      | 44389.4    | 22.06        | 7.92          |
| spirit                   | 0.6.1   | ✗      | 44186.4    | 22.16        | 7.88          |
| vapr                     | 0.6.0   | ✓      | 44096.0    | 22.18        | 7.23          |
| spirit-router            | 0.5.0   | ✓      | 43112.8    | 22.71        | 7.69          |
| koa                      | 2.14.1  | ✗      | 39428.2    | 24.88        | 7.03          |
| 0http                    | v3.4.2  | ✓      | 38684.0    | 25.38        | 6.90          |
| yeps-router              | 1.2.0   | ✓      | 38130.2    | 25.73        | 6.80          |
| take-five                | 2.0.0   | ✓      | 37106.2    | 26.48        | 13.34         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36935.4    | 26.61        | 6.59          |
| restify                  | 10.0.0  | ✓      | 36459.4    | 26.94        | 6.57          |
| koa-router               | 12.0.0  | ✓      | 35117.4    | 27.99        | 6.26          |
| restana                  | 4.9.7   | ✓      | 34654.2    | 28.38        | 6.18          |
| hapi                     | 21.1.0  | ✓      | 33561.6    | 29.32        | 5.98          |
| express                  | 4.18.2  | ✓      | 11386.2    | 87.25        | 2.03          |
| express-with-middlewares | 4.18.2  | ✓      | 10264.0    | 96.87        | 3.82          |
| fastify-big-json         | 4.11.0  | ✓      | 9477.3     | 104.95       | 109.04        |
| trpc-router              | 10.7.0  | ✓      | 6508.8     | 152.87       | 1.94          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
