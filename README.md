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
* __Node:__ `v14.20.0`
* __Run:__ Mon Jul 25 2022 02:07:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 52634.4    | 18.52   | 9.39          |
| polkadot                 | 1.0.0   | ✗      | 52484.8    | 18.57   | 9.36          |
| foxify                   | 0.10.20 | ✓      | 51760.0    | 18.82   | 8.49          |
| connect                  | 3.7.0   | ✗      | 49767.0    | 19.61   | 8.88          |
| 0http                    | 3.4.1   | ✓      | 49497.6    | 19.71   | 8.83          |
| fastify                  | 4.3.0   | ✓      | 49365.6    | 19.77   | 8.85          |
| polka                    | 0.5.2   | ✓      | 49291.2    | 19.80   | 8.79          |
| server-base              | 7.1.32  | ✗      | 49027.2    | 19.92   | 8.74          |
| server-base-router       | 7.1.32  | ✓      | 48942.4    | 19.94   | 8.73          |
| rayo                     | 1.3.10  | ✓      | 48425.6    | 20.16   | 8.64          |
| yeps                     | 1.1.1   | ✗      | 47966.4    | 20.36   | 8.55          |
| connect-router           | 1.3.7   | ✓      | 47508.0    | 20.56   | 8.47          |
| restana                  | 4.9.6   | ✓      | 44012.8    | 22.24   | 7.85          |
| trek-engine              | 1.0.5   | ✗      | 42489.4    | 23.04   | 6.97          |
| trek-router              | 1.2.0   | ✓      | 42379.8    | 23.11   | 6.95          |
| vapr                     | 0.6.0   | ✓      | 41246.6    | 23.75   | 6.77          |
| yeps-router              | 1.2.0   | ✓      | 38138.6    | 25.72   | 6.80          |
| koa                      | 2.13.4  | ✗      | 37257.4    | 26.34   | 6.64          |
| spirit                   | 0.6.1   | ✗      | 37253.4    | 26.37   | 6.64          |
| spirit-router            | 0.5.0   | ✓      | 36164.2    | 27.20   | 6.45          |
| total.js                 | 3.4.13  | ✓      | 35193.4    | 27.91   | 10.77         |
| take-five                | 2.0.0   | ✓      | 35167.0    | 27.95   | 12.64         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34471.8    | 28.52   | 6.15          |
| koa-router               | 10.1.1  | ✓      | 33766.2    | 29.12   | 6.02          |
| restify                  | 8.6.1   | ✓      | 32913.2    | 29.89   | 5.93          |
| hapi                     | 20.2.2  | ✓      | 27800.0    | 35.47   | 4.96          |
| egg.js                   | 2.36.0  | ✓      | 17304.3    | 57.26   | 6.19          |
| express                  | 4.18.1  | ✓      | 11510.8    | 86.32   | 2.05          |
| express-with-middlewares | 4.18.1  | ✓      | 9970.4     | 99.70   | 3.71          |
| express-route-prefix     | 4.18.1  | ✓      | 9599.2     | 103.57  | 3.55          |
| fastify-big-json         | 4.3.0   | ✓      | 9527.1     | 104.51  | 109.61        |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A     | N/A           |
| micro                    | 9.4.0   | ✗      | N/A        | N/A     | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A     | N/A           |
