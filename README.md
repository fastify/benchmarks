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
* __Machine:__ Linux fv-az98 5.3.0-1028-azure #29~18.04.1-Ubuntu SMP Fri Jun 5 14:32:34 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.1`
* __Run:__ Wed Jul  1 01:18:19 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 41956.8    | 2.27    | 6.56          |
| bare                     | ✗      | 38243.0    | 2.52    | 5.98          |
| fastify                  | ✓      | 37245.8    | 2.59    | 5.83          |
| micro                    | ✗      | 36416.6    | 2.65    | 5.70          |
| polka                    | ✓      | 36302.6    | 2.66    | 5.68          |
| rayo                     | ✓      | 33811.6    | 2.86    | 5.29          |
| connect                  | ✗      | 32967.6    | 2.94    | 5.16          |
| yeps                     | ✗      | 30517.6    | 3.18    | 4.77          |
| micro-route              | ✓      | 30325.2    | 3.20    | 4.74          |
| spirit-router            | ✓      | 29928.8    | 2.99    | 4.68          |
| server-base-router       | ✓      | 29702.4    | 3.27    | 4.65          |
| connect-router           | ✓      | 29275.2    | 3.32    | 4.58          |
| foxify                   | ✓      | 29250.8    | 3.32    | 4.16          |
| server-base              | ✗      | 29084.8    | 3.34    | 4.55          |
| spirit                   | ✗      | 29035.2    | 3.08    | 4.54          |
| trek-engine              | ✗      | 29010.4    | 3.36    | 4.12          |
| trek-router              | ✓      | 28640.0    | 3.40    | 4.07          |
| yeps-router              | ✓      | 28106.8    | 3.46    | 4.40          |
| koa                      | ✗      | 27589.6    | 3.53    | 4.32          |
| vapr                     | ✓      | 25846.8    | 3.77    | 3.67          |
| restify                  | ✓      | 24074.0    | 4.06    | 3.81          |
| koa-router               | ✓      | 24037.2    | 4.07    | 3.76          |
| total.js                 | ✓      | 23236.8    | 4.20    | 6.60          |
| microrouter              | ✓      | 19611.2    | 5.00    | 3.07          |
| hapi                     | ✓      | 18906.9    | 5.22    | 2.96          |
| egg.js                   | ✓      | 14001.6    | 7.06    | 4.62          |
| fastify-big-json         | ✓      | 8878.8     | 11.12   | 101.95        |
| express                  | ✓      | 8271.9     | 11.93   | 1.29          |
| express-route-prefix     | ✓      | 7955.5     | 12.47   | 2.77          |
| express-with-middlewares | ✓      | 7029.0     | 14.07   | 2.54          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
