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
* __Machine:__ Linux fv-az151 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Sun Oct  4 20:50:12 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 59708.0    | 1.56    | 9.34          |
| fastify                  | 3.5.1   | ✓      | 56076.0    | 1.70    | 8.77          |
| bare                     | 10.13.0 | ✗      | 51908.0    | 1.84    | 8.12          |
| polka                    | 0.5.2   | ✓      | 51145.6    | 1.87    | 8.00          |
| connect                  | 3.7.0   | ✗      | 50694.4    | 1.89    | 7.93          |
| foxify                   | 0.10.20 | ✓      | 50507.2    | 1.89    | 7.18          |
| micro                    | 9.3.4   | ✗      | 50436.0    | 1.90    | 7.89          |
| rayo                     | 1.3.5   | ✓      | 49886.4    | 1.92    | 7.80          |
| yeps                     | 1.1.1   | ✗      | 46814.4    | 2.05    | 7.32          |
| server-base-router       | 6.1.5   | ✓      | 46533.6    | 2.06    | 7.28          |
| server-base              | 6.1.5   | ✗      | 45371.2    | 2.12    | 7.10          |
| connect-router           | 1.3.5   | ✓      | 44117.6    | 2.18    | 6.90          |
| micro-route              | 2.5.0   | ✓      | 43396.8    | 2.22    | 6.79          |
| trek-router              | 1.2.0   | ✓      | 41858.2    | 2.31    | 5.95          |
| trek-engine              | 1.0.5   | ✗      | 41813.4    | 2.31    | 5.94          |
| yeps-router              | 1.2.0   | ✓      | 39909.6    | 2.42    | 6.24          |
| koa                      | 2.13.0  | ✗      | 38425.8    | 2.52    | 6.01          |
| vapr                     | 0.5.5   | ✓      | 38341.8    | 2.52    | 5.45          |
| spirit                   | 0.6.1   | ✗      | 37080.6    | 2.14    | 5.80          |
| spirit-router            | 0.5.0   | ✓      | 37012.6    | 2.16    | 5.79          |
| restify                  | 8.5.1   | ✓      | 34964.6    | 2.78    | 5.53          |
| total.js                 | 3.4.5   | ✓      | 34857.0    | 2.78    | 9.91          |
| koa-router               | 7.4.0   | ✓      | 34633.8    | 2.81    | 5.42          |
| hapi                     | 20.0.1  | ✓      | 29523.2    | 3.30    | 4.62          |
| microrouter              | 3.1.3   | ✓      | 26592.4    | 3.66    | 4.16          |
| egg.js                   | 2.28.0  | ✓      | 19090.7    | 5.17    | 6.30          |
| express                  | 4.17.1  | ✓      | 11076.8    | 8.90    | 1.73          |
| express-route-prefix     | 4.17.1  | ✓      | 9694.9     | 10.22   | 3.37          |
| express-with-middlewares | 4.17.1  | ✓      | 9500.8     | 10.38   | 3.43          |
| fastify-big-json         | 3.5.1   | ✓      | 9454.9     | 10.43   | 108.57        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
