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
* __Node:__ `v14.19.2`
* __Run:__ Mon May 16 2022 01:59:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.3.4   | ✗      | 30096.0    | 32.82   | 5.37          |
| polkadot                 | 1.0.0   | ✗      | 29946.4    | 32.99   | 5.34          |
| bare                     | 10.13.0 | ✗      | 29503.2    | 33.44   | 5.26          |
| fastify                  | 3.29.0  | ✓      | 29197.6    | 33.80   | 5.21          |
| polka                    | 0.5.2   | ✓      | 28267.6    | 34.89   | 5.04          |
| spirit-router            | 0.5.0   | ✓      | 27670.0    | 35.79   | 4.93          |
| foxify                   | 0.10.20 | ✓      | 27516.8    | 35.84   | 4.51          |
| 0http                    | 3.2.0   | ✓      | 26950.0    | 36.63   | 4.81          |
| spirit                   | 0.6.1   | ✗      | 26868.8    | 36.85   | 4.79          |
| connect                  | 3.7.0   | ✗      | 26513.2    | 37.25   | 4.73          |
| rayo                     | 1.3.10  | ✓      | 26485.6    | 37.27   | 4.72          |
| server-base-router       | 7.1.32  | ✓      | 25780.0    | 38.29   | 4.60          |
| micro-route              | 2.5.0   | ✓      | 25626.4    | 38.52   | 4.57          |
| trek-engine              | 1.0.5   | ✗      | 25416.1    | 38.85   | 4.17          |
| server-base              | 7.1.32  | ✗      | 24440.0    | 40.42   | 4.36          |
| yeps                     | 1.1.1   | ✗      | 23999.2    | 41.16   | 4.28          |
| trek-router              | 1.2.0   | ✓      | 22996.7    | 42.99   | 3.77          |
| connect-router           | 1.3.7   | ✓      | 22726.8    | 43.49   | 4.05          |
| restana                  | 4.9.5   | ✓      | 22722.0    | 43.48   | 4.05          |
| yeps-router              | 1.2.0   | ✓      | 22011.2    | 44.92   | 3.93          |
| koa                      | 2.13.4  | ✗      | 21616.7    | 45.74   | 3.85          |
| vapr                     | 0.6.0   | ✓      | 20900.8    | 47.33   | 3.43          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 20355.5    | 48.61   | 3.63          |
| restify                  | 8.6.1   | ✓      | 19583.3    | 50.54   | 3.53          |
| total.js                 | 3.4.13  | ✓      | 19235.9    | 51.49   | 5.89          |
| koa-router               | 10.1.1  | ✓      | 19120.7    | 51.79   | 3.41          |
| take-five                | 2.0.0   | ✓      | 18943.7    | 52.28   | 6.81          |
| hapi                     | 20.2.2  | ✓      | 18482.7    | 53.60   | 3.30          |
| microrouter              | 3.1.3   | ✓      | 16082.1    | 61.71   | 2.87          |
| egg.js                   | 2.35.0  | ✓      | 10321.9    | 96.37   | 3.69          |
| fastify-big-json         | 3.29.0  | ✓      | 7179.5     | 138.77  | 82.60         |
| express                  | 4.18.1  | ✓      | 6892.0     | 144.42  | 1.23          |
| express-route-prefix     | 4.18.1  | ✓      | 6093.1     | 163.43  | 2.25          |
| express-with-middlewares | 4.18.1  | ✓      | 5916.5     | 168.26  | 2.20          |
