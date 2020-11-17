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
* __Machine:__ Linux fv-az50-772 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Tue Nov 17 15:04:52 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.0.0   | ✓      | 37889.8    | 2.53    | 5.06          |
| fastify                  | 3.8.0   | ✓      | 36723.4    | 2.62    | 6.55          |
| polkadot                 | 1.0.0   | ✗      | 35772.2    | 2.69    | 6.38          |
| bare                     | 10.13.0 | ✗      | 35172.6    | 2.74    | 6.27          |
| micro                    | 9.3.4   | ✗      | 32309.2    | 3.00    | 5.76          |
| foxify                   | 0.10.20 | ✓      | 31547.0    | 3.07    | 5.17          |
| polka                    | 0.5.2   | ✓      | 30662.8    | 3.16    | 5.47          |
| connect                  | 3.7.0   | ✗      | 30569.6    | 3.17    | 5.45          |
| rayo                     | 1.3.6   | ✓      | 29494.0    | 3.29    | 5.26          |
| yeps                     | 1.1.1   | ✗      | 28698.4    | 3.38    | 5.12          |
| connect-router           | 1.3.5   | ✓      | 28604.0    | 3.39    | 5.10          |
| trek-engine              | 1.0.5   | ✗      | 26975.6    | 3.61    | 4.42          |
| server-base-router       | 6.1.5   | ✓      | 26359.2    | 3.69    | 4.70          |
| spirit                   | 0.6.1   | ✗      | 26258.4    | 3.38    | 4.68          |
| server-base              | 6.1.5   | ✗      | 25683.6    | 3.79    | 4.58          |
| micro-route              | 2.5.0   | ✓      | 25311.6    | 3.85    | 4.51          |
| trek-router              | 1.2.0   | ✓      | 24705.2    | 3.95    | 4.05          |
| spirit-router            | 0.5.0   | ✓      | 24618.4    | 3.55    | 4.39          |
| yeps-router              | 1.2.0   | ✓      | 24542.0    | 3.97    | 4.38          |
| restana                  | 4.8.0   | ✓      | 23568.0    | 4.15    | 4.20          |
| vapr                     | 0.5.5   | ✓      | 22792.0    | 4.28    | 3.74          |
| koa                      | 2.13.0  | ✗      | 22729.6    | 4.30    | 4.05          |
| restify                  | 8.5.1   | ✓      | 20952.8    | 4.67    | 3.78          |
| koa-router               | 7.4.0   | ✓      | 20832.9    | 4.70    | 3.72          |
| total.js                 | 3.4.6   | ✓      | 20753.6    | 4.71    | 6.35          |
| hapi                     | 20.0.2  | ✓      | 18967.6    | 5.18    | 3.38          |
| microrouter              | 3.1.3   | ✓      | 18287.5    | 5.37    | 3.26          |
| egg.js                   | 2.29.1  | ✓      | 12377.0    | 8.00    | 4.36          |
| fastify-big-json         | 3.8.0   | ✓      | 7990.0     | 12.36   | 91.91         |
| express                  | 4.17.1  | ✓      | 7579.1     | 13.02   | 1.35          |
| express-route-prefix     | 4.17.1  | ✓      | 6723.0     | 14.74   | 2.49          |
| express-with-middlewares | 4.17.1  | ✓      | 6583.6     | 15.05   | 2.52          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
