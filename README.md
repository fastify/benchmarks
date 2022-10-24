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
* __Run:__ Mon Oct 24 2022 02:49:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 57310.4    | 16.97        | 10.22         |
| foxify                   | 0.10.20 | ✓      | 56788.8    | 17.11        | 9.32          |
| polka                    | 0.5.2   | ✓      | 56784.8    | 17.12        | 10.13         |
| fastify                  | 4.9.2   | ✓      | 55748.8    | 17.44        | 9.99          |
| micro                    | 9.4.1   | ✗      | 55394.4    | 17.56        | 9.88          |
| polkadot                 | 1.0.0   | ✗      | 55262.4    | 17.62        | 9.85          |
| connect                  | 3.7.0   | ✗      | 55116.6    | 17.66        | 9.83          |
| 0http                    | 3.4.1   | ✓      | 54044.8    | 18.01        | 9.64          |
| server-base-router       | 7.1.32  | ✓      | 53413.6    | 18.23        | 9.53          |
| h3                       | 0.8.5   | ✗      | 53366.4    | 18.25        | 8.75          |
| server-base              | 7.1.32  | ✗      | 52780.0    | 18.46        | 9.41          |
| rayo                     | 1.3.10  | ✓      | 52503.2    | 18.55        | 9.36          |
| yeps                     | 1.1.1   | ✗      | 51076.8    | 19.09        | 9.11          |
| connect-router           | 1.3.7   | ✓      | 49886.4    | 19.55        | 8.90          |
| restana                  | 4.9.6   | ✓      | 49404.8    | 19.76        | 8.81          |
| micro-route              | 2.5.0   | ✓      | 47978.4    | 20.35        | 8.56          |
| trek-engine              | 1.0.5   | ✗      | 46829.6    | 20.88        | 7.68          |
| trek-router              | 1.2.0   | ✓      | 44790.4    | 21.84        | 7.35          |
| vapr                     | 0.6.0   | ✓      | 44150.4    | 22.16        | 7.24          |
| yeps-router              | 1.2.0   | ✓      | 41000.8    | 23.90        | 7.31          |
| h3-router                | 0.8.5   | ✓      | 39087.2    | 25.09        | 6.41          |
| koa                      | 2.13.4  | ✗      | 38584.2    | 25.42        | 6.88          |
| spirit                   | 0.6.1   | ✗      | 38008.0    | 25.81        | 6.78          |
| take-five                | 2.0.0   | ✓      | 37892.2    | 25.89        | 13.62         |
| total.js                 | 3.4.13  | ✓      | 36535.0    | 26.88        | 11.18         |
| spirit-router            | 0.5.0   | ✓      | 36380.6    | 27.00        | 6.49          |
| restify                  | 8.6.1   | ✓      | 35874.2    | 27.37        | 6.47          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35869.8    | 27.38        | 6.40          |
| koa-router               | 12.0.0  | ✓      | 32889.6    | 29.90        | 5.87          |
| hapi                     | 20.2.2  | ✓      | 29672.8    | 33.20        | 5.29          |
| microrouter              | 3.1.3   | ✓      | 28574.0    | 34.49        | 5.10          |
| trpc-router              | 9.27.4  | ✓      | 24464.8    | 40.37        | 5.41          |
| egg.js                   | 3.3.3   | ✓      | 18165.7    | 54.53        | 6.50          |
| express                  | 4.18.2  | ✓      | 11859.0    | 83.79        | 2.11          |
| express-with-middlewares | 4.18.2  | ✓      | 10271.5    | 96.79        | 3.82          |
| express-route-prefix     | 4.18.2  | ✓      | 10065.8    | 98.80        | 3.72          |
| fastify-big-json         | 4.9.2   | ✓      | 9784.4     | 101.82       | 112.58        |
