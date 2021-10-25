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
* __Node:__ `v14.18.1`
* __Run:__ Mon Oct 25 2021 01:33:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 32515.2    | 30.27   | 5.80          |
| fastify                  | 3.22.1  | ✓      | 32408.6    | 30.36   | 5.78          |
| bare                     | 10.13.0 | ✗      | 32301.2    | 30.47   | 5.76          |
| micro                    | 9.3.4   | ✗      | 31225.8    | 31.53   | 5.57          |
| 0http                    | 3.1.1   | ✓      | 31021.8    | 31.74   | 5.53          |
| foxify                   | 0.10.20 | ✓      | 30865.6    | 31.91   | 5.06          |
| rayo                     | 1.3.6   | ✓      | 29462.4    | 33.44   | 5.25          |
| polka                    | 0.5.2   | ✓      | 29374.8    | 33.55   | 5.24          |
| server-base              | 7.1.29  | ✗      | 29224.0    | 33.72   | 5.21          |
| restana                  | 4.9.1   | ✓      | 26951.6    | 36.60   | 4.81          |
| connect                  | 3.7.0   | ✗      | 26791.1    | 36.83   | 4.78          |
| yeps                     | 1.1.1   | ✗      | 26758.4    | 36.86   | 4.77          |
| micro-route              | 2.5.0   | ✓      | 26536.8    | 37.18   | 4.73          |
| spirit                   | 0.6.1   | ✗      | 25678.8    | 38.47   | 4.58          |
| trek-router              | 1.2.0   | ✓      | 25016.8    | 39.48   | 4.10          |
| trek-engine              | 1.0.5   | ✗      | 24846.9    | 39.75   | 4.08          |
| server-base-router       | 7.1.29  | ✓      | 24654.0    | 40.06   | 4.40          |
| spirit-router            | 0.5.0   | ✓      | 24379.6    | 40.54   | 4.35          |
| yeps-router              | 1.2.0   | ✓      | 24073.6    | 41.02   | 4.29          |
| connect-router           | 1.3.5   | ✓      | 23563.2    | 41.94   | 4.20          |
| koa                      | 2.13.4  | ✗      | 22969.2    | 43.02   | 4.10          |
| vapr                     | 0.6.0   | ✓      | 22928.0    | 43.12   | 3.76          |
| restify                  | 8.6.0   | ✓      | 21414.9    | 46.18   | 3.86          |
| take-five                | 2.0.0   | ✓      | 21352.8    | 46.34   | 7.68          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21282.3    | 46.48   | 3.80          |
| total.js                 | 3.4.11  | ✓      | 20957.1    | 47.22   | 6.42          |
| koa-router               | 10.1.1  | ✓      | 19443.1    | 50.92   | 3.47          |
| hapi                     | 20.2.1  | ✓      | 18915.5    | 52.37   | 3.37          |
| microrouter              | 3.1.3   | ✓      | 16990.7    | 58.34   | 3.03          |
| egg.js                   | 2.31.0  | ✓      | 11337.4    | 87.66   | 3.99          |
| express                  | 4.17.1  | ✓      | 8024.8     | 124.03  | 1.43          |
| fastify-big-json         | 3.22.1  | ✓      | 7169.8     | 139.04  | 82.48         |
| express-route-prefix     | 4.17.1  | ✓      | 6846.0     | 145.34  | 2.53          |
| express-with-middlewares | 4.17.1  | ✓      | 6446.7     | 154.40  | 2.40          |
