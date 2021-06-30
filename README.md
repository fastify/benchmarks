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
* __Run:__ Wed Jun 30 2021 18:58:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 56428.8    | 17.26   | 10.06         |
| bare                     | 10.13.0 | ✗      | 55757.6    | 17.47   | 9.94          |
| polka                    | 0.5.2   | ✓      | 54321.6    | 17.92   | 9.69          |
| connect                  | 3.7.0   | ✗      | 53956.8    | 18.04   | 9.62          |
| fastify                  | 3.18.1  | ✓      | 53814.4    | 18.09   | 9.60          |
| foxify                   | 0.10.20 | ✓      | 53662.4    | 18.14   | 8.80          |
| 0http                    | 3.1.1   | ✓      | 52307.2    | 18.63   | 9.33          |
| micro                    | 9.3.4   | ✗      | 52223.2    | 18.69   | 9.31          |
| server-base-router       | 7.1.27  | ✓      | 52119.2    | 18.73   | 9.29          |
| rayo                     | 1.3.6   | ✓      | 51595.2    | 18.92   | 9.20          |
| server-base              | 7.1.27  | ✗      | 51470.4    | 18.96   | 9.18          |
| connect-router           | 1.3.5   | ✓      | 48803.2    | 20.03   | 8.70          |
| micro-route              | 2.5.0   | ✓      | 48463.2    | 20.18   | 8.64          |
| yeps                     | 1.1.1   | ✗      | 47999.2    | 20.37   | 8.56          |
| restana                  | 4.9.1   | ✓      | 47484.8    | 20.57   | 8.47          |
| trek-engine              | 1.0.5   | ✗      | 47185.6    | 20.72   | 7.74          |
| trek-router              | 1.2.0   | ✓      | 46702.6    | 20.92   | 7.66          |
| vapr                     | 0.6.0   | ✓      | 45664.8    | 21.45   | 7.49          |
| yeps-router              | 1.2.0   | ✓      | 40634.4    | 24.11   | 7.25          |
| spirit                   | 0.6.1   | ✗      | 40022.4    | 24.50   | 7.14          |
| koa                      | 2.13.1  | ✗      | 39907.0    | 24.57   | 7.12          |
| spirit-router            | 0.5.0   | ✓      | 37994.4    | 25.84   | 6.78          |
| total.js                 | 3.4.9   | ✓      | 36975.8    | 26.56   | 11.32         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36004.6    | 27.27   | 6.42          |
| take-five                | 2.0.0   | ✓      | 35639.8    | 27.60   | 12.81         |
| koa-router               | 10.0.0  | ✓      | 35283.0    | 27.84   | 6.29          |
| restify                  | 8.5.1   | ✓      | 33493.4    | 29.37   | 6.04          |
| hapi                     | 20.1.5  | ✓      | 28443.2    | 34.66   | 5.07          |
| microrouter              | 3.1.3   | ✓      | 27102.0    | 36.39   | 4.83          |
| egg.js                   | 2.29.4  | ✓      | 17710.3    | 55.94   | 6.23          |
| express                  | 4.17.1  | ✓      | 10926.8    | 90.95   | 1.95          |
| express-with-middlewares | 4.17.1  | ✓      | 9338.5     | 106.49  | 3.47          |
| fastify-big-json         | 3.18.1  | ✓      | 8892.5     | 112.04  | 102.30        |
| express-route-prefix     | 4.17.1  | ✓      | 8854.6     | 112.33  | 3.28          |
