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
* __Machine:__ Linux fv-az50 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Sun Sep 20 21:51:36 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 42158.4    | 2.28    | 6.59          |
| fastify                  | 3.4.1   | ✓      | 42024.8    | 2.29    | 6.57          |
| foxify                   | 0.10.20 | ✓      | 39332.0    | 2.45    | 5.59          |
| micro                    | 9.3.4   | ✗      | 38885.6    | 2.48    | 6.08          |
| polka                    | 0.5.2   | ✓      | 36835.0    | 2.62    | 5.76          |
| rayo                     | 1.3.5   | ✓      | 36724.0    | 2.63    | 5.74          |
| bare                     | 10.13.0 | ✗      | 35617.8    | 2.71    | 5.57          |
| yeps                     | 1.1.1   | ✗      | 34352.2    | 2.82    | 5.37          |
| server-base              | 6.1.5   | ✗      | 34093.8    | 2.84    | 5.33          |
| connect-router           | 1.3.5   | ✓      | 34076.8    | 2.84    | 5.33          |
| connect                  | 3.7.0   | ✗      | 33645.6    | 2.88    | 5.26          |
| micro-route              | 2.5.0   | ✓      | 33618.4    | 2.88    | 5.26          |
| trek-router              | 1.2.0   | ✓      | 32100.2    | 3.03    | 4.56          |
| trek-engine              | 1.0.5   | ✗      | 31490.2    | 3.09    | 4.47          |
| spirit-router            | 0.5.0   | ✓      | 31144.4    | 2.69    | 4.87          |
| server-base-router       | 6.1.5   | ✓      | 31134.8    | 3.11    | 4.87          |
| spirit                   | 0.6.1   | ✗      | 30821.4    | 2.76    | 4.82          |
| yeps-router              | 1.2.0   | ✓      | 29506.2    | 3.29    | 4.61          |
| koa                      | 2.13.0  | ✗      | 29118.0    | 3.35    | 4.55          |
| vapr                     | 0.5.5   | ✓      | 28968.8    | 3.35    | 4.12          |
| restify                  | 8.5.1   | ✓      | 27452.4    | 3.55    | 4.35          |
| koa-router               | 7.4.0   | ✓      | 27028.0    | 3.61    | 4.23          |
| total.js                 | 3.4.5   | ✓      | 26857.6    | 3.62    | 7.63          |
| microrouter              | 3.1.3   | ✓      | 20663.2    | 4.73    | 3.23          |
| hapi                     | 18.4.1  | ✓      | 19342.7    | 5.09    | 3.03          |
| egg.js                   | 2.28.0  | ✓      | 15415.8    | 6.42    | 5.09          |
| fastify-big-json         | 3.4.1   | ✓      | 9912.5     | 9.95    | 113.81        |
| express                  | 4.17.1  | ✓      | 8774.1     | 11.25   | 1.37          |
| express-route-prefix     | 4.17.1  | ✓      | 8265.1     | 11.99   | 2.88          |
| express-with-middlewares | 4.17.1  | ✓      | 7830.4     | 12.61   | 2.83          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
