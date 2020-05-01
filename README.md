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
* __Machine:__ Linux fv-az86 5.0.0-1035-azure #37-Ubuntu SMP Wed Mar 18 11:21:35 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.3`
* __Run:__ Fri May  1 00:55:26 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 61952.0    | 1.49    | 9.69          |
| fastify                  | ✓      | 61630.4    | 1.53    | 9.64          |
| bare                     | ✗      | 57394.4    | 1.65    | 8.98          |
| foxify                   | ✓      | 56949.6    | 1.67    | 8.09          |
| polka                    | ✓      | 56628.8    | 1.68    | 8.86          |
| connect                  | ✗      | 55978.4    | 1.70    | 8.76          |
| micro                    | ✗      | 54038.4    | 1.76    | 8.45          |
| rayo                     | ✓      | 51892.8    | 1.84    | 8.12          |
| yeps                     | ✗      | 51421.6    | 1.86    | 8.04          |
| connect-router           | ✓      | 50188.8    | 1.90    | 7.85          |
| server-base-router       | ✓      | 49286.4    | 1.94    | 7.71          |
| server-base              | ✗      | 48624.8    | 1.97    | 7.61          |
| micro-route              | ✓      | 48424.8    | 1.97    | 7.57          |
| trek-router              | ✓      | 47142.4    | 2.04    | 6.70          |
| trek-engine              | ✗      | 46660.0    | 2.06    | 6.63          |
| vapr                     | ✓      | 42286.4    | 2.27    | 6.01          |
| yeps-router              | ✓      | 42239.2    | 2.28    | 6.61          |
| koa                      | ✗      | 41200.0    | 2.34    | 6.44          |
| spirit                   | ✗      | 39243.2    | 2.01    | 6.14          |
| total.js                 | ✓      | 38753.6    | 2.49    | 11.01         |
| spirit-router            | ✓      | 37732.0    | 2.10    | 5.90          |
| restify                  | ✓      | 36866.6    | 2.63    | 5.84          |
| koa-router               | ✓      | 36711.8    | 2.64    | 5.74          |
| express-route-prefix     | ✓      | 29677.2    | 3.26    | 10.33         |
| microrouter              | ✓      | 28787.6    | 3.37    | 4.50          |
| express                  | ✓      | 28202.8    | 3.44    | 4.41          |
| hapi                     | ✓      | 23607.2    | 4.15    | 3.69          |
| express-with-middlewares | ✓      | 21898.0    | 4.46    | 7.91          |
| egg.js                   | ✓      | 19311.2    | 5.10    | 6.37          |
| fastify-big-json         | ✓      | 10591.4    | 9.32    | 121.61        |
| take-five                | ✓      | N/A        | N/A     | N/A           |
