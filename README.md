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
* __Run:__ Mon Sep 11 2023 01:37:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 25743.6    | 38.35        | 4.59          |
| polka                    | 0.5.2   | ✓      | 25648.4    | 38.48        | 4.57          |
| spirit                   | 0.6.1   | ✗      | 25080.0    | 39.45        | 4.47          |
| server-base              | 7.1.32  | ✗      | 24656.8    | 40.04        | 4.40          |
| fastify                  | 4.22.2  | ✓      | 24595.6    | 40.15        | 4.41          |
| spirit-router            | 0.5.0   | ✓      | 24319.6    | 40.63        | 4.34          |
| connect                  | 3.7.0   | ✗      | 22838.9    | 43.30        | 4.07          |
| yeps                     | 1.1.1   | ✗      | 22699.6    | 43.59        | 4.05          |
| connect-router           | 1.3.8   | ✓      | 22587.1    | 43.76        | 4.03          |
| polkadot                 | 1.0.0   | ✗      | 21994.4    | 44.98        | 3.92          |
| server-base-router       | 7.1.32  | ✓      | 21633.2    | 45.70        | 3.86          |
| h3-router                | 1.8.1   | ✓      | 20485.5    | 48.32        | 3.36          |
| restana                  | 4.9.7   | ✓      | 20107.7    | 49.21        | 3.59          |
| yeps-router              | 1.2.0   | ✓      | 19956.5    | 49.59        | 3.56          |
| vapr                     | 0.6.0   | ✓      | 19828.3    | 49.90        | 3.25          |
| koa                      | 2.14.2  | ✗      | 19585.9    | 50.55        | 3.49          |
| h3                       | 1.8.1   | ✗      | 19543.9    | 50.65        | 3.21          |
| restify                  | 11.1.0  | ✓      | 19285.7    | 51.35        | 3.48          |
| 0http                    | 3.5.2   | ✓      | 19073.3    | 51.95        | 3.40          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19056.3    | 51.95        | 3.40          |
| take-five                | 2.0.0   | ✓      | 18545.1    | 53.41        | 6.67          |
| koa-router               | 12.0.0  | ✓      | 17220.7    | 57.55        | 3.07          |
| hapi                     | 21.3.2  | ✓      | 16347.7    | 60.65        | 2.92          |
| express                  | 4.18.2  | ✓      | 5908.5     | 168.49       | 1.05          |
| fastify-big-json         | 4.22.2  | ✓      | 5576.1     | 178.68       | 64.15         |
| express-with-middlewares | 4.18.2  | ✓      | 5150.3     | 193.36       | 1.92          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.1 | ✓      | N/A        | N/A          | N/A           |
