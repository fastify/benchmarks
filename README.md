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
* __Node:__ `v14.17.1`
* __Run:__ Thu Jul 01 2021 01:26:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 57672.8    | 16.87   | 10.29         |
| fastify                  | 3.18.1  | ✓      | 57245.6    | 17.00   | 10.21         |
| polkadot                 | 1.0.0   | ✗      | 57077.6    | 17.06   | 10.18         |
| polka                    | 0.5.2   | ✓      | 55780.8    | 17.43   | 9.95          |
| foxify                   | 0.10.20 | ✓      | 55732.0    | 17.45   | 9.14          |
| connect                  | 3.7.0   | ✗      | 55147.2    | 17.63   | 9.83          |
| micro                    | 9.3.4   | ✗      | 54076.0    | 18.01   | 9.64          |
| server-base-router       | 7.1.27  | ✓      | 53851.2    | 18.09   | 9.60          |
| server-base              | 7.1.27  | ✗      | 53698.4    | 18.13   | 9.58          |
| rayo                     | 1.3.6   | ✓      | 53530.4    | 18.19   | 9.55          |
| 0http                    | 3.1.1   | ✓      | 53456.0    | 18.22   | 9.53          |
| yeps                     | 1.1.1   | ✗      | 51333.6    | 18.98   | 9.15          |
| connect-router           | 1.3.5   | ✓      | 50381.6    | 19.35   | 8.98          |
| micro-route              | 2.5.0   | ✓      | 49631.2    | 19.66   | 8.85          |
| restana                  | 4.9.1   | ✓      | 49460.0    | 19.72   | 8.82          |
| trek-engine              | 1.0.5   | ✗      | 47945.6    | 20.37   | 7.86          |
| trek-router              | 1.2.0   | ✓      | 46361.4    | 21.07   | 7.60          |
| vapr                     | 0.6.0   | ✓      | 45674.4    | 21.41   | 7.49          |
| koa                      | 2.13.1  | ✗      | 42086.4    | 23.26   | 7.51          |
| spirit                   | 0.6.1   | ✗      | 41958.4    | 23.35   | 7.48          |
| yeps-router              | 1.2.0   | ✓      | 41285.6    | 23.72   | 7.36          |
| spirit-router            | 0.5.0   | ✓      | 40378.4    | 24.29   | 7.20          |
| total.js                 | 3.4.9   | ✓      | 37569.4    | 26.11   | 11.50         |
| koa-router               | 10.0.0  | ✓      | 36747.4    | 26.72   | 6.55          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36497.0    | 26.90   | 6.51          |
| take-five                | 2.0.0   | ✓      | 35863.8    | 27.38   | 12.89         |
| restify                  | 8.5.1   | ✓      | 33815.8    | 29.07   | 6.10          |
| hapi                     | 20.1.5  | ✓      | 28848.8    | 34.17   | 5.14          |
| microrouter              | 3.1.3   | ✓      | 27537.6    | 35.80   | 4.91          |
| egg.js                   | 2.29.4  | ✓      | 18048.1    | 54.92   | 6.35          |
| express                  | 4.17.1  | ✓      | 10998.6    | 90.36   | 1.96          |
| express-with-middlewares | 4.17.1  | ✓      | 9406.3     | 105.73  | 3.50          |
| fastify-big-json         | 3.18.1  | ✓      | 9036.8     | 110.14  | 103.96        |
| express-route-prefix     | 4.17.1  | ✓      | 8866.7     | 112.18  | 3.28          |
