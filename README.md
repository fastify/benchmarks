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

* __Machine:__ CPU-optimized server (DigitalOcean, 32 GB RAM, 16 vCPUs, Ubuntu 18.04.2 x64).
* __Method:__ `autocannon -c 100 -d 5 -p 10 localhost:3000` (two rounds; oneq to warm-up, one to measure).
* __Node:__ `10.15.2`

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | :-:    | --:        | --:     | --:           |
| rayo                     | ✓      | 76372.3    | 1.21    | 9.01          |
| polka                    | ✓      | 74182.4    | 1.27    | 8.22          |
| **fastify**              | ✓      | **70854.4** | **1.34** | **11.15**   |
| micro                    | ✗      | 68636.8    | 1.38    | 10.85         |
| connect                  | ✗      | 60592      | 1.57    | 8.55          |
| bare                     | ✗      | 59120      | 1.61    | 8.55          |
| trek-router              | ✓      | 57328      | 1.67    | 8.07          |
| spirit                   | ✗      | 55804.8    | 1.48    | 8.65          |
| trek-engine              | ✗      | 55548.8    | 1.73    | 7.92          |
| koa                      | ✗      | 54064      | 1.77    | 8.53          |
| spirit-router            | ✓      | 52598.4    | 1.6     | 8.18          |
| connect-router           | ✓      | 51171.2    | 1.87    | 7.33          |
| koa-router               | ✓      | 48438.4    | 1.99    | 7.63          |
| total.js                 | ✓      | 46595.2    | 2.06    | 13.15         |
| express-route-prefix     | ✓      | 43324.8    | 2.22    | 15.05         |
| hapi                     | ✓      | 39036.81   | 2.48    | 6.08          |
| express                  | ✓      | 38800      | 2.49    | 6.13          |
| microrouter              | ✓      | 37865.6    | 2.55    | 5.97          |
| restify                  | ✓      | 34609.6    | 2.56    | 5.47          |
| take-five                | ✓      | 30164.8    | 2.84    | 10.05         |
| express-with-middlewares | ✓      | 28750.4    | 3.38    | 10.35         |
| fastify-big-json         | ✓      | 11256.8    | 8.7     | 127.60        |
