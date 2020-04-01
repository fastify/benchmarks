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
* __Machine:__ Linux fv-az115 5.0.0-1032-azure #34-Ubuntu SMP Mon Feb 10 19:37:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.1`
* __Run:__ Wed Apr  1 00:54:58 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 44496.8    | 2.15    | 6.96          |
| connect-router           | ✓      | 36704.2    | 2.63    | 5.74          |
| connect                  | ✗      | 43118.4    | 2.23    | 6.74          |
| egg.js                   | ✓      | 16209.9    | 6.10    | 5.35          |
| express-route-prefix     | ✓      | 23595.1    | 4.13    | 8.21          |
| express-with-middlewares | ✓      | 17661.5    | 5.56    | 6.38          |
| express                  | ✓      | 22012.8    | 4.43    | 3.44          |
| fastify-big-json         | ✓      | 10731.1    | 9.19    | 123.23        |
| fastify                  | ✓      | 46637.6    | 2.05    | 7.29          |
| foxify                   | ✓      | 43568.0    | 2.20    | 6.19          |
| hapi                     | ✓      | 20043.6    | 4.90    | 3.13          |
| koa-router               | ✓      | 28945.6    | 3.37    | 4.53          |
| koa                      | ✗      | 33366.6    | 2.91    | 5.22          |
| micro-route              | ✓      | 37237.4    | 2.59    | 5.82          |
| micro                    | ✗      | 44856.8    | 2.14    | 7.02          |
| microrouter              | ✓      | 20400.8    | 4.79    | 3.19          |
| polka                    | ✓      | 43549.6    | 2.21    | 6.81          |
| polkadot                 | ✗      | 50770.4    | 1.86    | 7.94          |
| rayo                     | ✓      | 43004.0    | 2.23    | 6.73          |
| restify                  | ✓      | 28415.2    | 3.43    | 4.50          |
| server-base-router       | ✓      | 37171.6    | 2.60    | 5.81          |
| server-base              | ✗      | 37956.0    | 2.54    | 5.94          |
| spirit-router            | ✓      | 37085.6    | 2.20    | 5.80          |
| spirit                   | ✗      | 37484.8    | 2.15    | 5.86          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 29498.8    | 3.29    | 8.38          |
| trek-engine              | ✗      | 32866.0    | 2.96    | 4.67          |
| trek-router              | ✓      | 35097.2    | 2.76    | 4.99          |
| vapr                     | ✓      | 30782.6    | 3.15    | 4.37          |
| yeps-router              | ✓      | 31655.4    | 3.07    | 4.95          |
| yeps                     | ✗      | 39341.6    | 2.45    | 6.15          |
