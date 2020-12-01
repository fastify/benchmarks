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
* __Machine:__ Linux fv-az59-32 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Tue Dec  1 08:26:41 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.8.0   | ✓      | 62393.6    | 1.51    | 11.13         |
| polkadot                 | 1.0.0   | ✗      | 58654.4    | 1.59    | 10.46         |
| foxify                   | 0.10.20 | ✓      | 57406.4    | 1.66    | 9.42          |
| bare                     | 10.13.0 | ✗      | 57031.2    | 1.67    | 10.17         |
| 0http                    | 3.0.0   | ✓      | 56533.6    | 1.68    | 10.08         |
| polka                    | 0.5.2   | ✓      | 56408.0    | 1.69    | 10.06         |
| micro                    | 9.3.4   | ✗      | 54247.2    | 1.76    | 9.67          |
| connect                  | 3.7.0   | ✗      | 53712.0    | 1.78    | 9.58          |
| rayo                     | 1.3.6   | ✓      | 53514.4    | 1.78    | 9.54          |
| restana                  | 4.8.0   | ✓      | 52295.2    | 1.83    | 9.33          |
| yeps                     | 1.1.1   | ✗      | 51880.0    | 1.84    | 9.25          |
| server-base-router       | 6.1.5   | ✓      | 49981.6    | 1.91    | 8.91          |
| micro-route              | 2.5.0   | ✓      | 49686.4    | 1.93    | 8.86          |
| connect-router           | 1.3.5   | ✓      | 48825.6    | 1.96    | 8.71          |
| server-base              | 6.1.5   | ✗      | 47759.2    | 2.01    | 8.52          |
| trek-router              | 1.2.0   | ✓      | 44929.0    | 2.14    | 7.37          |
| trek-engine              | 1.0.5   | ✗      | 44121.8    | 2.19    | 7.24          |
| yeps-router              | 1.2.0   | ✓      | 40860.0    | 2.36    | 7.29          |
| vapr                     | 0.5.5   | ✓      | 40466.4    | 2.38    | 6.64          |
| koa                      | 2.13.0  | ✗      | 40048.2    | 2.42    | 7.14          |
| spirit                   | 0.6.1   | ✗      | 38890.4    | 1.98    | 6.94          |
| spirit-router            | 0.5.0   | ✓      | 37802.4    | 2.04    | 6.74          |
| total.js                 | 3.4.6   | ✓      | 37114.6    | 2.60    | 11.36         |
| koa-router               | 7.4.0   | ✓      | 36425.4    | 2.66    | 6.50          |
| restify                  | 8.5.1   | ✓      | 35448.2    | 2.74    | 6.39          |
| hapi                     | 20.0.3  | ✓      | 31096.0    | 3.13    | 5.55          |
| microrouter              | 3.1.3   | ✓      | 27789.2    | 3.50    | 4.96          |
| egg.js                   | 2.29.1  | ✓      | 19633.1    | 5.02    | 6.91          |
| express                  | 4.17.1  | ✓      | 11514.4    | 8.56    | 2.05          |
| express-with-middlewares | 4.17.1  | ✓      | 10052.0    | 9.81    | 3.85          |
| express-route-prefix     | 4.17.1  | ✓      | 9571.9     | 10.34   | 3.54          |
| fastify-big-json         | 3.8.0   | ✓      | 9301.3     | 10.60   | 107.00        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
