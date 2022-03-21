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
* __Node:__ `v14.19.0`
* __Run:__ Mon Mar 21 2022 01:43:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.27.4  | ✓      | 56285.6    | 17.27   | 10.04         |
| 0http                    | 3.1.2   | ✓      | 56034.4    | 17.35   | 9.99          |
| bare                     | 10.13.0 | ✗      | 56003.2    | 17.37   | 9.99          |
| polkadot                 | 1.0.0   | ✗      | 55719.2    | 17.45   | 9.94          |
| foxify                   | 0.10.20 | ✓      | 55344.0    | 17.57   | 9.08          |
| polka                    | 0.5.2   | ✓      | 54164.0    | 17.96   | 9.66          |
| connect                  | 3.7.0   | ✗      | 53492.0    | 18.20   | 9.54          |
| micro                    | 9.3.4   | ✗      | 52538.4    | 18.54   | 9.37          |
| server-base-router       | 7.1.32  | ✓      | 51168.8    | 19.05   | 9.12          |
| rayo                     | 1.3.10  | ✓      | 51144.8    | 19.06   | 9.12          |
| server-base              | 7.1.32  | ✗      | 50630.4    | 19.25   | 9.03          |
| yeps                     | 1.1.1   | ✗      | 50540.8    | 19.29   | 9.01          |
| restana                  | 4.9.3   | ✓      | 48944.0    | 19.94   | 8.73          |
| connect-router           | 1.3.6   | ✓      | 47305.6    | 20.64   | 8.44          |
| micro-route              | 2.5.0   | ✓      | 46232.8    | 21.13   | 8.24          |
| trek-engine              | 1.0.5   | ✗      | 44965.0    | 21.75   | 7.38          |
| trek-router              | 1.2.0   | ✓      | 44180.8    | 22.15   | 7.25          |
| vapr                     | 0.6.0   | ✓      | 43165.6    | 22.68   | 7.08          |
| yeps-router              | 1.2.0   | ✓      | 40148.0    | 24.41   | 7.16          |
| koa                      | 2.13.4  | ✗      | 38929.8    | 25.20   | 6.94          |
| total.js                 | 3.4.13  | ✓      | 36979.0    | 26.54   | 11.32         |
| take-five                | 2.0.0   | ✓      | 35782.2    | 27.45   | 12.87         |
| spirit                   | 0.6.1   | ✗      | 35668.2    | 27.54   | 6.36          |
| spirit-router            | 0.5.0   | ✓      | 35038.4    | 28.04   | 6.25          |
| koa-router               | 10.1.1  | ✓      | 34844.2    | 28.19   | 6.21          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34683.0    | 28.33   | 6.19          |
| restify                  | 8.6.1   | ✓      | 33796.6    | 29.08   | 6.09          |
| hapi                     | 20.2.1  | ✓      | 28052.0    | 35.15   | 5.00          |
| microrouter              | 3.1.3   | ✓      | 27562.0    | 35.77   | 4.92          |
| egg.js                   | 2.34.0  | ✓      | 18554.1    | 53.39   | 6.64          |
| express                  | 4.17.3  | ✓      | 11884.4    | 83.57   | 2.12          |
| express-with-middlewares | 4.17.3  | ✓      | 10319.5    | 96.33   | 3.84          |
| express-route-prefix     | 4.17.3  | ✓      | 9984.4     | 99.59   | 3.69          |
| fastify-big-json         | 3.27.4  | ✓      | 9707.0     | 102.54  | 111.67        |
