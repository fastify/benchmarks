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

> You can also extend the comparsion table with percentage values based on fastest result; `benchmark compare -p`

# Benchmarks

* __Machine:__ MacBook Pro (Late 2016 | 2,7 GHz Intel Core i7 | 16 GB 2133 MHz LPDDR3)
* __Method:__ `autocannon -c 100 -d 5 -p 10 localhost:3000` (two rounds; one warm-up, one to measure).
* __Node:__ `10.13.0`

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | :-:    | --:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 43542.4    | 2.23    | 6.83          |
| connect-router           | 1.3.3   | ✓      | 39619.2    | 2.45    | 6.17          |
| connect                  | 3.6.6   | ✗      | 42736.0    | 2.27    | 6.72          |
| egg.js                   | 2.14.1  | ✓      | 16048.0    | 6.13    | 5.33          |
| express-route-prefix     | 4.16.4  | ✓      | 5764.6     | 17.03   | 2.01          |
| express-with-middlewares | 4.16.4  | ✓      | 20158.4    | 4.85    | 7.33          |
| express                  | 4.16.4  | ✓      | 26481.6    | 3.69    | 4.15          |
| fastify-big-json         | 1.13.1  | ✓      | 8361.2     | 11.69   | 96.40         |
| fastify                  | 1.13.1  | ✓      | 45846.4    | 2.11    | 7.17          |
| foxify                   | 0.10.18 | ✓      | 46608.0    | 2.08    | 6.63          |
| hapi                     | 17.8.1  | ✓      | 26497.6    | 3.70    | 4.16          |
| koa-router               | 7.4.0   | ✓      | 33054.4    | 2.95    | 5.13          |
| koa                      | 2.6.2   | ✗      | 35796.8    | 2.72    | 5.63          |
| micro-route              | 2.5.0   | ✓      | 41872.0    | 2.32    | 6.53          |
| micro                    | 9.3.3   | ✗      | 45193.6    | 2.15    | 7.03          |
| microrouter              | 3.1.3   | ✓      | 24536.0    | 3.98    | 3.85          |
| polka                    | 0.4.0   | ✓      | 44393.6    | 2.19    | 6.97          |
| rayo                     | 1.2.5   | ✓      | 44553.6    | 2.18    | 6.97          |
| restify                  | 7.2.3   | ✓      | 22968.0    | 4.08    | 3.64          |
| server-base-router       | 6.1.2   | ✓      | 42300.8    | 2.29    | 6.58          |
| server-base              | 6.1.2   | ✗      | 41731.2    | 2.33    | 6.47          |
| spirit-router            | 0.5.0   | ✓      | 35766.4    | 2.59    | 5.58          |
| spirit                   | 0.6.1   | ✗      | 37424.0    | 2.47    | 5.88          |
| take-five                | 1.4.1   | ✓      | 20302.4    | 4.56    | 6.78          |
| total.js                 | 2.9.30  | ✓      | 30664.0    | 3.18    | 8.85          |
| trek-engine              | 1.0.5   | ✗      | 35867.2    | 2.71    | 5.03          |
| trek-router              | 1.2.0   | ✓      | 34884.8    | 2.80    | 4.96          |
| vapr                     | 0.5.5   | ✓      | 34267.2    | 2.84    | 4.88          |
