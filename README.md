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
* __Node:__ `v14.21.1`
* __Run:__ Mon Dec 12 2022 01:59:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 49536.8    | 19.68        | 8.83          |
| foxify                   | 0.10.20 | ✓      | 48840.0    | 19.98        | 8.01          |
| polkadot                 | 1.0.0   | ✗      | 48627.2    | 20.09        | 8.67          |
| bare                     | 10.13.0 | ✗      | 48390.4    | 20.18        | 8.63          |
| micro                    | 9.4.1   | ✗      | 48289.6    | 20.23        | 8.61          |
| connect                  | 3.7.0   | ✗      | 47204.8    | 20.69        | 8.42          |
| yeps                     | 1.1.1   | ✗      | 46732.8    | 20.90        | 8.33          |
| fastify                  | 4.10.2  | ✓      | 46588.0    | 20.97        | 8.35          |
| server-base              | 7.1.32  | ✗      | 46450.4    | 21.04        | 8.28          |
| server-base-router       | 7.1.32  | ✓      | 46094.4    | 21.20        | 8.22          |
| 0http                    | 3.4.2   | ✓      | 45885.0    | 21.31        | 8.18          |
| h3                       | 0.8.6   | ✗      | 44980.8    | 21.76        | 7.38          |
| connect-router           | 1.3.7   | ✓      | 43668.8    | 22.41        | 7.79          |
| h3-router                | 0.8.6   | ✓      | 43584.0    | 22.47        | 7.15          |
| restana                  | 4.9.7   | ✓      | 43130.4    | 22.68        | 7.69          |
| micro-route              | 2.5.0   | ✓      | 42197.8    | 23.20        | 7.53          |
| trek-engine              | 1.0.5   | ✗      | 40745.4    | 24.06        | 6.68          |
| trek-router              | 1.2.0   | ✓      | 40255.4    | 24.34        | 6.60          |
| vapr                     | 0.6.0   | ✓      | 38524.6    | 25.47        | 6.32          |
| yeps-router              | 1.2.0   | ✓      | 38009.0    | 25.82        | 6.78          |
| spirit-router            | 0.5.0   | ✓      | 36115.0    | 27.22        | 6.44          |
| spirit                   | 0.6.1   | ✗      | 35288.6    | 27.87        | 6.29          |
| koa                      | 2.14.1  | ✗      | 35212.2    | 27.91        | 6.28          |
| total.js                 | 3.4.13  | ✓      | 33888.8    | 29.01        | 10.37         |
| take-five                | 2.0.0   | ✓      | 32732.8    | 30.05        | 11.77         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32116.8    | 30.64        | 5.73          |
| restify                  | 8.6.1   | ✓      | 32059.2    | 30.69        | 5.78          |
| koa-router               | 12.0.0  | ✓      | 29207.6    | 33.74        | 5.21          |
| hapi                     | 20.2.2  | ✓      | 25932.0    | 38.06        | 4.62          |
| microrouter              | 3.1.3   | ✓      | 24992.0    | 39.52        | 4.46          |
| trpc-router              | 9.27.4  | ✓      | 22501.2    | 43.93        | 4.98          |
| egg.js                   | 3.8.0   | ✓      | 13146.6    | 75.55        | 4.70          |
| express                  | 4.18.2  | ✓      | 10654.8    | 93.27        | 1.90          |
| express-with-middlewares | 4.18.2  | ✓      | 9054.1     | 109.88       | 3.37          |
| express-route-prefix     | 4.18.2  | ✓      | 8910.9     | 111.68       | 3.30          |
| fastify-big-json         | 4.10.2  | ✓      | 8551.1     | 116.49       | 98.38         |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
