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
* __Run:__ Fri Jun 25 2021 19:01:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 63816.8    | 15.20   | 11.38         |
| bare                     | 10.13.0 | ✗      | 62920.0    | 15.41   | 11.22         |
| polka                    | 0.5.2   | ✓      | 62027.2    | 15.63   | 11.06         |
| connect                  | 3.7.0   | ✗      | 61709.6    | 15.71   | 11.01         |
| foxify                   | 0.10.20 | ✓      | 61500.0    | 15.76   | 10.09         |
| fastify                  | 3.18.0  | ✓      | 61240.0    | 15.85   | 10.92         |
| rayo                     | 1.3.6   | ✓      | 61089.6    | 15.87   | 10.89         |
| micro                    | 9.3.4   | ✗      | 59772.8    | 16.25   | 10.66         |
| 0http                    | 3.1.1   | ✓      | 59470.4    | 16.32   | 10.61         |
| server-base-router       | 7.1.27  | ✓      | 58753.6    | 16.52   | 10.48         |
| server-base              | 7.1.27  | ✗      | 58624.0    | 16.55   | 10.45         |
| yeps                     | 1.1.1   | ✗      | 56678.4    | 17.14   | 10.11         |
| restana                  | 4.9.1   | ✓      | 56403.2    | 17.23   | 10.06         |
| connect-router           | 1.3.5   | ✓      | 55717.6    | 17.45   | 9.94          |
| micro-route              | 2.5.0   | ✓      | 54988.8    | 17.69   | 9.81          |
| trek-engine              | 1.0.5   | ✗      | 51272.0    | 19.02   | 8.41          |
| trek-router              | 1.2.0   | ✓      | 50993.6    | 19.11   | 8.36          |
| vapr                     | 0.6.0   | ✓      | 49387.2    | 19.75   | 8.10          |
| yeps-router              | 1.2.0   | ✓      | 44771.2    | 21.84   | 7.98          |
| koa                      | 2.13.1  | ✗      | 43434.4    | 22.53   | 7.75          |
| total.js                 | 3.4.9   | ✓      | 41342.4    | 23.69   | 12.66         |
| spirit                   | 0.6.1   | ✗      | 40764.0    | 24.04   | 7.27          |
| spirit-router            | 0.5.0   | ✓      | 40264.8    | 24.35   | 7.18          |
| take-five                | 2.0.0   | ✓      | 40008.8    | 24.49   | 14.38         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 40005.8    | 24.51   | 7.13          |
| restify                  | 8.5.1   | ✓      | 39251.2    | 24.97   | 7.08          |
| koa-router               | 10.0.0  | ✓      | 38644.2    | 25.37   | 6.89          |
| microrouter              | 3.1.3   | ✓      | 31341.6    | 31.41   | 5.59          |
| hapi                     | 20.1.4  | ✓      | 30701.6    | 32.09   | 5.48          |
| egg.js                   | 2.29.4  | ✓      | 18786.5    | 52.71   | 6.61          |
| express                  | 4.17.1  | ✓      | 12365.4    | 80.32   | 2.20          |
| express-with-middlewares | 4.17.1  | ✓      | 10892.6    | 91.24   | 4.05          |
| express-route-prefix     | 4.17.1  | ✓      | 10560.8    | 94.13   | 3.91          |
| fastify-big-json         | 3.18.0  | ✓      | 10205.0    | 97.54   | 117.41        |
