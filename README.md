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
* __Run:__ Tue Dec 27 2022 20:28:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 42500.0    | 23.08        | 7.58          |
| bare                     | 10.13.0 | ✗      | 42147.2    | 23.30        | 7.52          |
| polka                    | 0.5.2   | ✓      | 40861.8    | 24.03        | 7.29          |
| fastify                  | 4.10.2  | ✓      | 39630.2    | 24.77        | 7.11          |
| h3                       | 1.0.2   | ✗      | 39368.2    | 24.97        | 6.46          |
| server-base-router       | 7.1.32  | ✓      | 38838.4    | 25.28        | 6.93          |
| connect-router           | 1.3.7   | ✓      | 38401.6    | 25.59        | 6.85          |
| server-base              | 7.1.32  | ✗      | 38078.2    | 25.84        | 6.79          |
| yeps                     | 1.1.1   | ✗      | 37771.4    | 26.05        | 6.74          |
| connect                  | 3.7.0   | ✗      | 37518.8    | 26.21        | 6.69          |
| vapr                     | 0.6.0   | ✓      | 35545.8    | 27.69        | 5.83          |
| restana                  | 4.9.7   | ✓      | 35195.4    | 27.94        | 6.28          |
| spirit                   | 0.6.1   | ✗      | 35037.0    | 28.12        | 6.25          |
| spirit-router            | 0.5.0   | ✓      | 33051.0    | 29.83        | 5.89          |
| koa                      | 2.14.1  | ✗      | 31701.2    | 31.09        | 5.65          |
| yeps-router              | 1.2.0   | ✓      | 30818.6    | 31.99        | 5.50          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 30164.0    | 32.69        | 5.38          |
| h3-router                | 1.0.2   | ✓      | 29772.6    | 33.14        | 4.88          |
| take-five                | 2.0.0   | ✓      | 29277.6    | 33.71        | 10.53         |
| restify                  | 10.0.0  | ✓      | 28861.3    | 34.22        | 5.20          |
| 0http                    | v3.4.2  | ✓      | 28257.6    | 34.92        | 5.04          |
| koa-router               | 12.0.0  | ✓      | 27835.6    | 35.46        | 4.96          |
| hapi                     | 21.1.0  | ✓      | 26175.2    | 37.71        | 4.67          |
| express                  | 4.18.2  | ✓      | 9043.0     | 109.98       | 1.61          |
| express-with-middlewares | 4.18.2  | ✓      | 8030.4     | 123.87       | 2.99          |
| fastify-big-json         | 4.10.2  | ✓      | 7394.9     | 134.58       | 85.08         |
| trpc-router              | 10.7.0  | ✓      | 5381.7     | 185.06       | 1.61          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
