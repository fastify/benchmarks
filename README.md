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
* __Machine:__ Linux fv-az12 5.0.0-1032-azure #34-Ubuntu SMP Mon Feb 10 19:37:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.1`
* __Run:__ Sun Mar  1 00:57:31 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 57455.2    | 1.64    | 8.99          |
| connect-router           | ✓      | 49592.0    | 1.93    | 7.76          |
| connect                  | ✗      | 53800.0    | 1.77    | 8.41          |
| egg.js                   | ✓      | 19329.7    | 5.10    | 6.38          |
| express-route-prefix     | ✓      | 28194.0    | 3.42    | 9.81          |
| express-with-middlewares | ✓      | 21308.4    | 4.59    | 7.70          |
| express                  | ✓      | 27443.6    | 3.54    | 4.29          |
| fastify-big-json         | ✓      | 10206.5    | 9.67    | 117.19        |
| fastify                  | ✓      | 59412.8    | 1.59    | 9.29          |
| foxify                   | ✓      | 56492.0    | 1.68    | 8.03          |
| hapi                     | ✓      | 22975.2    | 4.27    | 3.59          |
| koa-router               | ✓      | 36072.2    | 2.69    | 5.64          |
| koa                      | ✗      | 40052.6    | 2.41    | 6.26          |
| micro-route              | ✓      | 55880.8    | 1.70    | 8.74          |
| micro                    | ✗      | 52476.0    | 1.82    | 8.21          |
| microrouter              | ✓      | 32706.6    | 2.96    | 5.12          |
| polka                    | ✓      | 64571.2    | 1.46    | 10.10         |
| polkadot                 | ✗      | 68984.4    | 1.34    | 10.79         |
| rayo                     | ✓      | 64341.2    | 1.47    | 10.06         |
| restify                  | ✓      | 41995.2    | 2.30    | 6.65          |
| server-base-router       | ✓      | 55531.2    | 1.71    | 8.69          |
| server-base              | ✗      | 58328.0    | 1.63    | 9.12          |
| spirit-router            | ✓      | 39696.0    | 2.01    | 6.21          |
| spirit                   | ✗      | 41844.8    | 1.90    | 6.54          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 38983.2    | 2.47    | 10.19         |
| trek-engine              | ✗      | 49570.4    | 1.93    | 7.04          |
| trek-router              | ✓      | 48102.4    | 1.99    | 6.84          |
| vapr                     | ✓      | 43322.4    | 2.22    | 6.16          |
| yeps-router              | ✓      | 43499.2    | 2.21    | 6.80          |
| yeps                     | ✗      | 53380.8    | 1.79    | 8.35          |
