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
* __Machine:__ Linux fv-az59 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Mon Aug 17 00:13:39 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | :-:    | --:        | --:     |
| polkadot                 | 1.0.0   | ✗      | 60434.4    | 1.54    | 9.45          |
| fastify                  | 3.2.0   | ✓      | 58104.0    | 1.63    | 9.09          |
| bare                     | 10.13.0 | ✗      | 53604.8    | 1.78    | 8.38          |
| polka                    | 0.5.2   | ✓      | 53230.4    | 1.79    | 8.32          |
| foxify                   | 0.10.20 | ✓      | 52699.2    | 1.81    | 7.49          |
| yeps                     | 1.1.1   | ✗      | 52548.0    | 1.82    | 8.22          |
| connect                  | 3.7.0   | ✗      | 51288.0    | 1.86    | 8.02          |
| micro                    | 9.3.4   | ✗      | 51144.0    | 1.87    | 8.00          |
| rayo                     | 1.3.5   | ✓      | 50793.6    | 1.88    | 7.94          |
| trek-engine              | 1.0.5   | ✗      | 48248.8    | 1.99    | 6.86          |
| server-base-router       | 6.1.5   | ✓      | 47186.4    | 2.03    | 7.38          |
| connect-router           | 1.3.5   | ✓      | 47103.2    | 2.03    | 7.37          |
| micro-route              | 2.5.0   | ✓      | 46484.0    | 2.06    | 7.27          |
| server-base              | 6.1.5   | ✗      | 46240.0    | 2.07    | 7.23          |
| trek-router              | 1.2.0   | ✓      | 45951.2    | 2.10    | 6.53          |
| yeps-router              | 1.2.0   | ✓      | 42478.4    | 2.27    | 6.64          |
| vapr                     | 0.5.5   | ✓      | 42464.8    | 2.27    | 6.03          |
| spirit                   | 0.6.1   | ✗      | 41448.8    | 1.94    | 6.48          |
| spirit-router            | 0.5.0   | ✓      | 41177.6    | 1.99    | 6.44          |
| total.js                 | 3.4.5   | ✓      | 39558.4    | 2.44    | 11.24         |
| koa                      | 2.13.0  | ✗      | 39212.6    | 2.47    | 6.13          |
| koa-router               | 7.4.0   | ✓      | 35598.6    | 2.73    | 5.57          |
| restify                  | 8.5.1   | ✓      | 34856.2    | 2.78    | 5.52          |
| microrouter              | 3.1.3   | ✓      | 27798.0    | 3.50    | 4.35          |
| hapi                     | 18.4.1  | ✓      | 23355.2    | 4.20    | 3.65          |
| egg.js                   | 2.27.0  | ✓      | 19529.3    | 5.05    | 6.44          |
| express                  | 4.17.1  | ✓      | 11116.4    | 8.87    | 1.74          |
| fastify-big-json         | 3.2.0   | ✓      | 10251.8    | 9.62    | 117.72        |
| express-route-prefix     | 4.17.1  | ✓      | 10001.4    | 9.91    | 3.48          |
| express-with-middlewares | 4.17.1  | ✓      | 9504.0     | 10.38   | 3.44          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
