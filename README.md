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
* __Node:__ `v14.19.1`
* __Run:__ Mon Apr 11 2022 01:50:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 62974.4    | 15.40   | 11.23         |
| 0http                    | 3.1.2   | ✓      | 60360.8    | 16.07   | 10.76         |
| micro                    | 9.3.4   | ✗      | 59859.2    | 16.21   | 10.68         |
| fastify                  | 3.28.0  | ✓      | 58936.8    | 16.48   | 10.51         |
| connect                  | 3.7.0   | ✗      | 56438.4    | 17.23   | 10.06         |
| bare                     | 10.13.0 | ✗      | 56123.2    | 17.33   | 10.01         |
| foxify                   | 0.10.20 | ✓      | 55827.2    | 17.42   | 9.16          |
| server-base-router       | 7.1.32  | ✓      | 53665.6    | 18.13   | 9.57          |
| server-base              | 7.1.32  | ✗      | 53555.2    | 18.18   | 9.55          |
| connect-router           | 1.3.6   | ✓      | 52576.0    | 18.52   | 9.38          |
| restana                  | 4.9.3   | ✓      | 52192.0    | 18.68   | 9.31          |
| micro-route              | 2.5.0   | ✓      | 51535.2    | 18.90   | 9.19          |
| rayo                     | 1.3.10  | ✓      | 51445.6    | 18.94   | 9.18          |
| polka                    | 0.5.2   | ✓      | 50244.0    | 19.40   | 8.96          |
| yeps                     | 1.1.1   | ✗      | 49465.6    | 19.72   | 8.82          |
| koa                      | 2.13.4  | ✗      | 46240.8    | 21.14   | 8.25          |
| trek-engine              | 1.0.5   | ✗      | 44952.8    | 21.75   | 7.37          |
| vapr                     | 0.6.0   | ✓      | 42686.4    | 22.93   | 7.00          |
| trek-router              | 1.2.0   | ✓      | 42421.6    | 23.08   | 6.96          |
| yeps-router              | 1.2.0   | ✓      | 41040.8    | 23.87   | 7.32          |
| koa-router               | 10.1.1  | ✓      | 39285.0    | 24.96   | 7.01          |
| total.js                 | 3.4.13  | ✓      | 38266.6    | 25.63   | 11.71         |
| take-five                | 2.0.0   | ✓      | 38200.2    | 25.68   | 13.73         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37359.4    | 26.26   | 6.66          |
| spirit                   | 0.6.1   | ✗      | 36894.2    | 26.62   | 6.58          |
| spirit-router            | 0.5.0   | ✓      | 36543.2    | 26.87   | 6.52          |
| restify                  | 8.6.1   | ✓      | 35207.0    | 27.90   | 6.35          |
| hapi                     | 20.2.1  | ✓      | 29391.2    | 33.52   | 5.24          |
| microrouter              | 3.1.3   | ✓      | 28275.2    | 34.88   | 5.04          |
| egg.js                   | 2.35.0  | ✓      | 18788.4    | 52.71   | 6.72          |
| express                  | 4.17.3  | ✓      | 12863.6    | 77.18   | 2.29          |
| express-with-middlewares | 4.17.3  | ✓      | 10898.4    | 91.16   | 4.05          |
| express-route-prefix     | 4.17.3  | ✓      | 10814.8    | 91.92   | 4.00          |
| fastify-big-json         | 3.28.0  | ✓      | 10361.4    | 96.01   | 119.20        |
