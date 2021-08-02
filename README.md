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
* __Node:__ `v14.17.3`
* __Run:__ Mon Aug 02 2021 01:27:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.19.2  | ✓      | 56989.6    | 17.08   | 10.16         |
| bare                     | 10.13.0 | ✗      | 55652.8    | 17.50   | 9.92          |
| polkadot                 | 1.0.0   | ✗      | 55468.8    | 17.58   | 9.89          |
| micro                    | 9.3.4   | ✗      | 54592.8    | 17.84   | 9.74          |
| polka                    | 0.5.2   | ✓      | 54320.0    | 17.92   | 9.69          |
| 0http                    | 3.1.1   | ✓      | 53909.6    | 18.06   | 9.61          |
| foxify                   | 0.10.20 | ✓      | 53789.6    | 18.15   | 8.82          |
| server-base              | 7.1.27  | ✗      | 53582.4    | 18.17   | 9.56          |
| connect                  | 3.7.0   | ✗      | 53395.2    | 18.24   | 9.52          |
| server-base-router       | 7.1.27  | ✓      | 53015.2    | 18.36   | 9.45          |
| rayo                     | 1.3.6   | ✓      | 52360.8    | 18.63   | 9.34          |
| yeps                     | 1.1.1   | ✗      | 50841.6    | 19.17   | 9.07          |
| connect-router           | 1.3.5   | ✓      | 48930.2    | 19.96   | 8.73          |
| micro-route              | 2.5.0   | ✓      | 48923.2    | 19.95   | 8.72          |
| restana                  | 4.9.1   | ✓      | 48751.2    | 20.01   | 8.69          |
| trek-router              | 1.2.0   | ✓      | 47633.6    | 20.50   | 7.81          |
| trek-engine              | 1.0.5   | ✗      | 47143.0    | 20.71   | 7.73          |
| vapr                     | 0.6.0   | ✓      | 44144.6    | 22.16   | 7.24          |
| spirit-router            | 0.5.0   | ✓      | 42612.0    | 23.02   | 7.60          |
| spirit                   | 0.6.1   | ✗      | 42580.0    | 23.01   | 7.59          |
| koa                      | 2.13.1  | ✗      | 42223.4    | 23.19   | 7.53          |
| yeps-router              | 1.2.0   | ✓      | 41284.0    | 23.73   | 7.36          |
| total.js                 | 3.4.9   | ✓      | 37796.2    | 25.95   | 11.57         |
| koa-router               | 10.0.0  | ✓      | 37765.4    | 25.98   | 6.74          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37377.0    | 26.26   | 6.67          |
| take-five                | 2.0.0   | ✓      | 35885.4    | 27.36   | 12.90         |
| restify                  | 8.5.1   | ✓      | 33595.0    | 29.27   | 6.06          |
| hapi                     | 20.1.5  | ✓      | 29495.6    | 33.40   | 5.26          |
| microrouter              | 3.1.3   | ✓      | 27856.0    | 35.39   | 4.97          |
| egg.js                   | 2.29.4  | ✓      | 17963.5    | 55.17   | 6.32          |
| express                  | 4.17.1  | ✓      | 11049.5    | 89.94   | 1.97          |
| express-with-middlewares | 4.17.1  | ✓      | 9199.5     | 108.14  | 3.42          |
| express-route-prefix     | 4.17.1  | ✓      | 8990.4     | 110.63  | 3.33          |
| fastify-big-json         | 3.19.2  | ✓      | 2976.3     | 334.38  | 34.24         |
