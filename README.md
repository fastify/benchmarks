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
* __Machine:__ Linux fv-az195 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Tue Sep  1 01:34:46 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 36797.0    | 2.61    | 5.76          |
| fastify                  | 3.3.0   | ✓      | 32912.4    | 2.94    | 5.15          |
| polka                    | 0.5.2   | ✓      | 30972.2    | 3.13    | 4.84          |
| bare                     | 10.13.0 | ✗      | 30583.6    | 3.17    | 4.78          |
| rayo                     | 1.3.5   | ✓      | 30571.2    | 3.17    | 4.78          |
| connect                  | 3.7.0   | ✗      | 30024.8    | 3.23    | 4.70          |
| yeps                     | 1.1.1   | ✗      | 29647.2    | 3.27    | 4.64          |
| foxify                   | 0.10.20 | ✓      | 29603.2    | 3.28    | 4.21          |
| micro                    | 9.3.4   | ✗      | 28714.4    | 3.38    | 4.49          |
| micro-route              | 2.5.0   | ✓      | 27992.0    | 3.47    | 4.38          |
| server-base              | 6.1.5   | ✗      | 27255.2    | 3.57    | 4.26          |
| trek-engine              | 1.0.5   | ✗      | 27018.0    | 3.61    | 3.84          |
| trek-router              | 1.2.0   | ✓      | 26897.6    | 3.62    | 3.82          |
| connect-router           | 1.3.5   | ✓      | 26509.6    | 3.67    | 4.15          |
| server-base-router       | 6.1.5   | ✓      | 26313.6    | 3.70    | 4.12          |
| spirit                   | 0.6.1   | ✗      | 25534.8    | 3.48    | 3.99          |
| spirit-router            | 0.5.0   | ✓      | 25428.4    | 3.50    | 3.98          |
| yeps-router              | 1.2.0   | ✓      | 24707.2    | 3.95    | 3.86          |
| vapr                     | 0.5.5   | ✓      | 23634.8    | 4.12    | 3.36          |
| koa                      | 2.13.0  | ✗      | 22912.8    | 4.27    | 3.58          |
| restify                  | 8.5.1   | ✓      | 22572.0    | 4.33    | 3.57          |
| koa-router               | 7.4.0   | ✓      | 20889.6    | 4.69    | 3.27          |
| total.js                 | 3.4.5   | ✓      | 20426.0    | 4.78    | 5.80          |
| microrouter              | 3.1.3   | ✓      | 18623.1    | 5.27    | 2.91          |
| hapi                     | 18.4.1  | ✓      | 16435.7    | 6.01    | 2.57          |
| egg.js                   | 2.27.0  | ✓      | 12639.4    | 7.83    | 4.17          |
| express                  | 4.17.1  | ✓      | 7331.8     | 13.48   | 1.15          |
| fastify-big-json         | 3.3.0   | ✓      | 6973.2     | 14.21   | 80.06         |
| express-route-prefix     | 4.17.1  | ✓      | 6861.6     | 14.46   | 2.39          |
| express-with-middlewares | 4.17.1  | ✓      | 6243.7     | 15.88   | 2.26          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
