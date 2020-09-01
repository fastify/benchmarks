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
* __Machine:__ Linux fv-az60 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Tue Sep  1 01:33:23 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 63552.4    | 1.49    | 9.94          |
| connect-router           | ✓      | 52174.4    | 1.83    | 8.16          |
| connect                  | ✗      | 57715.2    | 1.65    | 9.03          |
| egg.js                   | ✓      | 19628.5    | 5.01    | 6.48          |
| express-route-prefix     | ✓      | 10960.3    | 9.04    | 3.82          |
| express-with-middlewares | ✓      | 10829.8    | 9.11    | 3.91          |
| express                  | ✓      | 12413.8    | 7.94    | 1.94          |
| fastify-big-json         | ✓      | 10909.8    | 9.04    | 125.28        |
| fastify                  | ✓      | 63787.6    | 1.48    | 9.98          |
| foxify                   | ✓      | 59210.4    | 1.60    | 8.41          |
| hapi                     | ✓      | 25737.2    | 3.80    | 4.03          |
| koa-router               | ✓      | 38436.8    | 2.52    | 6.01          |
| koa                      | ✗      | 43400.0    | 2.22    | 6.79          |
| micro-route              | ✓      | 50601.6    | 1.89    | 7.91          |
| micro                    | ✗      | 54906.4    | 1.74    | 8.59          |
| microrouter              | ✓      | 30998.4    | 3.13    | 4.85          |
| polka                    | ✓      | 61221.6    | 1.55    | 9.57          |
| polkadot                 | ✗      | 66790.8    | 1.37    | 10.45         |
| rayo                     | ✓      | 57138.4    | 1.67    | 8.94          |
| restify                  | ✓      | 38380.6    | 2.52    | 6.08          |
| server-base-router       | ✓      | 52580.0    | 1.82    | 8.22          |
| server-base              | ✗      | 54601.6    | 1.74    | 8.54          |
| spirit-router            | ✓      | 42323.2    | 1.86    | 6.62          |
| spirit                   | ✗      | 42665.6    | 1.85    | 6.67          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 41404.8    | 2.33    | 11.77         |
| trek-engine              | ✗      | 49866.4    | 1.92    | 7.09          |
| trek-router              | ✓      | 48864.8    | 1.96    | 6.94          |
| vapr                     | ✓      | 42797.6    | 2.25    | 6.08          |
| yeps-router              | ✓      | 44632.0    | 2.15    | 6.98          |
| yeps                     | ✗      | 55113.6    | 1.73    | 8.62          |
