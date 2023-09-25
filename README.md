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
* __Node:__ `v18.17.1`
* __Run:__ Mon Sep 25 2023 01:38:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 23660.0    | 41.80        | 4.22          |
| fastify                  | 4.23.2  | ✓      | 22052.1    | 44.83        | 3.95          |
| spirit-router            | 0.5.0   | ✓      | 21404.0    | 46.29        | 3.82          |
| polka                    | 0.5.2   | ✓      | 21390.0    | 46.26        | 3.81          |
| yeps                     | 1.1.1   | ✗      | 20920.9    | 47.29        | 3.73          |
| spirit                   | 0.6.1   | ✗      | 20838.1    | 47.53        | 3.72          |
| server-base-router       | 7.1.32  | ✓      | 20508.0    | 48.24        | 3.66          |
| server-base              | 7.1.32  | ✗      | 19945.6    | 49.61        | 3.56          |
| koa                      | 2.14.2  | ✗      | 19589.9    | 50.54        | 3.49          |
| vapr                     | 0.6.0   | ✓      | 19589.3    | 50.52        | 3.21          |
| connect                  | 3.7.0   | ✗      | 19515.0    | 50.74        | 3.48          |
| connect-router           | 1.3.8   | ✓      | 18595.2    | 53.25        | 3.32          |
| restana                  | 4.9.7   | ✓      | 18401.3    | 53.84        | 3.28          |
| restify                  | 11.1.0  | ✓      | 18150.5    | 54.57        | 3.27          |
| yeps-router              | 1.2.0   | ✓      | 17723.9    | 55.91        | 3.16          |
| h3                       | 1.8.1   | ✗      | 17628.4    | 56.24        | 2.89          |
| polkadot                 | 1.0.0   | ✗      | 17419.9    | 56.92        | 3.11          |
| 0http                    | 3.5.2   | ✓      | 16751.4    | 59.20        | 2.99          |
| h3-router                | 1.8.1   | ✓      | 16674.2    | 59.45        | 2.73          |
| take-five                | 2.0.0   | ✓      | 16491.8    | 60.11        | 5.93          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 16174.6    | 61.32        | 2.88          |
| koa-router               | 12.0.0  | ✓      | 15678.4    | 63.26        | 2.80          |
| hapi                     | 21.3.2  | ✓      | 13590.4    | 73.04        | 2.42          |
| fastify-big-json         | 4.23.2  | ✓      | 6187.2     | 161.12       | 71.18         |
| express                  | 4.18.2  | ✓      | 5269.3     | 188.96       | 0.94          |
| express-with-middlewares | 4.18.2  | ✓      | 4662.6     | 213.57       | 1.73          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.4 | ✓      | N/A        | N/A          | N/A           |
