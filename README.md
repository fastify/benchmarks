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
* __Machine:__ Linux fv-az50 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Mon Aug 17 15:25:00 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 40365.6    | 2.37    | 6.31          |
| fastify                  | 3.2.0   | ✓      | 38501.6    | 2.50    | 6.02          |
| bare                     | 10.13.0 | ✗      | 38089.4    | 2.53    | 5.96          |
| polka                    | 0.5.2   | ✓      | 36315.2    | 2.66    | 5.68          |
| micro                    | 9.3.4   | ✗      | 36075.0    | 2.68    | 5.64          |
| rayo                     | 1.3.5   | ✓      | 35629.8    | 2.71    | 5.57          |
| foxify                   | 0.10.20 | ✓      | 34469.0    | 2.81    | 4.90          |
| connect                  | 3.7.0   | ✗      | 33800.2    | 2.86    | 5.29          |
| yeps                     | 1.1.1   | ✗      | 33648.6    | 2.88    | 5.26          |
| micro-route              | 2.5.0   | ✓      | 32050.2    | 3.02    | 5.01          |
| server-base              | 6.1.5   | ✗      | 31347.0    | 3.09    | 4.90          |
| trek-engine              | 1.0.5   | ✗      | 30579.0    | 3.18    | 4.35          |
| server-base-router       | 6.1.5   | ✓      | 30390.0    | 3.19    | 4.75          |
| connect-router           | 1.3.5   | ✓      | 30355.2    | 3.20    | 4.75          |
| spirit-router            | 0.5.0   | ✓      | 30200.0    | 2.93    | 4.72          |
| spirit                   | 0.6.1   | ✗      | 28476.8    | 3.10    | 4.45          |
| yeps-router              | 1.2.0   | ✓      | 27874.4    | 3.49    | 4.36          |
| trek-router              | 1.2.0   | ✓      | 27613.6    | 3.53    | 3.92          |
| vapr                     | 0.5.5   | ✓      | 26600.8    | 3.66    | 3.78          |
| koa                      | 2.13.0  | ✗      | 25900.0    | 3.77    | 4.05          |
| restify                  | 8.5.1   | ✓      | 25651.2    | 3.81    | 4.06          |
| koa-router               | 7.4.0   | ✓      | 24322.8    | 4.02    | 3.80          |
| total.js                 | 3.4.5   | ✓      | 23468.4    | 4.16    | 6.67          |
| microrouter              | 3.1.3   | ✓      | 19005.2    | 5.16    | 2.97          |
| hapi                     | 18.4.1  | ✓      | 18750.6    | 5.26    | 2.93          |
| egg.js                   | 2.27.0  | ✓      | 14397.2    | 6.87    | 4.75          |
| express                  | 4.17.1  | ✓      | 8556.1     | 11.53   | 1.34          |
| fastify-big-json         | 3.2.0   | ✓      | 8492.3     | 11.62   | 97.51         |
| express-route-prefix     | 4.17.1  | ✓      | 7647.9     | 12.97   | 2.66          |
| express-with-middlewares | 4.17.1  | ✓      | 7037.4     | 14.06   | 2.54          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
