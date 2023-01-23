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
* __Node:__ `v18.13.0`
* __Run:__ Mon Jan 23 2023 01:48:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 24848.0    | 39.74        | 4.43          |
| bare                     | 10.13.0 | ✗      | 23889.6    | 41.36        | 4.26          |
| connect                  | 3.7.0   | ✗      | 23159.2    | 42.68        | 4.13          |
| spirit-router            | 0.5.0   | ✓      | 22974.0    | 43.06        | 4.10          |
| spirit                   | 0.6.1   | ✗      | 22889.2    | 43.22        | 4.08          |
| polka                    | 0.5.2   | ✓      | 22788.4    | 43.39        | 4.06          |
| server-base-router       | 7.1.32  | ✓      | 22642.4    | 43.65        | 4.04          |
| fastify                  | 4.12.0  | ✓      | 22532.0    | 43.87        | 4.04          |
| yeps                     | 1.1.1   | ✗      | 22435.2    | 44.06        | 4.00          |
| server-base              | 7.1.32  | ✗      | 22079.2    | 44.77        | 3.94          |
| connect-router           | 1.3.7   | ✓      | 20810.6    | 47.54        | 3.71          |
| vapr                     | 0.6.0   | ✓      | 20447.6    | 48.38        | 3.35          |
| restana                  | 4.9.7   | ✓      | 19008.3    | 52.11        | 3.39          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19003.5    | 52.17        | 3.39          |
| yeps-router              | 1.2.0   | ✓      | 18874.5    | 52.45        | 3.37          |
| koa                      | 2.14.1  | ✗      | 18435.5    | 53.72        | 3.29          |
| restify                  | 10.0.0  | ✓      | 18326.7    | 54.04        | 3.30          |
| h3-router                | 1.0.2   | ✓      | 18138.3    | 54.62        | 2.97          |
| 0http                    | v3.4.2  | ✓      | 18101.6    | 54.77        | 3.23          |
| take-five                | 2.0.0   | ✓      | 17984.9    | 55.08        | 6.47          |
| h3                       | 1.0.2   | ✗      | 17460.6    | 56.74        | 2.86          |
| koa-router               | 12.0.0  | ✓      | 17186.4    | 57.67        | 3.06          |
| hapi                     | 21.2.0  | ✓      | 15842.9    | 62.64        | 2.83          |
| fastify-big-json         | 4.12.0  | ✓      | 6174.1     | 161.28       | 71.04         |
| express                  | 4.18.2  | ✓      | 5642.8     | 176.44       | 1.01          |
| express-with-middlewares | 4.18.2  | ✓      | 5068.2     | 196.41       | 1.88          |
| trpc-router              | 10.9.0  | ✓      | 3332.5     | 298.64       | 0.99          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
