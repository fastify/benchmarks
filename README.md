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
* __Node:__ `v18.18.2`
* __Run:__ Mon Oct 23 2023 01:39:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 25370.8    | 38.91        | 4.52          |
| spirit-router            | 0.5.0   | ✓      | 25142.0    | 39.30        | 4.48          |
| spirit                   | 0.6.1   | ✗      | 24419.6    | 40.53        | 4.35          |
| bare                     | 10.13.0 | ✗      | 24411.6    | 40.45        | 4.35          |
| connect                  | 3.7.0   | ✗      | 23425.6    | 42.18        | 4.18          |
| fastify                  | 4.24.3  | ✓      | 23205.6    | 42.58        | 4.16          |
| server-base              | 7.1.32  | ✗      | 22980.0    | 43.01        | 4.10          |
| yeps                     | 1.1.1   | ✗      | 22490.8    | 43.95        | 4.01          |
| connect-router           | 1.3.8   | ✓      | 22465.6    | 44.00        | 4.01          |
| vapr                     | 0.6.0   | ✓      | 21158.0    | 46.74        | 3.47          |
| server-base-router       | 7.1.32  | ✓      | 21008.9    | 47.09        | 3.75          |
| polkadot                 | 1.0.0   | ✗      | 20873.2    | 47.42        | 3.72          |
| restana                  | 4.9.7   | ✓      | 20283.5    | 48.79        | 3.62          |
| yeps-router              | 1.2.0   | ✓      | 19764.7    | 50.08        | 3.52          |
| koa                      | 2.14.2  | ✗      | 19559.7    | 50.62        | 3.49          |
| h3-router                | 1.8.2   | ✓      | 19310.9    | 51.27        | 3.17          |
| 0http                    | 3.5.2   | ✓      | 18889.5    | 52.45        | 3.37          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18833.3    | 52.58        | 3.36          |
| take-five                | 2.0.0   | ✓      | 18704.3    | 52.94        | 6.72          |
| h3                       | 1.8.2   | ✗      | 18529.2    | 53.45        | 3.04          |
| koa-router               | 12.0.1  | ✓      | 18201.5    | 54.41        | 3.25          |
| restify                  | 11.1.0  | ✓      | 14751.2    | 67.26        | 2.66          |
| hapi                     | 21.3.2  | ✓      | 14063.8    | 70.57        | 2.51          |
| fastify-big-json         | 4.24.3  | ✓      | 6653.4     | 149.81       | 76.54         |
| express                  | 4.18.2  | ✓      | 6010.9     | 165.64       | 1.07          |
| express-with-middlewares | 4.18.2  | ✓      | 5052.1     | 197.03       | 1.88          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.41.0 | ✓      | N/A        | N/A          | N/A           |
