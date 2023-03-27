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
* __Node:__ `v18.15.0`
* __Run:__ Mon Mar 27 2023 01:46:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 48809.6    | 20.00        | 8.71          |
| bare                     | 10.13.0 | ✗      | 48768.8    | 20.03        | 8.70          |
| polka                    | 0.5.2   | ✓      | 47728.0    | 20.45        | 8.51          |
| fastify                  | 4.15.0  | ✓      | 47710.4    | 20.46        | 8.55          |
| connect                  | 3.7.0   | ✗      | 46403.2    | 21.05        | 8.27          |
| 0http                    | v3.5.1  | ✓      | 45434.4    | 21.52        | 8.10          |
| server-base-router       | 7.1.32  | ✓      | 45097.6    | 21.69        | 8.04          |
| server-base              | 7.1.32  | ✗      | 44515.2    | 21.96        | 7.94          |
| yeps                     | 1.1.1   | ✗      | 44460.8    | 21.99        | 7.93          |
| connect-router           | 1.3.8   | ✓      | 42161.6    | 23.22        | 7.52          |
| vapr                     | 0.6.0   | ✓      | 40934.4    | 23.92        | 6.71          |
| spirit                   | 0.6.1   | ✗      | 40469.6    | 24.24        | 7.22          |
| spirit-router            | 0.5.0   | ✓      | 39111.2    | 25.08        | 6.97          |
| h3                       | 1.6.2   | ✗      | 36382.6    | 26.99        | 5.97          |
| koa                      | 2.14.1  | ✗      | 36113.7    | 27.18        | 6.44          |
| h3-router                | 1.6.2   | ✓      | 35685.4    | 27.53        | 5.85          |
| yeps-router              | 1.2.0   | ✓      | 34942.6    | 28.12        | 6.23          |
| take-five                | 2.0.0   | ✓      | 34499.8    | 28.49        | 12.40         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33690.6    | 29.18        | 6.01          |
| restify                  | 11.1.0  | ✓      | 33463.6    | 29.38        | 6.03          |
| koa-router               | 12.0.0  | ✓      | 31624.4    | 31.13        | 5.64          |
| restana                  | 4.9.7   | ✓      | 30594.4    | 32.18        | 5.46          |
| hapi                     | 21.3.0  | ✓      | 29947.2    | 32.89        | 5.34          |
| express                  | 4.18.2  | ✓      | 10019.4    | 99.20        | 1.79          |
| fastify-big-json         | 4.15.0  | ✓      | 9970.8     | 99.85        | 114.72        |
| express-with-middlewares | 4.18.2  | ✓      | 8811.8     | 112.84       | 3.28          |
| trpc-router              | 10.18.0 | ✓      | 6174.5     | 161.17       | 1.84          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
