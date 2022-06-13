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
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 13 2022 02:07:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 46862.4    | 20.91   | 8.36          |
| connect                  | 3.7.0   | ✗      | 45930.4    | 21.35   | 8.19          |
| polkadot                 | 1.0.0   | ✗      | 45852.0    | 21.40   | 8.18          |
| fastify                  | 3.29.0  | ✓      | 45487.2    | 21.53   | 8.11          |
| foxify                   | 0.10.20 | ✓      | 45400.8    | 21.58   | 7.45          |
| polka                    | 0.5.2   | ✓      | 45340.0    | 21.61   | 8.08          |
| rayo                     | 1.3.10  | ✓      | 44953.6    | 21.83   | 8.02          |
| micro                    | 9.3.4   | ✗      | 44664.0    | 21.95   | 7.97          |
| server-base              | 7.1.32  | ✗      | 44159.2    | 22.20   | 7.88          |
| server-base-router       | 7.1.32  | ✓      | 44008.8    | 22.25   | 7.85          |
| yeps                     | 1.1.1   | ✗      | 42629.6    | 23.00   | 7.60          |
| connect-router           | 1.3.7   | ✓      | 41618.4    | 23.56   | 7.42          |
| micro-route              | 2.5.0   | ✓      | 40735.4    | 24.09   | 7.26          |
| trek-router              | 1.2.0   | ✓      | 39375.4    | 24.94   | 6.46          |
| trek-engine              | 1.0.5   | ✗      | 38796.6    | 25.33   | 6.36          |
| vapr                     | 0.6.0   | ✓      | 37436.2    | 26.24   | 6.14          |
| spirit                   | 0.6.1   | ✗      | 37366.2    | 26.32   | 6.66          |
| spirit-router            | 0.5.0   | ✓      | 35291.6    | 27.92   | 6.29          |
| koa                      | 2.13.4  | ✗      | 34720.0    | 28.34   | 6.19          |
| yeps-router              | 1.2.0   | ✓      | 34305.0    | 28.69   | 6.12          |
| total.js                 | 3.4.13  | ✓      | 32339.8    | 30.51   | 9.90          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31709.8    | 31.09   | 5.66          |
| take-five                | 2.0.0   | ✓      | 31445.6    | 31.32   | 11.31         |
| koa-router               | 10.1.1  | ✓      | 31156.4    | 31.70   | 5.56          |
| restify                  | 8.6.1   | ✓      | 30598.8    | 32.22   | 5.52          |
| hapi                     | 20.2.2  | ✓      | 25556.4    | 38.67   | 4.56          |
| microrouter              | 3.1.3   | ✓      | 24607.2    | 40.15   | 4.39          |
| egg.js                   | 2.35.0  | ✓      | 15636.4    | 63.49   | 5.59          |
| express                  | 4.18.1  | ✓      | 10270.5    | 96.83   | 1.83          |
| express-with-middlewares | 4.18.1  | ✓      | 8813.5     | 112.90  | 3.28          |
| express-route-prefix     | 4.18.1  | ✓      | 8797.3     | 113.05  | 3.26          |
| fastify-big-json         | 3.29.0  | ✓      | 8250.0     | 120.68  | 94.91         |
| 0http                    | 3.4.0   | ✓      | N/A        | N/A     | N/A           |
| restana                  | 4.9.5   | ✓      | N/A        | N/A     | N/A           |
