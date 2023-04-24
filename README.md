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
* __Run:__ Mon Apr 24 2023 01:47:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 46776.8    | 20.87        | 8.34          |
| fastify                  | 4.15.0  | ✓      | 46119.2    | 21.18        | 8.27          |
| 0http                    | 3.5.2   | ✓      | 45868.8    | 21.31        | 8.18          |
| polkadot                 | 1.0.0   | ✗      | 45810.4    | 21.33        | 8.17          |
| polka                    | 0.5.2   | ✓      | 45536.8    | 21.46        | 8.12          |
| connect                  | 3.7.0   | ✗      | 45022.4    | 21.71        | 8.03          |
| server-base-router       | 7.1.32  | ✓      | 43587.2    | 22.44        | 7.77          |
| server-base              | 7.1.32  | ✗      | 43315.2    | 22.59        | 7.72          |
| yeps                     | 1.1.1   | ✗      | 42340.8    | 23.12        | 7.55          |
| connect-router           | 1.3.8   | ✓      | 41561.6    | 23.56        | 7.41          |
| vapr                     | 0.6.0   | ✓      | 39699.2    | 24.71        | 6.51          |
| spirit                   | 0.6.1   | ✗      | 38900.2    | 25.21        | 6.94          |
| spirit-router            | 0.5.0   | ✓      | 36958.2    | 26.56        | 6.59          |
| koa                      | 2.14.2  | ✗      | 35214.2    | 27.90        | 6.28          |
| h3-router                | 1.6.4   | ✓      | 34889.8    | 28.18        | 5.72          |
| yeps-router              | 1.2.0   | ✓      | 34757.4    | 28.27        | 6.20          |
| h3                       | 1.6.4   | ✗      | 34266.0    | 28.70        | 5.62          |
| take-five                | 2.0.0   | ✓      | 33488.8    | 29.35        | 12.04         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33093.6    | 29.71        | 5.90          |
| restify                  | 11.1.0  | ✓      | 32406.2    | 30.37        | 5.84          |
| koa-router               | 12.0.0  | ✓      | 30973.2    | 31.77        | 5.52          |
| restana                  | 4.9.7   | ✓      | 29788.0    | 33.07        | 5.31          |
| hapi                     | 21.3.1  | ✓      | 24050.4    | 41.06        | 4.29          |
| fastify-big-json         | 4.15.0  | ✓      | 10046.3    | 99.09        | 115.58        |
| express                  | 4.18.2  | ✓      | 9771.0     | 101.74       | 1.74          |
| express-with-middlewares | 4.18.2  | ✓      | 8698.4     | 114.32       | 3.24          |
| trpc-router              | 10.21.1 | ✓      | 6154.7     | 161.71       | 1.84          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
