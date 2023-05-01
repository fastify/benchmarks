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
* __Node:__ `v18.16.0`
* __Run:__ Mon May 01 2023 01:50:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 46880.8    | 20.83        | 8.36          |
| fastify                  | 4.17.0  | ✓      | 45659.2    | 21.40        | 8.19          |
| polka                    | 0.5.2   | ✓      | 44406.4    | 22.02        | 7.92          |
| connect                  | 3.7.0   | ✗      | 44348.0    | 22.05        | 7.91          |
| server-base-router       | 7.1.32  | ✓      | 43795.2    | 22.34        | 7.81          |
| server-base              | 7.1.32  | ✗      | 42388.0    | 23.09        | 7.56          |
| yeps                     | 1.1.1   | ✗      | 42176.8    | 23.21        | 7.52          |
| connect-router           | 1.3.8   | ✓      | 42056.8    | 23.28        | 7.50          |
| vapr                     | 0.6.0   | ✓      | 40048.0    | 24.48        | 6.57          |
| spirit                   | 0.6.1   | ✗      | 39506.6    | 24.80        | 7.04          |
| spirit-router            | 0.5.0   | ✓      | 37251.0    | 26.36        | 6.64          |
| polkadot                 | 1.0.0   | ✗      | 36004.6    | 27.27        | 6.42          |
| h3                       | 1.6.4   | ✗      | 34987.8    | 28.09        | 5.74          |
| koa                      | 2.14.2  | ✗      | 34725.0    | 28.29        | 6.19          |
| yeps-router              | 1.2.0   | ✓      | 34242.6    | 28.69        | 6.11          |
| 0http                    | 3.5.2   | ✓      | 33967.6    | 28.95        | 6.06          |
| h3-router                | 1.6.4   | ✓      | 33751.2    | 29.13        | 5.54          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33675.2    | 29.21        | 6.00          |
| take-five                | 2.0.0   | ✓      | 33089.2    | 29.72        | 11.90         |
| restify                  | 11.1.0  | ✓      | 33044.4    | 29.77        | 5.96          |
| restana                  | 4.9.7   | ✓      | 31206.8    | 31.55        | 5.57          |
| koa-router               | 12.0.0  | ✓      | 30938.8    | 31.81        | 5.52          |
| hapi                     | 21.3.2  | ✓      | 29287.2    | 33.64        | 5.22          |
| fastify-big-json         | 4.17.0  | ✓      | 10034.5    | 99.21        | 115.46        |
| express                  | 4.18.2  | ✓      | 9888.5     | 100.53       | 1.76          |
| express-with-middlewares | 4.18.2  | ✓      | 8726.5     | 113.97       | 3.25          |
| trpc-router              | 10.23.0 | ✓      | 5680.9     | 175.20       | 1.70          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
