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
* __Node:__ `v18.18.0`
* __Run:__ Mon Oct 09 2023 01:38:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| spirit                   | 0.6.1   | ✗      | 24812.8    | 39.89        | 4.42          |
| polka                    | 0.5.2   | ✓      | 24653.2    | 40.06        | 4.40          |
| polkadot                 | 1.0.0   | ✗      | 24124.0    | 40.98        | 4.30          |
| spirit-router            | 0.5.0   | ✓      | 23888.0    | 41.44        | 4.26          |
| bare                     | 10.13.0 | ✗      | 23496.3    | 42.08        | 4.19          |
| fastify                  | 4.23.2  | ✓      | 23384.4    | 42.27        | 4.19          |
| connect                  | 3.7.0   | ✗      | 23182.4    | 42.67        | 4.13          |
| server-base-router       | 7.1.32  | ✓      | 22408.8    | 44.12        | 4.00          |
| connect-router           | 1.3.8   | ✓      | 22066.3    | 44.80        | 3.94          |
| server-base              | 7.1.32  | ✗      | 22018.4    | 44.91        | 3.93          |
| yeps                     | 1.1.1   | ✗      | 21020.0    | 47.06        | 3.75          |
| vapr                     | 0.6.0   | ✓      | 20590.0    | 48.05        | 3.38          |
| koa                      | 2.14.2  | ✗      | 19664.7    | 50.38        | 3.51          |
| restana                  | 4.9.7   | ✓      | 19474.7    | 50.83        | 3.47          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19170.1    | 51.65        | 3.42          |
| yeps-router              | 1.2.0   | ✓      | 19070.3    | 51.93        | 3.40          |
| h3-router                | 1.8.2   | ✓      | 18480.1    | 53.61        | 3.03          |
| restify                  | 11.1.0  | ✓      | 18432.5    | 53.74        | 3.32          |
| take-five                | 2.0.0   | ✓      | 18265.3    | 54.23        | 6.57          |
| 0http                    | 3.5.2   | ✓      | 18246.5    | 54.30        | 3.25          |
| koa-router               | 12.0.0  | ✓      | 17998.1    | 55.05        | 3.21          |
| h3                       | 1.8.2   | ✗      | 17740.6    | 55.87        | 2.91          |
| hapi                     | 21.3.2  | ✓      | 17225.5    | 57.57        | 3.07          |
| fastify-big-json         | 4.23.2  | ✓      | 6649.9     | 149.87       | 76.51         |
| express                  | 4.18.2  | ✓      | 5954.2     | 167.17       | 1.06          |
| express-with-middlewares | 4.18.2  | ✓      | 5319.0     | 187.20       | 1.98          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.40.0 | ✓      | N/A        | N/A          | N/A           |
