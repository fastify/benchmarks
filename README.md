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
* __Machine:__ Linux fv-az115 5.0.0-1035-azure #37-Ubuntu SMP Wed Mar 18 11:21:35 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.3`
* __Run:__ Fri May  1 00:55:07 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 37364.8    | 2.58    | 5.84          |
| connect-router           | ✓      | 33091.4    | 2.93    | 5.18          |
| connect                  | ✗      | 35047.8    | 2.76    | 5.48          |
| egg.js                   | ✓      | 14252.4    | 6.94    | 4.70          |
| express-route-prefix     | ✓      | 19766.0    | 4.95    | 6.88          |
| express-with-middlewares | ✓      | 16290.2    | 6.03    | 5.89          |
| express                  | ✓      | 18927.7    | 5.18    | 2.96          |
| fastify-big-json         | ✓      | 8632.5     | 11.44   | 99.11         |
| fastify                  | ✓      | 39365.6    | 2.45    | 6.16          |
| foxify                   | ✓      | 36824.8    | 2.62    | 5.23          |
| hapi                     | ✓      | 18200.1    | 5.42    | 2.85          |
| koa-router               | ✓      | 23455.6    | 4.17    | 3.67          |
| koa                      | ✗      | 26838.8    | 3.64    | 4.20          |
| micro-route              | ✓      | 32638.8    | 2.97    | 5.10          |
| micro                    | ✗      | 35114.0    | 2.76    | 5.49          |
| microrouter              | ✓      | 18510.5    | 5.30    | 2.90          |
| polka                    | ✓      | 37647.2    | 2.56    | 5.89          |
| polkadot                 | ✗      | 43787.8    | 2.17    | 6.85          |
| rayo                     | ✓      | 35654.6    | 2.71    | 5.58          |
| restify                  | ✓      | 25261.2    | 3.87    | 4.00          |
| server-base-router       | ✓      | 31703.6    | 3.06    | 4.96          |
| server-base              | ✗      | 32768.8    | 2.96    | 5.13          |
| spirit-router            | ✓      | 33770.4    | 2.52    | 5.28          |
| spirit                   | ✗      | 32582.0    | 2.58    | 5.10          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 22959.2    | 4.25    | 6.52          |
| trek-engine              | ✗      | 28901.4    | 3.37    | 4.11          |
| trek-router              | ✓      | 29961.2    | 3.25    | 4.26          |
| vapr                     | ✓      | 26460.0    | 3.68    | 3.76          |
| yeps-router              | ✓      | 28565.2    | 3.41    | 4.47          |
| yeps                     | ✗      | 33117.2    | 2.93    | 5.18          |
