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
* __Run:__ Mon Dec 19 2022 01:52:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 29403.6    | 33.51        | 5.24          |
| spirit-router            | 0.5.0   | ✓      | 27036.4    | 36.53        | 4.82          |
| h3                       | 0.8.6   | ✗      | 26871.6    | 36.71        | 4.41          |
| bare                     | 10.13.0 | ✗      | 26593.2    | 37.12        | 4.74          |
| foxify                   | 0.10.20 | ✓      | 26131.6    | 37.76        | 4.29          |
| spirit                   | 0.6.1   | ✗      | 26086.0    | 37.87        | 4.65          |
| h3-router                | 0.8.6   | ✓      | 26052.0    | 37.89        | 4.27          |
| polka                    | 0.5.2   | ✓      | 25824.0    | 38.21        | 4.61          |
| micro                    | 9.4.1   | ✗      | 25821.2    | 38.22        | 4.60          |
| server-base-router       | 7.1.32  | ✓      | 25534.4    | 38.65        | 4.55          |
| connect                  | 3.7.0   | ✗      | 24774.8    | 39.86        | 4.42          |
| yeps                     | 1.1.1   | ✗      | 24316.0    | 40.64        | 4.34          |
| server-base              | 7.1.32  | ✗      | 23601.6    | 41.87        | 4.21          |
| micro-route              | 2.5.0   | ✓      | 23276.8    | 42.45        | 4.15          |
| connect-router           | 1.3.7   | ✓      | 22686.0    | 43.59        | 4.05          |
| 0http                    | v3.4.2  | ✓      | 22382.4    | 44.19        | 3.99          |
| vapr                     | 0.6.0   | ✓      | 22206.8    | 44.52        | 3.64          |
| koa                      | 2.14.1  | ✗      | 20785.1    | 47.62        | 3.71          |
| trek-engine              | 1.0.5   | ✗      | 20533.3    | 48.21        | 3.37          |
| trek-router              | 1.2.0   | ✓      | 20068.3    | 49.33        | 3.29          |
| yeps-router              | 1.2.0   | ✓      | 20067.6    | 49.30        | 3.58          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19401.9    | 51.03        | 3.46          |
| koa-router               | 12.0.0  | ✓      | 18646.5    | 53.12        | 3.33          |
| take-five                | 2.0.0   | ✓      | 18453.9    | 53.69        | 6.63          |
| restana                  | 4.9.7   | ✓      | 17930.1    | 55.28        | 3.20          |
| microrouter              | 3.1.3   | ✓      | 15939.9    | 62.19        | 2.84          |
| galatajs                 | 0.1.1   | ✓      | 9105.1     | 109.28       | 1.49          |
| egg.js                   | 3.9.1   | ✓      | 7243.2     | 137.45       | 2.59          |
| express                  | 4.18.2  | ✓      | 5841.6     | 170.42       | 1.04          |
| express-route-prefix     | 4.18.2  | ✓      | 5462.9     | 182.36       | 2.02          |
| fastify-big-json         | 4.10.2  | ✓      | 5350.6     | 186.18       | 61.57         |
| express-with-middlewares | 4.18.2  | ✓      | 4997.7     | 199.28       | 1.86          |
| fastify                  | 4.10.2  | ✓      | N/A        | N/A          | N/A           |
| hapi                     | 20.2.2  | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 9.27.3  | ✓      | N/A        | N/A          | N/A           |
