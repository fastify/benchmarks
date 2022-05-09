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
* __Run:__ Mon May 09 2022 01:58:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.2   | ✓      | 59675.2    | 16.28   | 10.64         |
| bare                     | 10.13.0 | ✗      | 58519.2    | 16.61   | 10.44         |
| yeps                     | 1.1.1   | ✗      | 57608.0    | 16.86   | 10.27         |
| polkadot                 | 1.0.0   | ✗      | 56919.2    | 17.08   | 10.15         |
| foxify                   | 0.10.20 | ✓      | 56206.4    | 17.30   | 9.22          |
| connect                  | 3.7.0   | ✗      | 55456.0    | 17.54   | 9.89          |
| fastify                  | 3.29.0  | ✓      | 55197.6    | 17.63   | 9.84          |
| polka                    | 0.5.2   | ✓      | 54932.8    | 17.72   | 9.80          |
| rayo                     | 1.3.10  | ✓      | 54848.8    | 17.73   | 9.78          |
| restana                  | 4.9.4   | ✓      | 54118.4    | 17.99   | 9.65          |
| server-base-router       | 7.1.32  | ✓      | 53737.6    | 18.11   | 9.58          |
| server-base              | 7.1.32  | ✗      | 53369.6    | 18.24   | 9.52          |
| micro                    | 9.3.4   | ✗      | 50819.5    | 19.20   | 9.06          |
| connect-router           | 1.3.7   | ✓      | 47329.6    | 20.64   | 8.44          |
| micro-route              | 2.5.0   | ✓      | 46601.6    | 20.96   | 8.31          |
| vapr                     | 0.6.0   | ✓      | 46100.0    | 21.20   | 7.56          |
| trek-engine              | 1.0.5   | ✗      | 45835.2    | 21.32   | 7.52          |
| trek-router              | 1.2.0   | ✓      | 45199.2    | 21.63   | 7.41          |
| yeps-router              | 1.2.0   | ✓      | 40226.4    | 24.36   | 7.17          |
| koa                      | 2.13.4  | ✗      | 39759.8    | 24.65   | 7.09          |
| total.js                 | 3.4.13  | ✓      | 37954.6    | 25.85   | 11.62         |
| spirit-router            | 0.5.0   | ✓      | 37097.4    | 26.48   | 6.62          |
| take-five                | 2.0.0   | ✓      | 36383.8    | 26.99   | 13.08         |
| restify                  | 8.6.1   | ✓      | 34654.2    | 28.36   | 6.25          |
| koa-router               | 10.1.1  | ✓      | 34074.6    | 28.87   | 6.08          |
| spirit                   | 0.6.1   | ✗      | 31838.0    | 31.09   | 5.68          |
| hapi                     | 20.2.2  | ✓      | 29098.4    | 33.87   | 5.19          |
| microrouter              | 3.1.3   | ✓      | 28267.6    | 34.87   | 5.04          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 26161.9    | 37.74   | 4.67          |
| egg.js                   | 2.35.0  | ✓      | 18577.9    | 53.33   | 6.64          |
| express                  | 4.18.1  | ✓      | 11833.2    | 83.92   | 2.11          |
| express-with-middlewares | 4.18.1  | ✓      | 10404.0    | 95.53   | 3.87          |
| express-route-prefix     | 4.18.1  | ✓      | 9823.8     | 101.21  | 3.63          |
| fastify-big-json         | 3.29.0  | ✓      | 9576.0     | 103.93  | 110.16        |
