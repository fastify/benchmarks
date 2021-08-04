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
* __Run:__ Wed Aug 04 2021 18:58:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.1   | ✓      | 60580.0    | 16.01   | 10.80         |
| fastify                  | 3.20.1  | ✓      | 60104.0    | 16.12   | 10.72         |
| bare                     | 10.13.0 | ✗      | 59787.2    | 16.24   | 10.66         |
| polkadot                 | 1.0.0   | ✗      | 59472.0    | 16.33   | 10.61         |
| foxify                   | 0.10.20 | ✓      | 58949.6    | 16.46   | 9.67          |
| micro                    | 9.3.4   | ✗      | 58475.2    | 16.61   | 10.43         |
| polka                    | 0.5.2   | ✓      | 58394.4    | 16.62   | 10.41         |
| rayo                     | 1.3.6   | ✓      | 58022.4    | 16.73   | 10.35         |
| connect                  | 3.7.0   | ✗      | 57807.2    | 16.80   | 10.31         |
| server-base-router       | 7.1.27  | ✓      | 56656.0    | 17.15   | 10.10         |
| server-base              | 7.1.27  | ✗      | 56076.0    | 17.34   | 10.00         |
| connect-router           | 1.3.5   | ✓      | 53660.8    | 18.15   | 9.57          |
| yeps                     | 1.1.1   | ✗      | 52920.8    | 18.40   | 9.44          |
| micro-route              | 2.5.0   | ✓      | 52352.8    | 18.60   | 9.34          |
| restana                  | 4.9.1   | ✓      | 52193.6    | 18.68   | 9.31          |
| trek-engine              | 1.0.5   | ✗      | 49488.0    | 19.71   | 8.12          |
| trek-router              | 1.2.0   | ✓      | 47058.4    | 20.76   | 7.72          |
| vapr                     | 0.6.0   | ✓      | 46457.6    | 21.04   | 7.62          |
| koa                      | 2.13.1  | ✗      | 43099.2    | 22.71   | 7.69          |
| yeps-router              | 1.2.0   | ✓      | 42408.0    | 23.07   | 7.56          |
| spirit                   | 0.6.1   | ✗      | 39901.6    | 24.57   | 7.12          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 39685.0    | 24.71   | 7.08          |
| total.js                 | 3.4.9   | ✓      | 39665.6    | 24.71   | 12.14         |
| take-five                | 2.0.0   | ✓      | 38087.2    | 25.75   | 13.69         |
| koa-router               | 10.0.0  | ✓      | 37965.8    | 25.85   | 6.77          |
| spirit-router            | 0.5.0   | ✓      | 37308.2    | 26.31   | 6.65          |
| restify                  | 8.5.1   | ✓      | 36954.6    | 26.56   | 6.66          |
| hapi                     | 20.1.5  | ✓      | 31006.8    | 31.75   | 5.53          |
| microrouter              | 3.1.3   | ✓      | 29676.4    | 33.19   | 5.29          |
| egg.js                   | 2.29.4  | ✓      | 18984.8    | 52.17   | 6.68          |
| express                  | 4.17.1  | ✓      | 12909.0    | 76.90   | 2.30          |
| express-with-middlewares | 4.17.1  | ✓      | 11093.8    | 89.61   | 4.13          |
| express-route-prefix     | 4.17.1  | ✓      | 10085.6    | 98.60   | 3.73          |
| fastify-big-json         | 3.20.1  | ✓      | 3121.0     | 318.47  | 35.90         |
