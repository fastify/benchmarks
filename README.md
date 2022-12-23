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
* __Run:__ Fri Dec 23 2022 21:46:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| spirit-router            | 0.5.0   | ✓      | 31106.4    | 31.70        | 5.55          |
| spirit                   | 0.6.1   | ✗      | 30530.8    | 32.32        | 5.44          |
| h3                       | 0.8.6   | ✗      | 30349.2    | 32.45        | 4.98          |
| h3-router                | 0.8.6   | ✓      | 28870.8    | 34.14        | 4.74          |
| polkadot                 | 1.0.0   | ✗      | 28612.8    | 34.44        | 5.10          |
| micro                    | 9.4.1   | ✗      | 27916.4    | 35.32        | 4.98          |
| server-base-router       | 7.1.32  | ✓      | 27697.6    | 35.62        | 4.94          |
| foxify                   | 0.10.20 | ✓      | 26550.8    | 37.17        | 4.36          |
| polka                    | 0.5.2   | ✓      | 26329.6    | 37.48        | 4.70          |
| bare                     | 10.13.0 | ✗      | 26125.2    | 37.78        | 4.66          |
| server-base              | 7.1.32  | ✗      | 25935.6    | 38.07        | 4.63          |
| yeps                     | 1.1.1   | ✗      | 24623.2    | 40.12        | 4.39          |
| connect                  | 3.7.0   | ✗      | 24315.2    | 40.64        | 4.34          |
| 0http                    | v3.4.2  | ✓      | 24191.2    | 40.84        | 4.31          |
| micro-route              | 2.5.0   | ✓      | 24007.6    | 41.15        | 4.28          |
| koa                      | 2.14.1  | ✗      | 21812.4    | 45.36        | 3.89          |
| connect-router           | 1.3.7   | ✓      | 21810.0    | 45.36        | 3.89          |
| vapr                     | 0.6.0   | ✓      | 21395.6    | 46.23        | 3.51          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21025.2    | 47.06        | 3.75          |
| yeps-router              | 1.2.0   | ✓      | 20569.6    | 48.12        | 3.67          |
| trek-router              | 1.2.0   | ✓      | 20503.1    | 48.25        | 3.36          |
| trek-engine              | 1.0.5   | ✗      | 19824.1    | 49.95        | 3.25          |
| koa-router               | 12.0.0  | ✓      | 19522.5    | 50.72        | 3.48          |
| restana                  | 4.9.7   | ✓      | 18880.3    | 52.45        | 3.37          |
| take-five                | 2.0.0   | ✓      | 18693.3    | 52.96        | 6.72          |
| microrouter              | 3.1.3   | ✓      | 16858.3    | 58.81        | 3.01          |
| galatajs                 | 0.1.1   | ✓      | 9363.4     | 106.28       | 1.54          |
| express                  | 4.18.2  | ✓      | 5616.3     | 177.29       | 1.00          |
| fastify-big-json         | 4.10.2  | ✓      | 5612.3     | 177.56       | 64.57         |
| express-route-prefix     | 4.18.2  | ✓      | 5132.5     | 194.16       | 1.90          |
| express-with-middlewares | 4.18.2  | ✓      | 4863.0     | 204.71       | 1.81          |
| fastify                  | 4.10.2  | ✓      | N/A        | N/A          | N/A           |
| hapi                     | 20.2.2  | ✓      | N/A        | N/A          | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 9.27.3  | ✓      | N/A        | N/A          | N/A           |
