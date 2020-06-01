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
* __Machine:__ Linux fv-az12 5.3.0-1020-azure #21~18.04.1-Ubuntu SMP Wed Apr 15 09:35:56 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.3`
* __Run:__ Mon Jun  1 01:08:19 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 39792.2    | 2.42    | 6.22          |
| connect-router           | ✓      | 32151.0    | 3.01    | 5.03          |
| connect                  | ✗      | 36649.8    | 2.63    | 5.73          |
| egg.js                   | ✓      | 13812.8    | 7.16    | 4.56          |
| express-route-prefix     | ✓      | 19752.0    | 4.94    | 6.88          |
| express-with-middlewares | ✓      | 15320.8    | 6.42    | 5.54          |
| express                  | ✓      | 19114.8    | 5.13    | 2.99          |
| fastify-big-json         | ✓      | 8013.3     | 12.32   | 92.01         |
| fastify                  | ✓      | 42052.8    | 2.28    | 6.58          |
| foxify                   | ✓      | 35915.8    | 2.69    | 5.10          |
| hapi                     | ✓      | 18478.5    | 5.34    | 2.89          |
| koa-router               | ✓      | 23941.2    | 4.08    | 3.74          |
| koa                      | ✗      | 27433.2    | 3.55    | 4.29          |
| micro-route              | ✓      | 32765.2    | 2.96    | 5.12          |
| micro                    | ✗      | 36797.4    | 2.62    | 5.76          |
| microrouter              | ✓      | 19162.0    | 5.11    | 3.00          |
| polka                    | ✓      | 37570.6    | 2.57    | 5.88          |
| polkadot                 | ✗      | 43174.4    | 2.20    | 6.75          |
| rayo                     | ✓      | 38389.6    | 2.51    | 6.00          |
| restify                  | ✓      | 24852.0    | 3.93    | 3.93          |
| server-base-router       | ✓      | 30953.0    | 3.13    | 4.84          |
| server-base              | ✗      | 31966.0    | 3.03    | 5.00          |
| spirit-router            | ✓      | 32088.6    | 2.77    | 5.02          |
| spirit                   | ✗      | 31870.4    | 2.80    | 4.98          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 24785.6    | 3.93    | 7.04          |
| trek-engine              | ✗      | 31807.0    | 3.05    | 4.52          |
| trek-router              | ✓      | 30676.4    | 3.17    | 4.36          |
| vapr                     | ✓      | 27452.4    | 3.54    | 3.90          |
| yeps-router              | ✓      | 28794.0    | 3.37    | 4.50          |
| yeps                     | ✗      | 34852.8    | 2.77    | 5.45          |
