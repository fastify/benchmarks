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
* __Machine:__ Linux fv-az60-664 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sun Nov  1 01:26:13 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.7.0   | ✓      | 62165.6    | 1.52    | 11.09         |
| polkadot                 | 1.0.0   | ✗      | 61324.8    | 1.51    | 10.94         |
| bare                     | 10.13.0 | ✗      | 56594.4    | 1.68    | 10.09         |
| polka                    | 0.5.2   | ✓      | 56577.6    | 1.68    | 10.09         |
| micro                    | 9.3.4   | ✗      | 56203.2    | 1.70    | 10.02         |
| foxify                   | 0.10.20 | ✓      | 55048.8    | 1.73    | 9.03          |
| rayo                     | 1.3.5   | ✓      | 53732.0    | 1.78    | 9.58          |
| connect                  | 3.7.0   | ✗      | 53334.4    | 1.79    | 9.51          |
| yeps                     | 1.1.1   | ✗      | 51240.8    | 1.86    | 9.14          |
| connect-router           | 1.3.5   | ✓      | 49892.8    | 1.92    | 8.90          |
| micro-route              | 2.5.0   | ✓      | 49812.0    | 1.92    | 8.88          |
| server-base              | 6.1.5   | ✗      | 49112.8    | 1.95    | 8.76          |
| server-base-router       | 6.1.5   | ✓      | 47665.6    | 2.01    | 8.50          |
| trek-engine              | 1.0.5   | ✗      | 46031.0    | 2.09    | 7.55          |
| trek-router              | 1.2.0   | ✓      | 43917.6    | 2.20    | 7.20          |
| yeps-router              | 1.2.0   | ✓      | 43332.0    | 2.22    | 7.73          |
| vapr                     | 0.5.5   | ✓      | 41841.6    | 2.30    | 6.86          |
| koa                      | 2.13.0  | ✗      | 41715.0    | 2.31    | 7.44          |
| spirit                   | 0.6.1   | ✗      | 39510.4    | 1.96    | 7.05          |
| spirit-router            | 0.5.0   | ✓      | 38136.0    | 2.06    | 6.80          |
| koa-router               | 7.4.0   | ✓      | 37023.0    | 2.62    | 6.60          |
| total.js                 | 3.4.5   | ✓      | 36384.8    | 2.66    | 11.14         |
| restify                  | 8.5.1   | ✓      | 36241.8    | 2.67    | 6.53          |
| hapi                     | 20.0.1  | ✓      | 31079.2    | 3.13    | 5.54          |
| microrouter              | 3.1.3   | ✓      | 28618.4    | 3.40    | 5.10          |
| egg.js                   | 2.29.1  | ✓      | 19139.3    | 5.15    | 6.74          |
| express                  | 4.17.1  | ✓      | 11643.6    | 8.47    | 2.08          |
| express-with-middlewares | 4.17.1  | ✓      | 10014.0    | 9.85    | 3.84          |
| express-route-prefix     | 4.17.1  | ✓      | 9630.4     | 10.28   | 3.56          |
| fastify-big-json         | 3.7.0   | ✓      | 9344.0     | 10.56   | 107.49        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
