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
* __Machine:__ Linux fv-az148 5.3.0-1032-azure #33~18.04.1-Ubuntu SMP Fri Jun 26 15:01:15 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.2`
* __Run:__ Fri Jul 17 15:51:48 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 57384.0    | 1.63    | 8.97          |
| fastify                  | ✓      | 56417.6    | 1.68    | 8.82          |
| polka                    | ✓      | 54064.8    | 1.76    | 8.46          |
| bare                     | ✗      | 52816.0    | 1.80    | 8.26          |
| micro                    | ✗      | 52146.4    | 1.83    | 8.16          |
| foxify                   | ✓      | 52114.4    | 1.83    | 7.40          |
| rayo                     | ✓      | 50990.4    | 1.87    | 7.97          |
| connect                  | ✗      | 49479.2    | 1.93    | 7.74          |
| yeps                     | ✗      | 48956.0    | 1.95    | 7.66          |
| connect-router           | ✓      | 46971.2    | 2.04    | 7.35          |
| server-base-router       | ✓      | 46798.4    | 2.05    | 7.32          |
| micro-route              | ✓      | 46180.8    | 2.08    | 7.22          |
| trek-engine              | ✗      | 45559.2    | 2.11    | 6.47          |
| server-base              | ✗      | 45497.6    | 2.11    | 7.12          |
| trek-router              | ✓      | 44819.2    | 2.15    | 6.37          |
| vapr                     | ✓      | 39758.4    | 2.42    | 5.65          |
| yeps-router              | ✓      | 39513.6    | 2.44    | 6.18          |
| koa                      | ✗      | 39178.4    | 2.47    | 6.13          |
| spirit                   | ✗      | 37872.8    | 2.09    | 5.92          |
| spirit-router            | ✓      | 37002.2    | 2.15    | 5.79          |
| total.js                 | ✓      | 36688.0    | 2.63    | 10.43         |
| koa-router               | ✓      | 35758.6    | 2.71    | 5.59          |
| restify                  | ✓      | 34087.4    | 2.85    | 5.40          |
| microrouter              | ✓      | 26857.2    | 3.62    | 4.20          |
| hapi                     | ✓      | 23028.0    | 4.26    | 3.60          |
| egg.js                   | ✓      | 19272.8    | 5.12    | 6.36          |
| express                  | ✓      | 11231.4    | 8.78    | 1.76          |
| express-route-prefix     | ✓      | 10024.5    | 9.90    | 3.49          |
| express-with-middlewares | ✓      | 9319.1     | 10.59   | 3.37          |
| fastify-big-json         | ✓      | 9201.9     | 10.73   | 105.66        |
| take-five                | ✓      | N/A        | N/A     | N/A           |
