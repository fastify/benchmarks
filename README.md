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
* __Run:__ Mon Jul 18 2022 02:07:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 61830.4    | 15.68   | 11.03         |
| 0http                    | 3.4.1   | ✓      | 61098.4    | 15.87   | 10.90         |
| connect                  | 3.7.0   | ✗      | 60994.4    | 15.90   | 10.88         |
| fastify                  | 4.2.1   | ✓      | 60184.0    | 16.12   | 10.79         |
| polka                    | 0.5.2   | ✓      | 59323.2    | 16.36   | 10.58         |
| rayo                     | 1.3.10  | ✓      | 58755.2    | 16.52   | 10.48         |
| server-base              | 7.1.32  | ✗      | 58233.6    | 16.67   | 10.39         |
| server-base-router       | 7.1.32  | ✓      | 57605.6    | 16.86   | 10.27         |
| foxify                   | 0.10.20 | ✓      | 56547.2    | 17.19   | 9.28          |
| polkadot                 | 1.0.0   | ✗      | 56444.8    | 17.22   | 10.07         |
| restana                  | 4.9.6   | ✓      | 54933.6    | 17.71   | 9.80          |
| connect-router           | 1.3.7   | ✓      | 54293.6    | 17.92   | 9.68          |
| yeps                     | 1.1.1   | ✗      | 50237.6    | 19.41   | 8.96          |
| trek-engine              | 1.0.5   | ✗      | 49687.2    | 19.65   | 8.15          |
| trek-router              | 1.2.0   | ✓      | 46092.8    | 21.20   | 7.56          |
| spirit-router            | 0.5.0   | ✓      | 44532.0    | 21.96   | 7.94          |
| vapr                     | 0.6.0   | ✓      | 42580.8    | 22.98   | 6.98          |
| yeps-router              | 1.2.0   | ✓      | 42239.2    | 23.17   | 7.53          |
| koa                      | 2.13.4  | ✗      | 42188.6    | 23.20   | 7.52          |
| spirit                   | 0.6.1   | ✗      | 41098.4    | 23.84   | 7.33          |
| total.js                 | 3.4.13  | ✓      | 38855.0    | 25.24   | 11.89         |
| take-five                | 2.0.0   | ✓      | 38480.8    | 25.49   | 13.83         |
| restify                  | 8.6.1   | ✓      | 37663.4    | 26.06   | 6.79          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37603.8    | 26.10   | 6.71          |
| koa-router               | 10.1.1  | ✓      | 36863.2    | 26.63   | 6.57          |
| hapi                     | 20.2.2  | ✓      | 29549.4    | 33.34   | 5.27          |
| egg.js                   | 2.36.0  | ✓      | 17986.8    | 55.07   | 6.43          |
| express                  | 4.18.1  | ✓      | 12744.0    | 77.91   | 2.27          |
| express-with-middlewares | 4.18.1  | ✓      | 10733.6    | 92.61   | 3.99          |
| express-route-prefix     | 4.18.1  | ✓      | 10466.8    | 94.94   | 3.87          |
| fastify-big-json         | 4.2.1   | ✓      | 10167.2    | 97.91   | 116.98        |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A     | N/A           |
| micro                    | 9.4.0   | ✗      | N/A        | N/A     | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A     | N/A           |
