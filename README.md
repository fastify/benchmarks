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

* __Machine:__ CPU-optimized server (Ubuntu 18.04.2 x64 | 8 vCPUs | 32GB | Node 10.15).
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `10.15.2`

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | :-:    | --:        | --:     | --:           |
| bare                     | ✗      | 50444.8    | 1.90    | 7.89          |
| **fastify**              | ✓      | 50143.2    | 1.91    | 7.84          |
| connect                  | ✗      | 48796.0    | 1.97    | 7.63          |
| foxify                   | ✓      | 48658.4    | 1.97    | 6.91          |
| rayo                     | ✓      | 45461.6    | 2.11    | 7.11          |
| polka                    | ✓      | 45400.8    | 2.11    | 7.10          |
| micro                    | ✗      | 44692.8    | 2.15    | 6.99          |
| yeps                     | ✗      | 44201.6    | 2.18    | 6.91          |
| connect-router           | ✓      | 43371.2    | 2.22    | 6.78          |
| trek-router              | ✓      | 42148.0    | 2.29    | 5.99          |
| trek-engine              | ✗      | 41277.6    | 2.34    | 5.87          |
| micro-route              | ✓      | 40613.6    | 2.38    | 6.35          |
| vapr                     | ✓      | 38684.8    | 2.50    | 5.50          |
| spirit                   | ✗      | 38611.0    | 2.26    | 6.04          |
| spirit-router            | ✓      | 38024.8    | 2.29    | 5.95          |
| koa                      | ✗      | 34860.4    | 2.79    | 5.45          |
| total.js                 | ✓      | 32382.6    | 3.00    | 8.46          |
| koa-router               | ✓      | 32213.6    | 3.02    | 5.04          |
| express-route-prefix     | ✓      | 29813.4    | 3.27    | 10.38         |
| yeps-router              | ✓      | 29328.0    | 3.32    | 4.59          |
| express                  | ✓      | 26583.2    | 3.67    | 4.16          |
| microrouter              | ✓      | 25282.4    | 3.86    | 3.95          |
| restify                  | ✓      | 22801.6    | 4.02    | 3.61          |
| express-with-middlewares | ✓      | 20482.8    | 4.78    | 7.40          |
| hapi                     | ✓      | 17870.4    | 5.52    | 2.79          |
| fastify-big-json         | ✓      | 9289.6     | 10.63   | 106.67        |
