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
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug 08 2022 02:07:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polka                    | 0.5.2   | ✓      | 55528.8    | 17.51   | 9.90          |
| polkadot                 | 1.0.0   | ✗      | 55129.6    | 17.65   | 9.83          |
| foxify                   | 0.10.20 | ✓      | 55005.6    | 17.69   | 9.02          |
| bare                     | 10.13.0 | ✗      | 54843.2    | 17.75   | 9.78          |
| micro                    | 9.4.1   | ✗      | 54700.0    | 17.79   | 9.75          |
| fastify                  | 4.3.0   | ✓      | 54651.2    | 17.80   | 9.80          |
| server-base              | 7.1.32  | ✗      | 52890.4    | 18.41   | 9.43          |
| rayo                     | 1.3.10  | ✓      | 52734.4    | 18.47   | 9.40          |
| connect                  | 3.7.0   | ✗      | 52044.6    | 18.73   | 9.28          |
| yeps                     | 1.1.1   | ✗      | 51620.8    | 18.87   | 9.21          |
| 0http                    | 3.4.1   | ✓      | 50637.6    | 19.25   | 9.03          |
| server-base-router       | 7.1.32  | ✓      | 49738.4    | 19.61   | 8.87          |
| micro-route              | 2.5.0   | ✓      | 48080.8    | 20.30   | 8.57          |
| connect-router           | 1.3.7   | ✓      | 47121.6    | 20.73   | 8.40          |
| restana                  | 4.9.6   | ✓      | 47045.6    | 20.76   | 8.39          |
| trek-engine              | 1.0.5   | ✗      | 45367.0    | 21.54   | 7.44          |
| trek-router              | 1.2.0   | ✓      | 44152.0    | 22.16   | 7.24          |
| vapr                     | 0.6.0   | ✓      | 42951.2    | 22.78   | 7.05          |
| yeps-router              | 1.2.0   | ✓      | 39840.0    | 24.60   | 7.11          |
| koa                      | 2.13.4  | ✗      | 37998.0    | 25.81   | 6.78          |
| take-five                | 2.0.0   | ✓      | 36479.0    | 26.92   | 13.12         |
| spirit                   | 0.6.1   | ✗      | 36360.2    | 27.01   | 6.48          |
| total.js                 | 3.4.13  | ✓      | 35919.4    | 27.34   | 11.00         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35310.6    | 27.83   | 6.30          |
| spirit-router            | 0.5.0   | ✓      | 35075.8    | 28.01   | 6.26          |
| restify                  | 8.6.1   | ✓      | 34366.6    | 28.59   | 6.19          |
| koa-router               | 10.1.1  | ✓      | 33944.2    | 28.96   | 6.05          |
| microrouter              | 3.1.3   | ✓      | 28501.2    | 34.58   | 5.08          |
| hapi                     | 20.2.2  | ✓      | 28276.0    | 34.86   | 5.04          |
| egg.js                   | 2.36.0  | ✓      | 18315.3    | 54.06   | 6.55          |
| express                  | 4.18.1  | ✓      | 11932.0    | 83.25   | 2.13          |
| express-with-middlewares | 4.18.1  | ✓      | 10608.0    | 93.69   | 3.95          |
| express-route-prefix     | 4.18.1  | ✓      | 9981.1     | 99.62   | 3.69          |
| fastify-big-json         | 4.3.0   | ✓      | 9813.0     | 101.38  | 112.90        |
