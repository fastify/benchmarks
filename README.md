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
* __Run:__ Mon May 15 2023 01:48:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| spirit                   | 0.6.1   | ✗      | 24034.0    | 41.15        | 4.29          |
| bare                     | 10.13.0 | ✗      | 23852.8    | 41.42        | 4.25          |
| polka                    | 0.5.2   | ✓      | 23055.2    | 42.86        | 4.11          |
| spirit-router            | 0.5.0   | ✓      | 22987.2    | 43.05        | 4.10          |
| server-base-router       | 7.1.32  | ✓      | 22408.4    | 44.11        | 4.00          |
| connect                  | 3.7.0   | ✗      | 21907.2    | 45.13        | 3.91          |
| 0http                    | 3.5.2   | ✓      | 21847.6    | 45.26        | 3.90          |
| fastify                  | 4.17.0  | ✓      | 21671.9    | 45.63        | 3.89          |
| server-base              | 7.1.32  | ✗      | 21608.4    | 45.76        | 3.85          |
| yeps                     | 1.1.1   | ✗      | 21535.2    | 45.92        | 3.84          |
| polkadot                 | 1.0.0   | ✗      | 19739.3    | 50.15        | 3.52          |
| vapr                     | 0.6.0   | ✓      | 19510.8    | 50.74        | 3.20          |
| connect-router           | 1.3.8   | ✓      | 19380.7    | 51.09        | 3.46          |
| koa                      | 2.14.2  | ✗      | 19040.7    | 52.00        | 3.40          |
| h3-router                | 1.6.5   | ✓      | 18923.7    | 52.32        | 3.10          |
| h3                       | 1.6.5   | ✗      | 18863.5    | 52.52        | 3.09          |
| yeps-router              | 1.2.0   | ✓      | 18748.1    | 52.82        | 3.34          |
| take-five                | 2.0.0   | ✓      | 18461.3    | 53.64        | 6.64          |
| restify                  | 11.1.0  | ✓      | 18342.7    | 53.99        | 3.31          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18148.8    | 54.57        | 3.24          |
| koa-router               | 12.0.0  | ✓      | 16438.0    | 60.30        | 2.93          |
| hapi                     | 21.3.2  | ✓      | 16039.5    | 61.84        | 2.86          |
| restana                  | 4.9.7   | ✓      | 15273.0    | 64.96        | 2.72          |
| fastify-big-json         | 4.17.0  | ✓      | 6460.0     | 154.23       | 74.32         |
| express                  | 4.18.2  | ✓      | 5576.3     | 178.51       | 0.99          |
| express-with-middlewares | 4.18.2  | ✓      | 4816.4     | 206.72       | 1.79          |
| trpc-router              | 10.26.0 | ✓      | 3366.8     | 295.54       | 1.00          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
