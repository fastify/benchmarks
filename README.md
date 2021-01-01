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
* __Machine:__ Linux fv-az12-647 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.0`
* __Run:__ Fri Jan  1 02:02:50 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.2   | ✓      | 40520.0    | 24.21   | 7.23          |
| bare                     | 10.13.0 | ✗      | 39890.4    | 24.60   | 7.11          |
| polkadot                 | 1.0.0   | ✗      | 39324.8    | 24.94   | 7.01          |
| micro                    | 9.3.4   | ✗      | 38131.4    | 25.73   | 6.80          |
| connect                  | 3.7.0   | ✗      | 37477.0    | 26.19   | 6.68          |
| polka                    | 0.5.2   | ✓      | 37221.4    | 26.37   | 6.64          |
| spirit                   | 0.6.1   | ✗      | 36852.8    | 26.72   | 6.57          |
| 0http                    | 3.0.0   | ✓      | 36738.2    | 26.72   | 6.55          |
| server-base              | 7.1.23  | ✗      | 36530.2    | 26.88   | 6.51          |
| rayo                     | 1.3.6   | ✓      | 36174.2    | 27.15   | 6.45          |
| micro-route              | 2.5.0   | ✓      | 34785.4    | 28.25   | 6.20          |
| foxify                   | 0.10.20 | ✓      | 34775.8    | 28.26   | 5.70          |
| yeps                     | 1.1.1   | ✗      | 34716.4    | 28.31   | 6.19          |
| server-base-router       | 7.1.23  | ✓      | 34497.0    | 28.49   | 6.15          |
| restana                  | 4.8.1   | ✓      | 32956.2    | 29.84   | 5.88          |
| trek-router              | 1.2.0   | ✓      | 32563.4    | 30.20   | 5.34          |
| connect-router           | 1.3.5   | ✓      | 30871.4    | 31.89   | 5.51          |
| yeps-router              | 1.2.0   | ✓      | 30614.4    | 32.17   | 5.46          |
| spirit-router            | 0.5.0   | ✓      | 30546.4    | 32.29   | 5.45          |
| trek-engine              | 1.0.5   | ✗      | 30072.8    | 32.76   | 4.93          |
| koa                      | 2.13.0  | ✗      | 27931.6    | 35.29   | 4.98          |
| vapr                     | 0.5.5   | ✓      | 27035.2    | 36.49   | 4.43          |
| koa-router               | 10.0.0  | ✓      | 25155.6    | 39.24   | 4.49          |
| restify                  | 8.5.1   | ✓      | 23452.8    | 42.13   | 4.23          |
| total.js                 | 3.4.6   | ✓      | 22898.0    | 43.16   | 7.01          |
| hapi                     | 20.0.3  | ✓      | 21513.2    | 45.97   | 3.84          |
| microrouter              | 3.1.3   | ✓      | 19071.2    | 51.93   | 3.40          |
| egg.js                   | 2.29.1  | ✓      | 13668.4    | 72.67   | 4.81          |
| express                  | 4.17.1  | ✓      | 8206.9     | 121.21  | 1.46          |
| fastify-big-json         | 3.9.2   | ✓      | 7939.7     | 125.32  | 91.34         |
| express-with-middlewares | 4.17.1  | ✓      | 7190.8     | 138.41  | 2.67          |
| express-route-prefix     | 4.17.1  | ✓      | 7186.6     | 138.49  | 2.66          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
