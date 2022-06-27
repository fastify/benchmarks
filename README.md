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
* __Run:__ Mon Jun 27 2022 02:12:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 58925.6    | 16.49   | 10.51         |
| fastify                  | 4.1.0   | ✓      | 58422.4    | 16.62   | 10.47         |
| polkadot                 | 1.0.0   | ✗      | 57789.6    | 16.82   | 10.31         |
| foxify                   | 0.10.20 | ✓      | 57784.0    | 16.81   | 9.48          |
| connect                  | 3.7.0   | ✗      | 57423.2    | 16.92   | 10.24         |
| polka                    | 0.5.2   | ✓      | 57412.8    | 16.93   | 10.24         |
| micro                    | 9.3.4   | ✗      | 57107.2    | 17.01   | 10.18         |
| rayo                     | 1.3.10  | ✓      | 56047.2    | 17.35   | 10.00         |
| server-base-router       | 7.1.32  | ✓      | 55253.6    | 17.60   | 9.85          |
| server-base              | 7.1.32  | ✗      | 54542.4    | 17.84   | 9.73          |
| 0http                    | 3.4.1   | ✓      | 53925.6    | 18.06   | 9.62          |
| yeps                     | 1.1.1   | ✗      | 53467.2    | 18.21   | 9.54          |
| connect-router           | 1.3.7   | ✓      | 50530.4    | 19.29   | 9.01          |
| restana                  | 4.9.6   | ✓      | 50492.8    | 19.29   | 9.00          |
| trek-engine              | 1.0.5   | ✗      | 48605.6    | 20.08   | 7.97          |
| micro-route              | 2.5.0   | ✓      | 47216.0    | 20.68   | 8.42          |
| trek-router              | 1.2.0   | ✓      | 46171.2    | 21.16   | 7.57          |
| vapr                     | 0.6.0   | ✓      | 45040.0    | 21.70   | 7.39          |
| yeps-router              | 1.2.0   | ✓      | 42132.8    | 23.25   | 7.51          |
| koa                      | 2.13.4  | ✗      | 41309.6    | 23.71   | 7.37          |
| spirit                   | 0.6.1   | ✗      | 39576.0    | 24.79   | 7.06          |
| total.js                 | 3.4.13  | ✓      | 38924.0    | 25.20   | 11.92         |
| take-five                | 2.0.0   | ✓      | 38435.0    | 25.53   | 13.82         |
| spirit-router            | 0.5.0   | ✓      | 38428.0    | 25.53   | 6.85          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37543.4    | 26.15   | 6.69          |
| restify                  | 8.6.1   | ✓      | 36242.2    | 27.08   | 6.53          |
| koa-router               | 10.1.1  | ✓      | 35451.8    | 27.71   | 6.32          |
| hapi                     | 20.2.2  | ✓      | 30468.4    | 32.32   | 5.43          |
| microrouter              | 3.1.3   | ✓      | 29073.2    | 33.90   | 5.18          |
| egg.js                   | 2.36.0  | ✓      | 18935.5    | 52.30   | 6.77          |
| express                  | 4.18.1  | ✓      | 12047.6    | 82.43   | 2.15          |
| express-with-middlewares | 4.18.1  | ✓      | 10402.8    | 95.55   | 3.87          |
| fastify-big-json         | 4.1.0   | ✓      | 10344.8    | 96.16   | 119.02        |
| express-route-prefix     | 4.18.1  | ✓      | 10203.3    | 97.49   | 3.78          |
