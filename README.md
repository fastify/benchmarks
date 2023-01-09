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
* __Run:__ Mon Jan 09 2023 01:49:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 43048.0    | 22.76        | 7.68          |
| bare                     | 10.13.0 | ✗      | 42316.0    | 23.14        | 7.55          |
| polka                    | 0.5.2   | ✓      | 41766.2    | 23.44        | 7.45          |
| connect                  | 3.7.0   | ✗      | 40182.4    | 24.39        | 7.17          |
| h3-router                | 1.0.2   | ✓      | 38515.0    | 25.46        | 6.32          |
| server-base-router       | 7.1.32  | ✓      | 38300.2    | 25.61        | 6.83          |
| fastify                  | 4.11.0  | ✓      | 37717.0    | 26.02        | 6.76          |
| yeps                     | 1.1.1   | ✗      | 37381.0    | 26.25        | 6.67          |
| server-base              | 7.1.32  | ✗      | 37137.8    | 26.42        | 6.62          |
| spirit                   | 0.6.1   | ✗      | 34712.2    | 28.32        | 6.19          |
| vapr                     | 0.6.0   | ✓      | 34343.8    | 28.62        | 5.63          |
| spirit-router            | 0.5.0   | ✓      | 34090.2    | 28.86        | 6.08          |
| connect-router           | 1.3.7   | ✓      | 33824.8    | 29.07        | 6.03          |
| koa                      | 2.14.1  | ✗      | 31104.8    | 31.64        | 5.55          |
| h3                       | 1.0.2   | ✗      | 30632.0    | 32.16        | 5.02          |
| yeps-router              | 1.2.0   | ✓      | 29795.2    | 33.06        | 5.31          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 29151.6    | 33.79        | 5.20          |
| 0http                    | v3.4.2  | ✓      | 29096.8    | 33.89        | 5.19          |
| take-five                | 2.0.0   | ✓      | 28991.6    | 33.99        | 10.42         |
| restify                  | 10.0.0  | ✓      | 28660.0    | 34.41        | 5.17          |
| koa-router               | 12.0.0  | ✓      | 27323.2    | 36.09        | 4.87          |
| restana                  | 4.9.7   | ✓      | 25829.2    | 38.22        | 4.61          |
| hapi                     | 21.1.0  | ✓      | 25754.8    | 38.30        | 4.59          |
| express                  | 4.18.2  | ✓      | 8684.0     | 114.57       | 1.55          |
| express-with-middlewares | 4.18.2  | ✓      | 7729.3     | 128.73       | 2.87          |
| fastify-big-json         | 4.11.0  | ✓      | 7048.2     | 141.36       | 81.09         |
| trpc-router              | 10.8.1  | ✓      | 5156.9     | 193.02       | 1.54          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
