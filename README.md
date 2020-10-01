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
* __Machine:__ Linux fv-az12 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Thu Oct  1 01:40:07 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 49006.4    | 1.95    | 7.66          |
| connect-router           | ✓      | 41740.0    | 2.31    | 6.53          |
| connect                  | ✗      | 46969.6    | 2.04    | 7.35          |
| egg.js                   | ✓      | 17913.3    | 5.51    | 5.91          |
| express-route-prefix     | ✓      | 8895.6     | 11.14   | 3.10          |
| express-with-middlewares | ✓      | 9038.9     | 10.91   | 3.27          |
| express                  | ✓      | 10295.8    | 9.58    | 1.61          |
| fastify-big-json         | ✓      | 9089.8     | 10.86   | 104.37        |
| fastify                  | ✓      | 49972.8    | 1.91    | 7.82          |
| foxify                   | ✓      | 47896.8    | 2.00    | 6.81          |
| hapi                     | ✓      | 21018.8    | 4.67    | 3.29          |
| koa-router               | ✓      | 31740.4    | 3.07    | 4.96          |
| koa                      | ✗      | 36433.8    | 2.66    | 5.70          |
| micro-route              | ✓      | 41469.6    | 2.32    | 6.49          |
| micro                    | ✗      | 46879.2    | 2.04    | 7.33          |
| microrouter              | ✓      | 25462.0    | 3.83    | 3.98          |
| polka                    | ✓      | 47188.0    | 2.03    | 7.38          |
| polkadot                 | ✗      | 53366.4    | 1.75    | 8.35          |
| rayo                     | ✓      | 47930.4    | 2.00    | 7.50          |
| restify                  | ✓      | 31596.8    | 3.08    | 5.00          |
| server-base-router       | ✓      | 42741.6    | 2.25    | 6.68          |
| server-base              | ✗      | 43128.0    | 2.23    | 6.74          |
| spirit-router            | ✓      | 33508.4    | 2.34    | 5.24          |
| spirit                   | ✗      | 34569.8    | 2.25    | 5.41          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 33324.8    | 2.91    | 9.47          |
| trek-engine              | ✗      | 39028.2    | 2.48    | 5.55          |
| trek-router              | ✓      | 38994.6    | 2.48    | 5.54          |
| vapr                     | ✓      | 35367.4    | 2.73    | 5.03          |
| yeps-router              | ✓      | 36653.4    | 2.64    | 5.73          |
| yeps                     | ✗      | 42654.4    | 2.26    | 6.67          |
