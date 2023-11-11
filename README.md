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
* __Node:__ `v20.9.0`
* __Run:__ Sat Nov 11 2023 19:44:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 38777.4    | 25.29        | 6.91          |
| fastify                  | 4.24.3  | ✓      | 38635.2    | 25.38        | 6.93          |
| bare                     | 10.13.0 | ✗      | 38199.0    | 25.67        | 6.81          |
| connect                  | 3.7.0   | ✗      | 37230.2    | 26.36        | 6.64          |
| server-base              | 7.1.32  | ✗      | 37197.6    | 26.38        | 6.63          |
| rayo                     | 1.4.5   | ✓      | 37013.4    | 26.52        | 6.60          |
| server-base-router       | 7.1.32  | ✓      | 36536.4    | 26.89        | 6.52          |
| yeps                     | 1.1.1   | ✗      | 36441.4    | 26.94        | 6.50          |
| connect-router           | 1.3.8   | ✓      | 35125.6    | 27.98        | 6.26          |
| vapr                     | 0.6.0   | ✓      | 33896.8    | 29.00        | 5.56          |
| spirit                   | 0.6.1   | ✗      | 32256.2    | 30.51        | 5.75          |
| spirit-router            | 0.5.0   | ✓      | 32168.6    | 30.59        | 5.74          |
| koa                      | 2.14.2  | ✗      | 31073.6    | 31.68        | 5.54          |
| polkadot                 | 1.0.0   | ✗      | 30886.2    | 31.89        | 5.51          |
| yeps-router              | 1.2.0   | ✓      | 30305.6    | 32.49        | 5.40          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 28504.4    | 34.57        | 5.08          |
| take-five                | 2.0.0   | ✓      | 28346.0    | 34.77        | 10.19         |
| restify                  | 11.1.0  | ✓      | 28324.0    | 34.80        | 5.10          |
| 0http                    | 3.5.2   | ✓      | 28197.2    | 34.98        | 5.03          |
| koa-router               | 12.0.1  | ✓      | 27927.2    | 35.30        | 4.98          |
| h3-router                | 1.8.2   | ✓      | 27821.6    | 35.45        | 4.56          |
| h3                       | 1.8.2   | ✗      | 27531.2    | 35.84        | 4.52          |
| restana                  | 4.9.7   | ✓      | 25682.0    | 38.46        | 4.58          |
| hapi                     | 21.3.2  | ✓      | 24154.8    | 40.89        | 4.31          |
| hono                     | 3.9.2   | ✓      | 8490.5     | 117.14       | 1.51          |
| express                  | 4.18.2  | ✓      | 8006.1     | 124.27       | 1.43          |
| fastify-big-json         | 4.24.3  | ✓      | 7816.1     | 127.45       | 89.92         |
| express-with-middlewares | 4.18.2  | ✓      | 7253.3     | 137.18       | 2.70          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.43.3 | ✓      | N/A        | N/A          | N/A           |
