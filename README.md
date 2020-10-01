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
* __Machine:__ Linux fv-az184 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Thu Oct  1 01:41:46 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 36015.8    | 2.67    | 5.63          |
| fastify                  | 3.5.0   | ✓      | 35909.0    | 2.68    | 5.62          |
| bare                     | 10.13.0 | ✗      | 33939.6    | 2.84    | 5.31          |
| micro                    | 9.3.4   | ✗      | 33317.0    | 2.90    | 5.21          |
| polka                    | 0.5.2   | ✓      | 33053.0    | 2.93    | 5.17          |
| rayo                     | 1.3.5   | ✓      | 31505.0    | 3.07    | 4.93          |
| foxify                   | 0.10.20 | ✓      | 30695.2    | 3.16    | 4.36          |
| yeps                     | 1.1.1   | ✗      | 30558.0    | 3.17    | 4.78          |
| connect                  | 3.7.0   | ✗      | 29782.4    | 3.26    | 4.66          |
| server-base-router       | 6.1.5   | ✓      | 29530.8    | 3.28    | 4.62          |
| server-base              | 6.1.5   | ✗      | 27612.0    | 3.52    | 4.32          |
| micro-route              | 2.5.0   | ✓      | 27339.2    | 3.55    | 4.28          |
| yeps-router              | 1.2.0   | ✓      | 26410.0    | 3.69    | 4.13          |
| connect-router           | 1.3.5   | ✓      | 26250.8    | 3.71    | 4.11          |
| trek-engine              | 1.0.5   | ✗      | 26236.8    | 3.72    | 3.73          |
| trek-router              | 1.2.0   | ✓      | 26208.4    | 3.72    | 3.72          |
| spirit                   | 0.6.1   | ✗      | 26108.8    | 3.46    | 4.08          |
| koa                      | 2.13.0  | ✗      | 25733.2    | 3.79    | 4.02          |
| spirit-router            | 0.5.0   | ✓      | 24745.6    | 3.59    | 3.87          |
| restify                  | 8.5.1   | ✓      | 23699.6    | 4.12    | 3.75          |
| vapr                     | 0.5.5   | ✓      | 23059.2    | 4.23    | 3.28          |
| total.js                 | 3.4.5   | ✓      | 22664.0    | 4.30    | 6.44          |
| koa-router               | 7.4.0   | ✓      | 21804.4    | 4.49    | 3.41          |
| microrouter              | 3.1.3   | ✓      | 18941.5    | 5.18    | 2.96          |
| hapi                     | 18.4.1  | ✓      | 17950.5    | 5.50    | 2.81          |
| egg.js                   | 2.28.0  | ✓      | 12896.0    | 7.67    | 4.26          |
| express                  | 4.17.1  | ✓      | 7825.2     | 12.62   | 1.22          |
| fastify-big-json         | 3.5.0   | ✓      | 7619.8     | 12.97   | 87.50         |
| express-route-prefix     | 4.17.1  | ✓      | 6743.8     | 14.70   | 2.35          |
| express-with-middlewares | 4.17.1  | ✓      | 6626.3     | 14.93   | 2.39          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
