<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![Build Status](https://travis-ci.org/fastify/fastify.svg?branch=master)](https://travis-ci.org/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is, fast and low overhead web framework for Node.js
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
* __Machine:__ Linux fv-az184-11 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.0`
* __Run:__ Fri Dec 18 10:22:53 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.2   | ✓      | 60655.2    | 1.56    | 10.82         |
| polkadot                 | 1.0.0   | ✗      | 59036.8    | 1.57    | 10.53         |
| bare                     | 10.13.0 | ✗      | 56793.6    | 1.67    | 10.13         |
| polka                    | 0.5.2   | ✓      | 56688.0    | 1.68    | 10.11         |
| 0http                    | 3.0.0   | ✓      | 55912.8    | 1.68    | 9.97          |
| rayo                     | 1.3.6   | ✓      | 53902.4    | 1.77    | 9.61          |
| foxify                   | 0.10.20 | ✓      | 53218.4    | 1.79    | 8.73          |
| connect                  | 3.7.0   | ✗      | 52750.4    | 1.81    | 9.41          |
| micro                    | 9.3.4   | ✗      | 52645.6    | 1.81    | 9.39          |
| yeps                     | 1.1.1   | ✗      | 50284.0    | 1.90    | 8.97          |
| restana                  | 4.8.1   | ✓      | 49796.8    | 1.91    | 8.88          |
| connect-router           | 1.3.5   | ✓      | 48923.2    | 1.96    | 8.72          |
| server-base-router       | 6.1.5   | ✓      | 48592.8    | 1.97    | 8.67          |
| micro-route              | 2.5.0   | ✓      | 48344.8    | 1.98    | 8.62          |
| server-base              | 6.1.5   | ✗      | 47833.6    | 2.00    | 8.53          |
| trek-engine              | 1.0.5   | ✗      | 43678.2    | 2.20    | 7.16          |
| trek-router              | 1.2.0   | ✓      | 43439.8    | 2.22    | 7.13          |
| yeps-router              | 1.2.0   | ✓      | 41284.0    | 2.33    | 7.36          |
| vapr                     | 0.5.5   | ✓      | 39122.4    | 2.46    | 6.42          |
| koa                      | 2.13.0  | ✗      | 38631.0    | 2.51    | 6.89          |
| total.js                 | 3.4.6   | ✓      | 37053.4    | 2.60    | 11.34         |
| spirit                   | 0.6.1   | ✗      | 36867.2    | 2.17    | 6.57          |
| spirit-router            | 0.5.0   | ✓      | 36341.2    | 2.21    | 6.48          |
| koa-router               | 7.4.0   | ✓      | 35844.2    | 2.71    | 6.39          |
| restify                  | 8.5.1   | ✓      | 34339.4    | 2.83    | 6.19          |
| hapi                     | 20.0.3  | ✓      | 29798.8    | 3.27    | 5.31          |
| microrouter              | 3.1.3   | ✓      | 28064.4    | 3.47    | 5.00          |
| egg.js                   | 2.29.1  | ✓      | 18612.7    | 5.31    | 6.55          |
| express                  | 4.17.1  | ✓      | 11226.0    | 8.78    | 2.00          |
| express-with-middlewares | 4.17.1  | ✓      | 9780.6     | 10.08   | 3.75          |
| fastify-big-json         | 3.9.2   | ✓      | 9210.4     | 10.71   | 105.96        |
| express-route-prefix     | 4.17.1  | ✓      | 9087.0     | 10.90   | 3.36          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
