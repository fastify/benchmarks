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
* __Machine:__ Linux fv-az59 5.3.0-1032-azure #33~18.04.1-Ubuntu SMP Fri Jun 26 15:01:15 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Sat Aug  1 01:23:44 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 32798.4    | 2.95    | 5.13          |
| connect-router           | ✓      | 31513.4    | 3.08    | 4.93          |
| connect                  | ✗      | 35105.4    | 2.75    | 5.49          |
| egg.js                   | ✓      | 13301.0    | 7.45    | 4.39          |
| express-route-prefix     | ✓      | 7671.8     | 12.94   | 2.67          |
| express-with-middlewares | ✓      | 7001.4     | 14.12   | 2.53          |
| express                  | ✓      | 8229.7     | 11.99   | 1.29          |
| fastify-big-json         | ✓      | 7826.4     | 12.62   | 89.87         |
| fastify                  | ✓      | 36514.6    | 2.64    | 5.71          |
| foxify                   | ✓      | 36397.4    | 2.65    | 5.17          |
| hapi                     | ✓      | 18198.1    | 5.43    | 2.85          |
| koa-router               | ✓      | 24098.4    | 4.06    | 3.77          |
| koa                      | ✗      | 27010.0    | 3.61    | 4.22          |
| micro-route              | ✓      | 31217.2    | 3.11    | 4.88          |
| micro                    | ✗      | 34395.8    | 2.81    | 5.38          |
| microrouter              | ✓      | 19415.9    | 5.05    | 3.04          |
| polka                    | ✓      | 35134.2    | 2.75    | 5.50          |
| polkadot                 | ✗      | 41311.8    | 2.31    | 6.46          |
| rayo                     | ✓      | 36781.0    | 2.62    | 5.75          |
| restify                  | ✓      | 24370.4    | 4.01    | 3.86          |
| server-base-router       | ✓      | 32490.0    | 2.98    | 5.08          |
| server-base              | ✗      | 30976.0    | 3.13    | 4.85          |
| spirit-router            | ✓      | 26365.2    | 3.30    | 4.12          |
| spirit                   | ✗      | 27965.2    | 3.27    | 4.37          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 23380.4    | 4.17    | 6.64          |
| trek-engine              | ✗      | 28548.4    | 3.41    | 4.06          |
| trek-router              | ✓      | 29625.6    | 3.28    | 4.21          |
| vapr                     | ✓      | 25810.4    | 3.77    | 3.67          |
| yeps-router              | ✓      | 28145.6    | 3.45    | 4.40          |
| yeps                     | ✗      | 33799.0    | 2.86    | 5.29          |
