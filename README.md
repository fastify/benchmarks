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
| bare                     | 10.13.0 | ✗      | 43619.2    | 2.22    | 6.78          |
| connect-router           | 1.3.3   | ✓      | 38876.8    | 2.50    | 6.08          |
| connect                  | 3.6.6   | ✗      | 41590.4    | 2.33    | 6.53          |
| egg.js                   |         | ✓      | 17999.2    | 5.46    | 5.97          |
| express-route-prefix     | 4.16.3  | ✓      | 22593.6    | 4.34    | 7.95          |
| express-with-middlewares | 4.16.3  | ✓      | 20600.0    | 4.75    | 7.42          |
| express                  | 4.16.3  | ✓      | 25140.8    | 3.88    | 3.96          |
| fastify-big-json         | 1.6.0   | ✓      | 9387.6     | 10.42   | 108.40        |
| fastify                  | 1.6.0   | ✓      | 43568.0    | 2.23    | 6.83          |
| foxify                   | 0.10.6  | ✓      | 41968.0    | 2.31    | 5.97          |
| hapi                     | 17.5.1  | ✓      | 27208.0    | 3.60    | 4.29          |
| koa-router               | 7.4.0   | ✓      | 32003.2    | 3.05    | 4.97          |
| koa                      | 2.5.1   | ✗      | 33841.6    | 2.88    | 5.38          |
| micro-route              | 2.5.0   | ✓      | 37513.6    | 2.59    | 5.88          |
| micro                    | 9.3.2   | ✗      | 40355.2    | 2.41    | 6.33          |
| microrouter              | 3.1.3   | ✓      | 25326.4    | 3.85    | 3.99          |
| polka                    | 0.4.0   | ✓      | 40188.8    | 2.42    | 6.28          |
| rayo                     | 1.0.4   | ✓      | 38358.4    | 2.53    | 6.03          |
| restify                  | 7.2.1   | ✓      | 30798.4    | 3.02    | 4.88          |
| server-base-router       | 6.1.0   | ✓      | 36873.6    | 2.64    | 5.83          |
| server-base              | 6.1.0   | ✗      | 36353.6    | 2.68    | 5.72          |
| spirit-router            | 0.5.0   | ✓      | 35945.6    | 2.57    | 5.63          |
| spirit                   | 0.6.1   | ✗      | 39625.6    | 2.33    | 6.22          |
| take-five                | 1.4.0   | ✓      | 21179.2    | 4.33    | 6.97          |
| total.js                 | 2.9.4   | ✓      | 27169.6    | 3.59    | 7.75          |
| trek-engine              | 1.0.5   | ✗      | 35832.0    | 2.72    | 5.08          |
| trek-router              | 1.2.0   | ✓      | 32718.4    | 2.98    | 4.67          |
| vapr                     | 0.5.1   | ✓      | 33009.6    | 2.95    | 4.69          |
