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
* __Machine:__ Linux fv-az12-368 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Tue Dec  1 01:39:15 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.0.0   | ✓      | 69580.4    | 1.33    | 9.29          |
| polkadot                 | 1.0.0   | ✗      | 65125.6    | 1.42    | 11.61         |
| fastify                  | 3.8.0   | ✓      | 64667.6    | 1.46    | 11.53         |
| bare                     | 10.13.0 | ✗      | 59743.2    | 1.59    | 10.65         |
| polka                    | 0.5.2   | ✓      | 58056.0    | 1.64    | 10.35         |
| connect                  | 3.7.0   | ✗      | 57683.2    | 1.65    | 10.29         |
| foxify                   | 0.10.20 | ✓      | 57524.0    | 1.65    | 9.44          |
| micro                    | 9.3.4   | ✗      | 57435.2    | 1.66    | 10.24         |
| restana                  | 4.8.0   | ✓      | 55753.6    | 1.70    | 9.94          |
| rayo                     | 1.3.6   | ✓      | 54451.2    | 1.75    | 9.71          |
| yeps                     | 1.1.1   | ✗      | 52796.0    | 1.81    | 9.41          |
| server-base-router       | 6.1.5   | ✓      | 52212.0    | 1.83    | 9.31          |
| server-base              | 6.1.5   | ✗      | 51670.4    | 1.85    | 9.21          |
| connect-router           | 1.3.5   | ✓      | 51444.8    | 1.86    | 9.17          |
| micro-route              | 2.5.0   | ✓      | 51161.6    | 1.87    | 9.12          |
| trek-engine              | 1.0.5   | ✗      | 47423.2    | 2.03    | 7.78          |
| trek-router              | 1.2.0   | ✓      | 45756.0    | 2.10    | 7.50          |
| vapr                     | 0.5.5   | ✓      | 44022.4    | 2.19    | 7.22          |
| yeps-router              | 1.2.0   | ✓      | 43535.8    | 2.21    | 7.76          |
| koa                      | 2.13.0  | ✗      | 41909.4    | 2.31    | 7.47          |
| total.js                 | 3.4.6   | ✓      | 39447.2    | 2.45    | 12.08         |
| spirit                   | 0.6.1   | ✗      | 38992.0    | 2.00    | 6.95          |
| spirit-router            | 0.5.0   | ✓      | 37934.4    | 2.06    | 6.76          |
| koa-router               | 7.4.0   | ✓      | 37896.6    | 2.56    | 6.76          |
| restify                  | 8.5.1   | ✓      | 37035.8    | 2.62    | 6.68          |
| hapi                     | 20.0.3  | ✓      | 31267.6    | 3.11    | 5.58          |
| microrouter              | 3.1.3   | ✓      | 31128.4    | 3.12    | 5.55          |
| egg.js                   | 2.29.1  | ✓      | 19406.0    | 5.07    | 6.83          |
| express                  | 4.17.1  | ✓      | 12897.0    | 7.64    | 2.30          |
| express-with-middlewares | 4.17.1  | ✓      | 11060.0    | 8.91    | 4.24          |
| fastify-big-json         | 3.8.0   | ✓      | 10439.2    | 9.45    | 120.09        |
| express-route-prefix     | 4.17.1  | ✓      | 10213.5    | 9.69    | 3.78          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
