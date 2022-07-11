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
* __Run:__ Mon Jul 11 2022 02:10:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 64229.6    | 15.09   | 11.46         |
| bare                     | 10.13.0 | ✗      | 62975.2    | 15.38   | 11.23         |
| polka                    | 0.5.2   | ✓      | 62238.4    | 15.57   | 11.10         |
| 0http                    | 3.4.1   | ✓      | 61882.4    | 15.64   | 11.04         |
| foxify                   | 0.10.20 | ✓      | 61646.4    | 15.72   | 10.11         |
| micro                    | 9.3.4   | ✗      | 59773.6    | 16.24   | 10.66         |
| fastify                  | 4.2.0   | ✓      | 59203.2    | 16.39   | 10.61         |
| rayo                     | 1.3.10  | ✓      | 59012.0    | 16.44   | 10.52         |
| connect                  | 3.7.0   | ✗      | 58606.8    | 16.58   | 10.45         |
| server-base              | 7.1.32  | ✗      | 58420.0    | 16.62   | 10.42         |
| server-base-router       | 7.1.32  | ✓      | 57246.4    | 16.96   | 10.21         |
| yeps                     | 1.1.1   | ✗      | 56546.4    | 17.19   | 10.08         |
| restana                  | 4.9.6   | ✓      | 54928.8    | 17.72   | 9.80          |
| connect-router           | 1.3.7   | ✓      | 54654.4    | 17.80   | 9.75          |
| micro-route              | 2.5.0   | ✓      | 54073.6    | 17.99   | 9.64          |
| trek-engine              | 1.0.5   | ✗      | 51240.0    | 19.00   | 8.40          |
| trek-router              | 1.2.0   | ✓      | 50485.6    | 19.31   | 8.28          |
| vapr                     | 0.6.0   | ✓      | 48177.6    | 20.26   | 7.90          |
| spirit                   | 0.6.1   | ✗      | 46748.0    | 20.90   | 8.34          |
| yeps-router              | 1.2.0   | ✓      | 46236.0    | 21.14   | 8.25          |
| spirit-router            | 0.5.0   | ✓      | 45702.4    | 21.38   | 8.15          |
| koa                      | 2.13.4  | ✗      | 44665.6    | 21.89   | 7.97          |
| total.js                 | 3.4.13  | ✓      | 42548.0    | 23.00   | 13.03         |
| take-five                | 2.0.0   | ✓      | 42304.8    | 23.13   | 15.21         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 41691.2    | 23.48   | 7.43          |
| restify                  | 8.6.1   | ✓      | 40426.4    | 24.23   | 7.29          |
| koa-router               | 10.1.1  | ✓      | 40395.2    | 24.25   | 7.20          |
| hapi                     | 20.2.2  | ✓      | 34915.4    | 28.13   | 6.23          |
| microrouter              | 3.1.3   | ✓      | 32630.4    | 30.13   | 5.82          |
| egg.js                   | 2.36.0  | ✓      | 20063.6    | 49.31   | 7.18          |
| express                  | 4.18.1  | ✓      | 13735.4    | 72.26   | 2.45          |
| fastify-big-json         | 4.2.0   | ✓      | 12576.0    | 79.04   | 144.68        |
| express-with-middlewares | 4.18.1  | ✓      | 12001.6    | 82.74   | 4.46          |
| express-route-prefix     | 4.18.1  | ✓      | 11644.6    | 85.33   | 4.31          |
