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
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov 08 2021 01:30:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.23.1  | ✓      | 48880.0    | 19.96   | 8.72          |
| 0http                    | 3.1.1   | ✓      | 47993.6    | 20.35   | 8.56          |
| polkadot                 | 1.0.0   | ✗      | 47853.6    | 20.41   | 8.53          |
| polka                    | 0.5.2   | ✓      | 47717.6    | 20.46   | 8.51          |
| bare                     | 10.13.0 | ✗      | 47624.0    | 20.51   | 8.49          |
| foxify                   | 0.10.20 | ✓      | 47329.8    | 20.65   | 7.76          |
| micro                    | 9.3.4   | ✗      | 46588.0    | 20.96   | 8.31          |
| server-base              | 7.1.29  | ✗      | 44425.6    | 22.01   | 7.92          |
| server-base-router       | 7.1.29  | ✓      | 44234.4    | 22.11   | 7.89          |
| connect                  | 3.7.0   | ✗      | 43622.4    | 22.45   | 7.78          |
| rayo                     | 1.3.6   | ✓      | 43179.2    | 22.67   | 7.70          |
| connect-router           | 1.3.5   | ✓      | 42549.6    | 23.01   | 7.59          |
| yeps                     | 1.1.1   | ✗      | 41552.8    | 23.57   | 7.41          |
| restana                  | 4.9.2   | ✓      | 41542.8    | 23.57   | 7.41          |
| micro-route              | 2.5.0   | ✓      | 40667.2    | 24.09   | 7.25          |
| trek-engine              | 1.0.5   | ✗      | 39067.0    | 25.10   | 6.41          |
| trek-router              | 1.2.0   | ✓      | 37827.4    | 25.95   | 6.20          |
| vapr                     | 0.6.0   | ✓      | 36985.0    | 26.53   | 6.07          |
| yeps-router              | 1.2.0   | ✓      | 35724.6    | 27.50   | 6.37          |
| koa                      | 2.13.4  | ✗      | 34785.4    | 28.25   | 6.20          |
| spirit                   | 0.6.1   | ✗      | 32325.2    | 30.45   | 5.76          |
| total.js                 | 3.4.12  | ✓      | 31857.8    | 30.90   | 9.75          |
| koa-router               | 10.1.1  | ✓      | 31551.4    | 31.20   | 5.63          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31514.0    | 31.23   | 5.62          |
| take-five                | 2.0.0   | ✓      | 30984.8    | 31.77   | 11.14         |
| spirit-router            | 0.5.0   | ✓      | 30890.8    | 31.88   | 5.51          |
| restify                  | 8.6.0   | ✓      | 30575.2    | 32.19   | 5.51          |
| hapi                     | 20.2.1  | ✓      | 25828.4    | 38.21   | 4.61          |
| microrouter              | 3.1.3   | ✓      | 24914.0    | 39.63   | 4.44          |
| egg.js                   | 2.31.0  | ✓      | 16067.8    | 61.70   | 5.75          |
| express                  | 4.17.1  | ✓      | 10392.0    | 95.64   | 1.85          |
| express-with-middlewares | 4.17.1  | ✓      | 8767.4     | 113.49  | 3.26          |
| express-route-prefix     | 4.17.1  | ✓      | 8683.5     | 114.57  | 3.21          |
| fastify-big-json         | 3.23.1  | ✓      | 8508.5     | 116.94  | 97.89         |
