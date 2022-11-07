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
* __Run:__ Mon Nov 07 2022 02:12:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| h3                       | 0.8.6   | ✗      | 33442.8    | 29.43        | 5.49          |
| bare                     | 10.13.0 | ✗      | 33325.4    | 29.52        | 5.94          |
| polkadot                 | 1.0.0   | ✗      | 32709.0    | 30.07        | 5.83          |
| micro                    | 9.4.1   | ✗      | 32569.2    | 30.20        | 5.81          |
| foxify                   | 0.10.20 | ✓      | 32015.6    | 30.73        | 5.25          |
| spirit-router            | 0.5.0   | ✓      | 31621.0    | 31.26        | 5.64          |
| h3-router                | 0.8.6   | ✓      | 31334.8    | 31.42        | 5.14          |
| connect                  | 3.7.0   | ✗      | 31178.2    | 31.58        | 5.56          |
| rayo                     | 1.3.10  | ✓      | 30877.2    | 31.88        | 5.51          |
| fastify                  | 4.9.2   | ✓      | 30459.6    | 32.33        | 5.46          |
| 0http                    | 3.4.1   | ✓      | 30414.4    | 32.39        | 5.42          |
| polka                    | 0.5.2   | ✓      | 30311.6    | 32.50        | 5.41          |
| yeps                     | 1.1.1   | ✗      | 29497.6    | 33.40        | 5.26          |
| server-base-router       | 7.1.32  | ✓      | 29072.8    | 33.89        | 5.18          |
| spirit                   | 0.6.1   | ✗      | 28988.4    | 34.08        | 5.17          |
| server-base              | 7.1.32  | ✗      | 28198.0    | 34.97        | 5.03          |
| connect-router           | 1.3.7   | ✓      | 27198.8    | 36.27        | 4.85          |
| micro-route              | 2.5.0   | ✓      | 27098.0    | 36.40        | 4.83          |
| trek-engine              | 1.0.5   | ✗      | 25967.6    | 38.01        | 4.26          |
| trek-router              | 1.2.0   | ✓      | 25374.8    | 38.93        | 4.16          |
| yeps-router              | 1.2.0   | ✓      | 25120.0    | 39.31        | 4.48          |
| vapr                     | 0.6.0   | ✓      | 24165.6    | 40.88        | 3.96          |
| restana                  | 4.9.6   | ✓      | 23469.6    | 42.10        | 4.19          |
| koa                      | 2.13.4  | ✗      | 22088.8    | 44.75        | 3.94          |
| take-five                | 2.0.0   | ✓      | 20968.5    | 47.18        | 7.54          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 20763.6    | 47.66        | 3.70          |
| total.js                 | 3.4.13  | ✓      | 20234.9    | 48.90        | 6.19          |
| restify                  | 8.6.1   | ✓      | 20066.7    | 49.37        | 3.62          |
| koa-router               | 12.0.0  | ✓      | 19145.1    | 51.71        | 3.41          |
| hapi                     | 20.2.2  | ✓      | 18776.5    | 52.74        | 3.35          |
| microrouter              | 3.1.3   | ✓      | 17721.3    | 55.91        | 3.16          |
| trpc-router              | 9.27.4  | ✓      | 16739.3    | 59.22        | 3.70          |
| egg.js                   | 3.3.3   | ✓      | 10942.0    | 90.85        | 3.91          |
| fastify-big-json         | 4.9.2   | ✓      | 7803.9     | 127.77       | 89.78         |
| express                  | 4.18.2  | ✓      | 7356.1     | 135.29       | 1.31          |
| express-route-prefix     | 4.18.2  | ✓      | 7020.6     | 141.76       | 2.60          |
| express-with-middlewares | 4.18.2  | ✓      | 6452.9     | 154.23       | 2.40          |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
