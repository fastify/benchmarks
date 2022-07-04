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
* __Run:__ Mon Jul 04 2022 02:28:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 66852.8    | 14.49   | 11.92         |
| foxify                   | 0.10.20 | ✓      | 63103.2    | 15.36   | 10.35         |
| micro                    | 9.3.4   | ✗      | 57528.8    | 16.88   | 10.26         |
| connect-router           | 1.3.7   | ✓      | 56910.4    | 17.08   | 10.15         |
| 0http                    | 3.4.1   | ✓      | 56733.6    | 17.12   | 10.12         |
| bare                     | 10.13.0 | ✗      | 56231.2    | 17.30   | 10.03         |
| server-base              | 7.1.32  | ✗      | 55120.0    | 17.65   | 9.83          |
| polka                    | 0.5.2   | ✓      | 55054.4    | 17.66   | 9.82          |
| fastify                  | 4.2.0   | ✓      | 53976.0    | 18.03   | 9.68          |
| connect                  | 3.7.0   | ✗      | 53496.8    | 18.20   | 9.54          |
| rayo                     | 1.3.10  | ✓      | 53243.2    | 18.30   | 9.49          |
| restana                  | 4.9.6   | ✓      | 53177.6    | 18.30   | 9.48          |
| server-base-router       | 7.1.32  | ✓      | 50967.2    | 19.12   | 9.09          |
| yeps                     | 1.1.1   | ✗      | 49845.6    | 19.56   | 8.89          |
| micro-route              | 2.5.0   | ✓      | 47440.0    | 20.58   | 8.46          |
| trek-engine              | 1.0.5   | ✗      | 44665.6    | 21.90   | 7.33          |
| vapr                     | 0.6.0   | ✓      | 44175.2    | 22.15   | 7.25          |
| trek-router              | 1.2.0   | ✓      | 42810.4    | 22.87   | 7.02          |
| spirit                   | 0.6.1   | ✗      | 41424.0    | 23.65   | 7.39          |
| yeps-router              | 1.2.0   | ✓      | 40953.6    | 23.92   | 7.30          |
| spirit-router            | 0.5.0   | ✓      | 39583.2    | 24.77   | 7.06          |
| koa                      | 2.13.4  | ✗      | 39045.6    | 25.11   | 6.96          |
| total.js                 | 3.4.13  | ✓      | 37325.8    | 26.29   | 11.43         |
| take-five                | 2.0.0   | ✓      | 37100.6    | 26.45   | 13.34         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35975.0    | 27.30   | 6.42          |
| restify                  | 8.6.1   | ✓      | 35436.2    | 27.72   | 6.39          |
| koa-router               | 10.1.1  | ✓      | 34983.8    | 28.09   | 6.24          |
| microrouter              | 3.1.3   | ✓      | 28852.4    | 34.16   | 5.14          |
| hapi                     | 20.2.2  | ✓      | 28684.4    | 34.36   | 5.12          |
| egg.js                   | 2.36.0  | ✓      | 18427.9    | 53.75   | 6.59          |
| express                  | 4.18.1  | ✓      | 12267.0    | 80.96   | 2.19          |
| fastify-big-json         | 4.2.0   | ✓      | 10660.4    | 93.31   | 122.66        |
| express-with-middlewares | 4.18.1  | ✓      | 10640.4    | 93.41   | 3.96          |
| express-route-prefix     | 4.18.1  | ✓      | 10568.5    | 94.09   | 3.91          |
