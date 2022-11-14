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
* __Node:__ `v14.20.1`
* __Run:__ Mon Nov 14 2022 02:09:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 64699.6    | 14.97        | 11.54         |
| micro                    | 9.4.1   | ✗      | 63320.8    | 15.31        | 11.29         |
| fastify                  | 4.9.2   | ✓      | 62025.6    | 15.64        | 11.12         |
| polkadot                 | 1.0.0   | ✗      | 61865.6    | 15.69        | 11.03         |
| foxify                   | 0.10.20 | ✓      | 61432.8    | 15.79        | 10.08         |
| rayo                     | 1.3.10  | ✓      | 59930.4    | 16.19        | 10.69         |
| polka                    | 0.5.2   | ✓      | 59692.8    | 16.27        | 10.65         |
| 0http                    | 3.4.1   | ✓      | 59687.2    | 16.26        | 10.64         |
| h3                       | 0.8.6   | ✗      | 57217.6    | 16.98        | 9.39          |
| server-base-router       | 7.1.32  | ✓      | 55355.2    | 17.57        | 9.87          |
| connect                  | 3.7.0   | ✗      | 55323.0    | 17.58        | 9.87          |
| h3-router                | 0.8.6   | ✓      | 54502.4    | 17.86        | 8.94          |
| yeps                     | 1.1.1   | ✗      | 54442.4    | 17.87        | 9.71          |
| trek-engine              | 1.0.5   | ✗      | 54096.0    | 17.99        | 8.87          |
| server-base              | 7.1.32  | ✗      | 53446.4    | 18.22        | 9.53          |
| restana                  | 4.9.6   | ✓      | 52578.4    | 18.52        | 9.38          |
| connect-router           | 1.3.7   | ✓      | 50528.8    | 19.29        | 9.01          |
| micro-route              | 2.5.0   | ✓      | 48037.6    | 20.32        | 8.57          |
| vapr                     | 0.6.0   | ✓      | 44747.2    | 21.85        | 7.34          |
| trek-router              | 1.2.0   | ✓      | 44512.8    | 21.96        | 7.30          |
| total.js                 | 3.4.13  | ✓      | 43199.2    | 22.65        | 13.22         |
| take-five                | 2.0.0   | ✓      | 41348.0    | 23.69        | 14.87         |
| spirit                   | 0.6.1   | ✗      | 40369.6    | 24.27        | 7.20          |
| yeps-router              | 1.2.0   | ✓      | 40352.6    | 24.29        | 7.20          |
| koa                      | 2.13.4  | ✗      | 39651.8    | 24.72        | 7.07          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 39472.2    | 24.84        | 7.04          |
| spirit-router            | 0.5.0   | ✓      | 39293.6    | 24.96        | 7.01          |
| restify                  | 8.6.1   | ✓      | 36055.4    | 27.23        | 6.50          |
| koa-router               | 12.0.0  | ✓      | 33425.4    | 29.42        | 5.96          |
| hapi                     | 20.2.2  | ✓      | 29697.6    | 33.16        | 5.30          |
| microrouter              | 3.1.3   | ✓      | 28640.0    | 34.41        | 5.11          |
| trpc-router              | 9.27.4  | ✓      | 25209.2    | 39.15        | 5.58          |
| egg.js                   | 3.3.3   | ✓      | 18667.7    | 53.06        | 6.68          |
| express                  | 4.18.2  | ✓      | 12378.8    | 80.25        | 2.21          |
| express-with-middlewares | 4.18.2  | ✓      | 10802.3    | 92.00        | 4.02          |
| express-route-prefix     | 4.18.2  | ✓      | 10536.5    | 94.36        | 3.90          |
| fastify-big-json         | 4.9.2   | ✓      | 10360.0    | 96.04        | 119.19        |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
