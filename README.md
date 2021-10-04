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
* __Node:__ `v14.18.0`
* __Run:__ Mon Oct 04 2021 01:35:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 51755.2    | 18.84   | 9.23          |
| bare                     | 10.13.0 | ✗      | 50570.4    | 19.28   | 9.02          |
| polka                    | 0.5.2   | ✓      | 50431.2    | 19.33   | 8.99          |
| micro                    | 9.3.4   | ✗      | 50423.2    | 19.33   | 8.99          |
| 0http                    | 3.1.1   | ✓      | 50336.0    | 19.38   | 8.98          |
| foxify                   | 0.10.20 | ✓      | 50175.2    | 19.43   | 8.23          |
| fastify                  | 3.22.0  | ✓      | 48927.2    | 19.95   | 8.72          |
| rayo                     | 1.3.6   | ✓      | 47296.0    | 20.65   | 8.43          |
| connect                  | 3.7.0   | ✗      | 46546.4    | 20.99   | 8.30          |
| server-base              | 7.1.29  | ✗      | 46197.6    | 21.15   | 8.24          |
| server-base-router       | 7.1.29  | ✓      | 45828.8    | 21.32   | 8.17          |
| restana                  | 4.9.1   | ✓      | 43740.8    | 22.36   | 7.80          |
| yeps                     | 1.1.1   | ✗      | 43616.2    | 22.43   | 7.78          |
| connect-router           | 1.3.5   | ✓      | 42900.4    | 22.81   | 7.65          |
| micro-route              | 2.5.0   | ✓      | 40987.4    | 23.90   | 7.31          |
| trek-router              | 1.2.0   | ✓      | 40479.0    | 24.21   | 6.64          |
| trek-engine              | 1.0.5   | ✗      | 39892.2    | 24.58   | 6.54          |
| vapr                     | 0.6.0   | ✓      | 38230.2    | 25.65   | 6.27          |
| koa                      | 2.13.3  | ✗      | 37649.0    | 26.07   | 6.71          |
| yeps-router              | 1.2.0   | ✓      | 36857.4    | 26.64   | 6.57          |
| spirit                   | 0.6.1   | ✗      | 34835.8    | 28.22   | 6.21          |
| spirit-router            | 0.5.0   | ✓      | 33684.4    | 29.21   | 6.01          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33651.0    | 29.21   | 6.00          |
| take-five                | 2.0.0   | ✓      | 33196.4    | 29.62   | 11.93         |
| koa-router               | 10.1.1  | ✓      | 32419.2    | 30.35   | 5.78          |
| total.js                 | 3.4.10  | ✓      | 32039.8    | 30.73   | 9.81          |
| restify                  | 8.6.0   | ✓      | 31566.4    | 31.19   | 5.69          |
| hapi                     | 20.2.0  | ✓      | 26289.6    | 37.53   | 4.69          |
| microrouter              | 3.1.3   | ✓      | 24034.8    | 41.10   | 4.29          |
| egg.js                   | 2.30.0  | ✓      | 16698.1    | 59.37   | 5.88          |
| express                  | 4.17.1  | ✓      | 10701.2    | 92.87   | 1.91          |
| express-with-middlewares | 4.17.1  | ✓      | 8804.3     | 112.96  | 3.27          |
| express-route-prefix     | 4.17.1  | ✓      | 8773.0     | 113.47  | 3.25          |
| fastify-big-json         | 3.22.0  | ✓      | 8622.5     | 115.41  | 99.19         |
