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
* __Run:__ Mon May 02 2022 02:05:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 58739.2    | 16.53   | 10.48         |
| 0http                    | 3.1.2   | ✓      | 58290.4    | 16.66   | 10.39         |
| fastify                  | 3.29.0  | ✓      | 58063.2    | 16.72   | 10.36         |
| foxify                   | 0.10.20 | ✓      | 57426.4    | 16.91   | 9.42          |
| polkadot                 | 1.0.0   | ✗      | 56608.8    | 17.16   | 10.10         |
| micro                    | 9.3.4   | ✗      | 56329.6    | 17.26   | 10.05         |
| rayo                     | 1.3.10  | ✓      | 56184.8    | 17.31   | 10.02         |
| polka                    | 0.5.2   | ✓      | 55956.0    | 17.37   | 9.98          |
| connect                  | 3.7.0   | ✗      | 55822.4    | 17.42   | 9.96          |
| server-base-router       | 7.1.32  | ✓      | 55042.4    | 17.67   | 9.82          |
| server-base              | 7.1.32  | ✗      | 52364.8    | 18.60   | 9.34          |
| restana                  | 4.9.4   | ✓      | 51297.6    | 18.99   | 9.15          |
| yeps                     | 1.1.1   | ✗      | 50738.4    | 19.22   | 9.05          |
| micro-route              | 2.5.0   | ✓      | 49920.8    | 19.54   | 8.90          |
| connect-router           | 1.3.7   | ✓      | 49043.2    | 19.89   | 8.75          |
| trek-engine              | 1.0.5   | ✗      | 46771.2    | 20.89   | 7.67          |
| trek-router              | 1.2.0   | ✓      | 45053.6    | 21.71   | 7.39          |
| vapr                     | 0.6.0   | ✓      | 44099.2    | 22.19   | 7.23          |
| yeps-router              | 1.2.0   | ✓      | 41052.0    | 23.86   | 7.32          |
| koa                      | 2.13.4  | ✗      | 39427.4    | 24.87   | 7.03          |
| spirit                   | 0.6.1   | ✗      | 38735.2    | 25.32   | 6.91          |
| total.js                 | 3.4.13  | ✓      | 38720.6    | 25.33   | 11.85         |
| take-five                | 2.0.0   | ✓      | 37523.0    | 26.15   | 13.49         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37229.8    | 26.36   | 6.64          |
| spirit-router            | 0.5.0   | ✓      | 36394.6    | 26.98   | 6.49          |
| koa-router               | 10.1.1  | ✓      | 36187.0    | 27.13   | 6.45          |
| restify                  | 8.6.1   | ✓      | 36038.6    | 27.24   | 6.50          |
| hapi                     | 20.2.2  | ✓      | 29560.8    | 33.33   | 5.27          |
| microrouter              | 3.1.3   | ✓      | 28472.4    | 34.62   | 5.08          |
| egg.js                   | 2.35.0  | ✓      | 18431.5    | 53.76   | 6.59          |
| express                  | 4.18.1  | ✓      | 12050.4    | 82.43   | 2.15          |
| express-with-middlewares | 4.18.1  | ✓      | 10307.8    | 96.45   | 3.83          |
| fastify-big-json         | 3.29.0  | ✓      | 9956.1     | 99.96   | 114.53        |
| express-route-prefix     | 4.18.1  | ✓      | 9877.2     | 100.67  | 3.65          |
