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
* __Machine:__ Linux fv-az148-901 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.0`
* __Run:__ Mon Dec 14 00:20:02 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.1   | ✓      | 62124.0    | 1.52    | 11.08         |
| polkadot                 | 1.0.0   | ✗      | 60955.2    | 1.53    | 10.87         |
| bare                     | 10.13.0 | ✗      | 58920.8    | 1.61    | 10.51         |
| 0http                    | 3.0.0   | ✓      | 56337.6    | 1.68    | 10.05         |
| rayo                     | 1.3.6   | ✓      | 56270.4    | 1.69    | 10.04         |
| polka                    | 0.5.2   | ✓      | 56188.8    | 1.70    | 10.02         |
| foxify                   | 0.10.20 | ✓      | 54554.4    | 1.75    | 8.95          |
| connect                  | 3.7.0   | ✗      | 54528.0    | 1.75    | 9.72          |
| micro                    | 9.3.4   | ✗      | 53852.0    | 1.77    | 9.60          |
| yeps                     | 1.1.1   | ✗      | 51696.0    | 1.85    | 9.22          |
| restana                  | 4.8.0   | ✓      | 51329.6    | 1.86    | 9.15          |
| server-base-router       | 6.1.5   | ✓      | 49907.2    | 1.92    | 8.90          |
| micro-route              | 2.5.0   | ✓      | 49528.0    | 1.93    | 8.83          |
| connect-router           | 1.3.5   | ✓      | 49452.0    | 1.94    | 8.82          |
| server-base              | 6.1.5   | ✗      | 48820.0    | 1.96    | 8.71          |
| trek-engine              | 1.0.5   | ✗      | 46468.8    | 2.07    | 7.62          |
| trek-router              | 1.2.0   | ✓      | 44213.4    | 2.18    | 7.25          |
| yeps-router              | 1.2.0   | ✓      | 42351.2    | 2.27    | 7.55          |
| vapr                     | 0.5.5   | ✓      | 41105.6    | 2.34    | 6.74          |
| koa                      | 2.13.0  | ✗      | 38951.0    | 2.48    | 6.95          |
| spirit                   | 0.6.1   | ✗      | 38311.4    | 2.07    | 6.83          |
| spirit-router            | 0.5.0   | ✓      | 38295.2    | 2.08    | 6.83          |
| total.js                 | 3.4.6   | ✓      | 37424.8    | 2.58    | 11.46         |
| koa-router               | 7.4.0   | ✓      | 36168.6    | 2.68    | 6.45          |
| restify                  | 8.5.1   | ✓      | 34899.0    | 2.78    | 6.29          |
| hapi                     | 20.0.3  | ✓      | 30276.8    | 3.22    | 5.40          |
| microrouter              | 3.1.3   | ✓      | 28455.6    | 3.42    | 5.07          |
| egg.js                   | 2.29.1  | ✓      | 19134.7    | 5.16    | 6.73          |
| express                  | 4.17.1  | ✓      | 11483.0    | 8.58    | 2.05          |
| express-with-middlewares | 4.17.1  | ✓      | 9866.8     | 9.99    | 3.78          |
| express-route-prefix     | 4.17.1  | ✓      | 9311.8     | 10.63   | 3.45          |
| fastify-big-json         | 3.9.1   | ✓      | 9300.0     | 10.61   | 107.00        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
