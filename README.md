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
* __Node:__ `v14.17.0`
* __Run:__ Fri May 28 2021 14:49:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 56016.0    | 17.39   | 9.99          |
| foxify                   | 0.10.20 | ✓      | 54480.0    | 17.85   | 8.94          |
| polka                    | 0.5.2   | ✓      | 54480.0    | 17.88   | 9.72          |
| bare                     | 10.13.0 | ✗      | 53939.2    | 18.05   | 9.62          |
| connect                  | 3.7.0   | ✗      | 53207.2    | 18.31   | 9.49          |
| server-base              | 7.1.27  | ✗      | 52365.6    | 18.62   | 9.34          |
| rayo                     | 1.3.6   | ✓      | 51764.0    | 18.82   | 9.23          |
| server-base-router       | 7.1.27  | ✓      | 51497.6    | 18.93   | 9.18          |
| micro                    | 9.3.4   | ✗      | 51440.8    | 18.94   | 9.17          |
| fastify                  | 3.16.2  | ✓      | 50921.6    | 19.15   | 9.08          |
| 0http                    | 3.1.1   | ✓      | 50453.6    | 19.34   | 9.00          |
| connect-router           | 1.3.5   | ✓      | 48955.2    | 19.93   | 8.73          |
| restana                  | 4.9.1   | ✓      | 48563.2    | 20.11   | 8.66          |
| micro-route              | 2.5.0   | ✓      | 48315.2    | 20.20   | 8.62          |
| yeps                     | 1.1.1   | ✗      | 47277.6    | 20.66   | 8.43          |
| trek-engine              | 1.0.5   | ✗      | 46219.4    | 21.15   | 7.58          |
| trek-router              | 1.2.0   | ✓      | 45374.2    | 21.54   | 7.44          |
| vapr                     | 0.6.0   | ✓      | 41598.6    | 23.55   | 6.82          |
| spirit                   | 0.6.1   | ✗      | 40364.0    | 24.33   | 7.20          |
| yeps-router              | 1.2.0   | ✓      | 39197.8    | 25.01   | 6.99          |
| koa                      | 2.13.1  | ✗      | 39176.2    | 25.02   | 6.99          |
| spirit-router            | 0.5.0   | ✓      | 37292.6    | 26.34   | 6.65          |
| take-five                | 2.0.0   | ✓      | 36080.2    | 27.22   | 12.97         |
| total.js                 | 3.4.8   | ✓      | 35531.4    | 27.65   | 10.88         |
| restify                  | 8.5.1   | ✓      | 34049.2    | 28.88   | 6.14          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33632.8    | 29.23   | 6.00          |
| koa-router               | 10.0.0  | ✓      | 33475.4    | 29.38   | 5.97          |
| hapi                     | 20.1.3  | ✓      | 26580.8    | 37.12   | 4.74          |
| microrouter              | 3.1.3   | ✓      | 25701.2    | 38.40   | 4.58          |
| egg.js                   | 2.29.4  | ✓      | 17236.9    | 57.49   | 6.06          |
| express                  | 4.17.1  | ✓      | 10384.9    | 95.71   | 1.85          |
| express-with-middlewares | 4.17.1  | ✓      | 9312.6     | 106.77  | 3.46          |
| express-route-prefix     | 4.17.1  | ✓      | 9155.6     | 108.62  | 3.39          |
| fastify-big-json         | 3.16.2  | ✓      | 8569.8     | 116.19  | 98.60         |
