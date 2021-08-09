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
* __Node:__ `v14.17.4`
* __Run:__ Mon Aug 09 2021 19:10:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 36169.4    | 27.16   | 6.45          |
| micro                    | 9.3.4   | ✗      | 36049.4    | 27.24   | 6.43          |
| 0http                    | 3.1.1   | ✓      | 36004.6    | 27.28   | 6.42          |
| polkadot                 | 1.0.0   | ✗      | 35901.8    | 27.37   | 6.40          |
| fastify                  | 3.20.1  | ✓      | 34670.4    | 28.35   | 6.18          |
| rayo                     | 1.3.6   | ✓      | 34636.4    | 28.38   | 6.18          |
| foxify                   | 0.10.20 | ✓      | 34507.2    | 28.48   | 5.66          |
| polka                    | 0.5.2   | ✓      | 33200.4    | 29.62   | 5.92          |
| spirit-router            | 0.5.0   | ✓      | 33160.6    | 29.71   | 5.91          |
| server-base-router       | 7.1.27  | ✓      | 32801.0    | 29.99   | 5.85          |
| connect                  | 3.7.0   | ✗      | 32610.4    | 30.18   | 5.82          |
| yeps                     | 1.1.1   | ✗      | 32455.4    | 30.31   | 5.79          |
| server-base              | 7.1.27  | ✗      | 31612.2    | 31.13   | 5.64          |
| restana                  | 4.9.1   | ✓      | 30693.2    | 32.08   | 5.47          |
| spirit                   | 0.6.1   | ✗      | 30434.8    | 32.42   | 5.43          |
| trek-router              | 1.2.0   | ✓      | 30330.8    | 32.47   | 4.98          |
| micro-route              | 2.5.0   | ✓      | 29602.8    | 33.28   | 5.28          |
| connect-router           | 1.3.5   | ✓      | 28988.4    | 34.00   | 5.17          |
| trek-engine              | 1.0.5   | ✗      | 28973.2    | 34.01   | 4.75          |
| yeps-router              | 1.2.0   | ✓      | 27943.6    | 35.29   | 4.98          |
| vapr                     | 0.6.0   | ✓      | 24843.2    | 39.76   | 4.08          |
| koa                      | 2.13.1  | ✗      | 24788.8    | 39.85   | 4.42          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 24638.8    | 40.09   | 4.39          |
| restify                  | 8.5.1   | ✓      | 22600.0    | 43.75   | 4.07          |
| take-five                | 2.0.0   | ✓      | 22216.8    | 44.51   | 7.99          |
| koa-router               | 10.0.0  | ✓      | 22006.4    | 44.96   | 3.92          |
| total.js                 | 3.4.9   | ✓      | 20704.8    | 47.78   | 6.34          |
| hapi                     | 20.1.5  | ✓      | 19855.5    | 49.86   | 3.54          |
| microrouter              | 3.1.3   | ✓      | 19159.1    | 51.69   | 3.42          |
| egg.js                   | 2.30.0  | ✓      | 12827.2    | 77.41   | 4.51          |
| express                  | 4.17.1  | ✓      | 8120.3     | 122.56  | 1.45          |
| express-route-prefix     | 4.17.1  | ✓      | 7146.7     | 139.28  | 2.64          |
| express-with-middlewares | 4.17.1  | ✓      | 6914.3     | 143.93  | 2.57          |
| fastify-big-json         | 3.20.1  | ✓      | 2449.4     | 405.96  | 28.17         |
