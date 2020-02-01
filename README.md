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
* __Machine:__ Linux fv-az12 5.0.0-1028-azure #30~18.04.1-Ubuntu SMP Fri Dec 6 11:47:59 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.14.1`
* __Run:__ Sat Feb  1 00:49:50 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| bare                     | ✗      | 50003.2    | 1.91    | 7.82          |
| connect-router           | ✓      | 34439.8    | 2.81    | 5.39          |
| connect                  | ✗      | 44805.6    | 2.14    | 7.01          |
| egg.js                   | ✓      | 17263.1    | 5.72    | 5.70          |
| express-route-prefix     | ✓      | 23777.6    | 4.11    | 8.28          |
| express-with-middlewares | ✓      | 19229.6    | 5.09    | 6.95          |
| express                  | ✓      | 23210.4    | 4.20    | 3.63          |
| fastify-big-json         | ✓      | 10184.3    | 9.68    | 116.94        |
| fastify                  | ✓      | 51004.0    | 1.87    | 7.98          |
| foxify                   | ✓      | 42444.8    | 2.26    | 6.03          |
| hapi                     | ✓      | 20384.4    | 4.81    | 3.19          |
| koa-router               | ✓      | 28282.0    | 3.45    | 4.42          |
| koa                      | ✗      | 29824.8    | 3.26    | 4.66          |
| micro-route              | ✓      | 37344.8    | 2.58    | 5.84          |
| micro                    | ✗      | 42960.8    | 2.23    | 6.72          |
| microrouter              | ✓      | 22015.2    | 4.43    | 3.44          |
| polka                    | ✓      | 47865.6    | 2.00    | 7.49          |
| polkadot                 | ✗      | 52680.8    | 1.78    | 8.24          |
| rayo                     | ✓      | 42944.0    | 2.24    | 6.72          |
| restify                  | ✓      | 34143.0    | 2.84    | 5.40          |
| server-base-router       | ✓      | 37999.8    | 2.54    | 5.94          |
| server-base              | ✗      | 37024.0    | 2.61    | 5.79          |
| spirit-router            | ✓      | 42336.8    | 2.02    | 6.62          |
| spirit                   | ✗      | 40491.2    | 2.14    | 6.33          |
| take-five                | ✓      | 0.0        | 0.00    | 0.00          |
| total.js                 | ✓      | 30028.8    | 3.23    | 7.85          |
| trek-engine              | ✗      | 37959.2    | 2.55    | 5.39          |
| trek-router              | ✓      | 36813.8    | 2.63    | 5.23          |
| vapr                     | ✓      | 31196.4    | 3.11    | 4.43          |
| yeps-router              | ✓      | 35697.0    | 2.71    | 5.58          |
| yeps                     | ✗      | 41424.0    | 2.32    | 6.48          |
