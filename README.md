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
* __Machine:__ Linux fv-az60 5.0.0-1032-azure #34-Ubuntu SMP Mon Feb 10 19:37:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.1`
* __Run:__ Sun Mar  1 00:57:55 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 68001.2    | 1.37    | 10.64         |
| server-base              | ✗      | 62046.4    | 1.53    | 9.70          |
| rayo                     | ✓      | 61984.4    | 1.53    | 9.69          |
| polka                    | ✓      | 59549.2    | 1.59    | 9.31          |
| foxify                   | ✓      | 56760.8    | 1.67    | 8.07          |
| fastify                  | ✓      | 55794.4    | 1.70    | 8.73          |
| yeps                     | ✗      | 55007.2    | 1.73    | 8.60          |
| bare                     | ✗      | 54312.8    | 1.75    | 8.49          |
| micro                    | ✗      | 54245.6    | 1.76    | 8.48          |
| server-base-router       | ✓      | 51300.0    | 1.86    | 8.02          |
| trek-engine              | ✗      | 51268.0    | 1.87    | 7.29          |
| connect                  | ✗      | 50028.8    | 1.91    | 7.82          |
| trek-router              | ✓      | 49284.8    | 1.95    | 7.00          |
| micro-route              | ✓      | 49277.6    | 1.94    | 7.71          |
| connect-router           | ✓      | 47539.2    | 2.01    | 7.44          |
| vapr                     | ✓      | 45552.0    | 2.11    | 6.47          |
| restify                  | ✓      | 45400.0    | 2.12    | 7.19          |
| yeps-router              | ✓      | 44490.4    | 2.16    | 6.96          |
| koa                      | ✗      | 42762.4    | 2.25    | 6.69          |
| spirit                   | ✗      | 41442.4    | 1.96    | 6.48          |
| total.js                 | ✓      | 40729.6    | 2.36    | 10.64         |
| spirit-router            | ✓      | 40501.6    | 2.00    | 6.33          |
| koa-router               | ✓      | 36571.8    | 2.65    | 5.72          |
| microrouter              | ✓      | 29309.6    | 3.31    | 4.58          |
| express-route-prefix     | ✓      | 28344.0    | 3.41    | 9.87          |
| express                  | ✓      | 27761.2    | 3.50    | 4.34          |
| hapi                     | ✓      | 23904.8    | 4.10    | 3.74          |
| express-with-middlewares | ✓      | 21560.4    | 4.53    | 7.79          |
| egg.js                   | ✓      | 19494.5    | 5.06    | 6.43          |
| fastify-big-json         | ✓      | 10273.8    | 9.60    | 117.97        |
| take-five                | ✓      | N/A        | N/A     | N/A           |
