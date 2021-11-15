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
* __Run:__ Mon Nov 15 2021 01:30:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 32499.8    | 30.29   | 5.80          |
| fastify                  | 3.23.1  | ✓      | 32226.8    | 30.54   | 5.75          |
| micro                    | 9.3.4   | ✗      | 32146.8    | 30.60   | 5.73          |
| foxify                   | 0.10.20 | ✓      | 31548.4    | 31.19   | 5.17          |
| polka                    | 0.5.2   | ✓      | 30845.6    | 31.92   | 5.50          |
| bare                     | 10.13.0 | ✗      | 30825.8    | 31.96   | 5.50          |
| yeps                     | 1.1.1   | ✗      | 30088.0    | 32.73   | 5.37          |
| 0http                    | 3.1.1   | ✓      | 29172.0    | 33.79   | 5.20          |
| connect                  | 3.7.0   | ✗      | 28411.5    | 34.71   | 5.07          |
| trek-engine              | 1.0.5   | ✗      | 28090.4    | 35.12   | 4.61          |
| rayo                     | 1.3.6   | ✓      | 28081.6    | 35.10   | 5.01          |
| micro-route              | 2.5.0   | ✓      | 27834.0    | 35.43   | 4.96          |
| restana                  | 4.9.2   | ✓      | 27788.0    | 35.49   | 4.96          |
| server-base              | 7.1.29  | ✗      | 27695.6    | 35.60   | 4.94          |
| trek-router              | 1.2.0   | ✓      | 26825.6    | 36.79   | 4.40          |
| connect-router           | 1.3.5   | ✓      | 26292.4    | 37.53   | 4.69          |
| server-base-router       | 7.1.29  | ✓      | 26037.2    | 37.90   | 4.64          |
| spirit-router            | 0.5.0   | ✓      | 24590.4    | 40.21   | 4.39          |
| spirit                   | 0.6.1   | ✗      | 24204.8    | 40.85   | 4.32          |
| yeps-router              | 1.2.0   | ✓      | 23956.4    | 41.24   | 4.27          |
| vapr                     | 0.6.0   | ✓      | 23407.2    | 42.21   | 3.84          |
| koa                      | 2.13.4  | ✗      | 21630.8    | 45.73   | 3.86          |
| take-five                | 2.0.0   | ✓      | 21189.6    | 46.68   | 7.62          |
| restify                  | 8.6.0   | ✓      | 20776.1    | 47.62   | 3.74          |
| koa-router               | 10.1.1  | ✓      | 20034.5    | 49.41   | 3.57          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19791.5    | 50.03   | 3.53          |
| total.js                 | 3.4.13  | ✓      | 19444.0    | 50.93   | 5.95          |
| hapi                     | 20.2.1  | ✓      | 18955.7    | 52.24   | 3.38          |
| microrouter              | 3.1.3   | ✓      | 16604.8    | 59.70   | 2.96          |
| egg.js                   | 2.31.0  | ✓      | 11679.4    | 85.10   | 4.18          |
| express                  | 4.17.1  | ✓      | 7580.5     | 131.28  | 1.35          |
| fastify-big-json         | 3.23.1  | ✓      | 7069.4     | 140.99  | 81.32         |
| express-route-prefix     | 4.17.1  | ✓      | 6581.2     | 151.25  | 2.43          |
| express-with-middlewares | 4.17.1  | ✓      | 6410.4     | 155.27  | 2.38          |
