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
* __Run:__ Mon Jun 12 2023 01:59:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 24364.8    | 40.54        | 4.34          |
| fastify                  | 4.18.0  | ✓      | 23969.2    | 41.20        | 4.30          |
| polka                    | 0.5.2   | ✓      | 23744.0    | 41.60        | 4.23          |
| spirit-router            | 0.5.0   | ✓      | 23453.2    | 42.17        | 4.18          |
| connect                  | 3.7.0   | ✗      | 23250.8    | 42.50        | 4.15          |
| spirit                   | 0.6.1   | ✗      | 23238.8    | 42.56        | 4.14          |
| server-base-router       | 7.1.32  | ✓      | 22874.4    | 43.21        | 4.08          |
| yeps                     | 1.1.1   | ✗      | 22166.0    | 44.60        | 3.95          |
| server-base              | 7.1.32  | ✗      | 21918.0    | 45.11        | 3.91          |
| connect-router           | 1.3.8   | ✓      | 21356.4    | 46.31        | 3.81          |
| vapr                     | 0.6.0   | ✓      | 20265.1    | 48.83        | 3.32          |
| polkadot                 | 1.0.0   | ✗      | 19767.7    | 50.08        | 3.53          |
| koa                      | 2.14.2  | ✗      | 19605.5    | 50.49        | 3.50          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19530.3    | 50.68        | 3.48          |
| h3-router                | 1.6.6   | ✓      | 19447.9    | 50.90        | 3.19          |
| yeps-router              | 1.2.0   | ✓      | 19126.9    | 51.77        | 3.41          |
| 0http                    | 3.5.2   | ✓      | 19076.0    | 51.92        | 3.40          |
| restify                  | 11.1.0  | ✓      | 18978.9    | 52.17        | 3.42          |
| take-five                | 2.0.0   | ✓      | 18695.7    | 52.96        | 6.72          |
| h3                       | 1.6.6   | ✗      | 18294.5    | 54.16        | 3.00          |
| restana                  | 4.9.7   | ✓      | 18280.1    | 54.19        | 3.26          |
| koa-router               | 12.0.0  | ✓      | 16755.7    | 59.15        | 2.99          |
| hapi                     | 21.3.2  | ✓      | 16735.4    | 59.23        | 2.98          |
| fastify-big-json         | 4.18.0  | ✓      | 6679.6     | 149.15       | 76.84         |
| express                  | 4.18.2  | ✓      | 5954.8     | 167.13       | 1.06          |
| express-with-middlewares | 4.18.2  | ✓      | 5202.9     | 191.35       | 1.93          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.30.0 | ✓      | N/A        | N/A          | N/A           |
