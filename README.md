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
* __Machine:__ Linux fv-az50 5.3.0-1020-azure #21~18.04.1-Ubuntu SMP Wed Apr 15 09:35:56 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.3`
* __Run:__ Mon Jun  1 01:08:52 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 59527.2    | 1.57    | 9.31          |
| fastify                  | ✓      | 58389.6    | 1.62    | 9.13          |
| bare                     | ✗      | 57732.0    | 1.64    | 9.03          |
| foxify                   | ✓      | 57173.6    | 1.66    | 8.12          |
| micro                    | ✗      | 54044.8    | 1.76    | 8.45          |
| polka                    | ✓      | 53948.0    | 1.76    | 8.44          |
| connect                  | ✗      | 53429.6    | 1.78    | 8.36          |
| rayo                     | ✓      | 53112.0    | 1.79    | 8.31          |
| server-base-router       | ✓      | 50292.0    | 1.90    | 7.87          |
| server-base              | ✗      | 50257.6    | 1.90    | 7.86          |
| connect-router           | ✓      | 49396.8    | 1.93    | 7.73          |
| yeps                     | ✗      | 47909.6    | 2.00    | 7.49          |
| trek-engine              | ✗      | 46372.0    | 2.07    | 6.59          |
| micro-route              | ✓      | 46291.2    | 2.07    | 7.24          |
| trek-router              | ✓      | 45488.0    | 2.11    | 6.46          |
| yeps-router              | ✓      | 40436.0    | 2.38    | 6.32          |
| vapr                     | ✓      | 40265.6    | 2.39    | 5.72          |
| koa                      | ✗      | 40249.6    | 2.40    | 6.29          |
| spirit                   | ✗      | 39932.8    | 2.00    | 6.25          |
| spirit-router            | ✓      | 38124.0    | 2.11    | 5.96          |
| total.js                 | ✓      | 37712.0    | 2.56    | 10.72         |
| koa-router               | ✓      | 36866.6    | 2.63    | 5.77          |
| restify                  | ✓      | 35777.8    | 2.71    | 5.66          |
| express-route-prefix     | ✓      | 29548.0    | 3.28    | 10.29         |
| microrouter              | ✓      | 27890.0    | 3.48    | 4.36          |
| express                  | ✓      | 27057.6    | 3.59    | 4.23          |
| hapi                     | ✓      | 22678.4    | 4.32    | 3.55          |
| express-with-middlewares | ✓      | 21641.6    | 4.51    | 7.82          |
| egg.js                   | ✓      | 18735.8    | 5.26    | 6.18          |
| fastify-big-json         | ✓      | 10305.0    | 9.58    | 118.33        |
| take-five                | ✓      | N/A        | N/A     | N/A           |
