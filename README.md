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
* __Node:__ `v14.17.4`
* __Run:__ Mon Aug 16 2021 13:20:55 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.20.2  | ✓      | 67674.0    | 14.27   | 12.07         |
| bare                     | 10.13.0 | ✗      | 65122.4    | 14.86   | 11.61         |
| 0http                    | 3.1.1   | ✓      | 64372.0    | 15.04   | 11.48         |
| connect                  | 3.7.0   | ✗      | 61097.6    | 15.89   | 10.90         |
| connect-router           | 1.3.5   | ✓      | 60469.6    | 16.05   | 10.78         |
| foxify                   | 0.10.20 | ✓      | 58816.0    | 16.51   | 9.65          |
| micro                    | 9.3.4   | ✗      | 58512.0    | 16.60   | 10.44         |
| polkadot                 | 1.0.0   | ✗      | 57696.0    | 16.84   | 10.29         |
| polka                    | 0.5.2   | ✓      | 56787.2    | 17.11   | 10.13         |
| rayo                     | 1.3.6   | ✓      | 56360.8    | 17.25   | 10.05         |
| server-base-router       | 7.1.27  | ✓      | 55424.0    | 17.54   | 9.88          |
| server-base              | 7.1.27  | ✗      | 55099.2    | 17.65   | 9.83          |
| yeps                     | 1.1.1   | ✗      | 53431.2    | 18.22   | 9.53          |
| micro-route              | 2.5.0   | ✓      | 51448.0    | 18.94   | 9.18          |
| restana                  | 4.9.1   | ✓      | 51135.2    | 19.06   | 9.12          |
| trek-engine              | 1.0.5   | ✗      | 49479.2    | 19.71   | 8.12          |
| trek-router              | 1.2.0   | ✓      | 48526.4    | 20.11   | 7.96          |
| vapr                     | 0.6.0   | ✓      | 47128.8    | 20.72   | 7.73          |
| spirit-router            | 0.5.0   | ✓      | 45378.4    | 21.55   | 8.09          |
| yeps-router              | 1.2.0   | ✓      | 43315.2    | 22.60   | 7.73          |
| spirit                   | 0.6.1   | ✗      | 41810.4    | 23.43   | 7.46          |
| koa                      | 2.13.1  | ✗      | 41666.2    | 23.50   | 7.43          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 39612.0    | 24.76   | 7.07          |
| total.js                 | 3.4.9   | ✓      | 39042.4    | 25.12   | 11.95         |
| take-five                | 2.0.0   | ✓      | 38170.2    | 25.70   | 13.72         |
| koa-router               | 10.0.0  | ✓      | 37803.0    | 25.95   | 6.74          |
| restify                  | 8.5.1   | ✓      | 37394.6    | 26.25   | 6.74          |
| hapi                     | 20.1.5  | ✓      | 30623.6    | 32.15   | 5.46          |
| microrouter              | 3.1.3   | ✓      | 29930.8    | 32.90   | 5.34          |
| egg.js                   | 2.30.0  | ✓      | 19876.9    | 49.79   | 6.99          |
| express                  | 4.17.1  | ✓      | 13050.4    | 76.11   | 2.33          |
| express-with-middlewares | 4.17.1  | ✓      | 11611.2    | 85.55   | 4.32          |
| express-route-prefix     | 4.17.1  | ✓      | 10464.3    | 94.95   | 3.87          |
| fastify-big-json         | 3.20.2  | ✓      | 3296.3     | 301.81  | 37.92         |
