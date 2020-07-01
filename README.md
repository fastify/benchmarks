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
* __Machine:__ Linux fv-az86 5.3.0-1028-azure #29~18.04.1-Ubuntu SMP Fri Jun 5 14:32:34 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.1`
* __Run:__ Wed Jul  1 01:17:35 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 34798.2    | 2.78    | 5.44          |
| connect-router           | ✓      | 30358.8    | 3.19    | 4.75          |
| connect                  | ✗      | 32240.2    | 3.01    | 5.04          |
| egg.js                   | ✓      | 14084.2    | 7.02    | 4.65          |
| express-route-prefix     | ✓      | 7482.7     | 13.26   | 2.60          |
| express-with-middlewares | ✓      | 6891.6     | 14.36   | 2.49          |
| express                  | ✓      | 8170.9     | 12.08   | 1.28          |
| fastify-big-json         | ✓      | 8064.5     | 12.25   | 92.60         |
| fastify                  | ✓      | 34238.4    | 2.82    | 5.35          |
| foxify                   | ✓      | 34970.2    | 2.76    | 4.97          |
| hapi                     | ✓      | 17767.1    | 5.56    | 2.78          |
| koa-router               | ✓      | 22890.8    | 4.27    | 3.58          |
| koa                      | ✗      | 24686.4    | 3.96    | 3.86          |
| micro-route              | ✓      | 28973.2    | 3.35    | 4.53          |
| micro                    | ✗      | 35611.8    | 2.71    | 5.57          |
| microrouter              | ✓      | 18491.7    | 5.31    | 2.89          |
| polka                    | ✓      | 34037.2    | 2.84    | 5.32          |
| polkadot                 | ✗      | 41736.8    | 2.27    | 6.53          |
| rayo                     | ✓      | 32180.6    | 3.00    | 5.03          |
| restify                  | ✓      | 21092.4    | 4.65    | 3.34          |
| server-base-router       | ✓      | 26562.4    | 3.66    | 4.15          |
| server-base              | ✗      | 25471.6    | 3.82    | 3.98          |
| spirit-router            | ✓      | 28772.8    | 3.08    | 4.50          |
| spirit                   | ✗      | 26418.8    | 3.39    | 4.13          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 21929.2    | 4.45    | 6.23          |
| trek-engine              | ✗      | 28333.6    | 3.44    | 4.03          |
| trek-router              | ✓      | 26725.2    | 3.65    | 3.80          |
| vapr                     | ✓      | 23426.0    | 4.16    | 3.33          |
| yeps-router              | ✓      | 27266.0    | 3.57    | 4.26          |
| yeps                     | ✗      | 29778.4    | 3.26    | 4.66          |
