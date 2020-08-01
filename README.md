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
* __Machine:__ Linux fv-az54 5.3.0-1032-azure #33~18.04.1-Ubuntu SMP Fri Jun 26 15:01:15 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Sat Aug  1 01:24:30 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| fastify                  | ✓      | 52772.0    | 1.80    | 8.25          |
| bare                     | ✗      | 49808.8    | 1.91    | 7.79          |
| foxify                   | ✓      | 49312.8    | 1.93    | 7.01          |
| polkadot                 | ✗      | 48026.4    | 1.95    | 7.51          |
| rayo                     | ✓      | 47537.6    | 2.01    | 7.44          |
| connect                  | ✗      | 46968.0    | 2.04    | 7.35          |
| yeps                     | ✗      | 43089.6    | 2.23    | 6.74          |
| server-base              | ✗      | 42205.6    | 2.28    | 6.60          |
| trek-engine              | ✗      | 41800.2    | 2.30    | 5.94          |
| connect-router           | ✓      | 41616.8    | 2.31    | 6.51          |
| server-base-router       | ✓      | 40390.4    | 2.38    | 6.32          |
| micro                    | ✗      | 39504.8    | 2.44    | 6.18          |
| polka                    | ✓      | 38401.0    | 2.51    | 6.01          |
| trek-router              | ✓      | 38111.2    | 2.54    | 5.42          |
| vapr                     | ✓      | 36265.0    | 2.66    | 5.15          |
| koa                      | ✗      | 35472.0    | 2.73    | 5.55          |
| yeps-router              | ✓      | 35372.8    | 2.74    | 5.53          |
| spirit                   | ✗      | 34853.8    | 2.35    | 5.45          |
| spirit-router            | ✓      | 33830.0    | 2.43    | 5.29          |
| micro-route              | ✓      | 33521.0    | 2.89    | 5.24          |
| total.js                 | ✓      | 32504.2    | 2.98    | 9.24          |
| restify                  | ✓      | 30527.2    | 3.19    | 4.83          |
| koa-router               | ✓      | 30365.4    | 3.21    | 4.75          |
| microrouter              | ✓      | 20560.0    | 4.76    | 3.22          |
| hapi                     | ✓      | 20408.0    | 4.82    | 3.19          |
| egg.js                   | ✓      | 18171.0    | 5.43    | 6.00          |
| express                  | ✓      | 10131.3    | 9.74    | 1.58          |
| express-route-prefix     | ✓      | 8935.2     | 11.10   | 3.11          |
| fastify-big-json         | ✓      | 8528.9     | 11.58   | 97.94         |
| express-with-middlewares | ✓      | 8495.2     | 11.61   | 3.07          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
