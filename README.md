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
* __Machine:__ Linux fv-az60-112 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sat Nov 21 14:06:19 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.0.0   | ✓      | 63402.4    | 1.45    | 8.47          |
| fastify                  | 3.8.0   | ✓      | 61704.8    | 1.53    | 11.00         |
| polkadot                 | 1.0.0   | ✗      | 60897.6    | 1.52    | 10.86         |
| bare                     | 10.13.0 | ✗      | 58077.6    | 1.64    | 10.36         |
| rayo                     | 1.3.6   | ✓      | 56060.8    | 1.70    | 10.00         |
| foxify                   | 0.10.20 | ✓      | 55910.4    | 1.70    | 9.17          |
| polka                    | 0.5.2   | ✓      | 54868.8    | 1.74    | 9.79          |
| micro                    | 9.3.4   | ✗      | 54673.6    | 1.74    | 9.75          |
| connect                  | 3.7.0   | ✗      | 53918.4    | 1.77    | 9.62          |
| restana                  | 4.8.0   | ✓      | 51540.8    | 1.85    | 9.19          |
| yeps                     | 1.1.1   | ✗      | 49396.0    | 1.94    | 8.81          |
| connect-router           | 1.3.5   | ✓      | 49352.0    | 1.94    | 8.80          |
| server-base-router       | 6.1.5   | ✓      | 49152.0    | 1.95    | 8.77          |
| micro-route              | 2.5.0   | ✓      | 48840.8    | 1.96    | 8.71          |
| server-base              | 6.1.5   | ✗      | 48630.4    | 1.97    | 8.67          |
| trek-engine              | 1.0.5   | ✗      | 45825.6    | 2.10    | 7.52          |
| trek-router              | 1.2.0   | ✓      | 44738.2    | 2.15    | 7.34          |
| yeps-router              | 1.2.0   | ✓      | 41560.8    | 2.32    | 7.41          |
| vapr                     | 0.5.5   | ✓      | 40800.8    | 2.36    | 6.69          |
| spirit                   | 0.6.1   | ✗      | 40212.8    | 1.93    | 7.17          |
| koa                      | 2.13.0  | ✗      | 39712.4    | 2.43    | 7.08          |
| spirit-router            | 0.5.0   | ✓      | 38747.2    | 2.06    | 6.91          |
| total.js                 | 3.4.6   | ✓      | 38327.2    | 2.51    | 11.73         |
| koa-router               | 7.4.0   | ✓      | 36007.0    | 2.69    | 6.42          |
| restify                  | 8.5.1   | ✓      | 35467.4    | 2.73    | 6.39          |
| hapi                     | 20.0.2  | ✓      | 30759.2    | 3.16    | 5.49          |
| microrouter              | 3.1.3   | ✓      | 28641.6    | 3.39    | 5.11          |
| egg.js                   | 2.29.1  | ✓      | 19403.1    | 5.08    | 6.83          |
| express                  | 4.17.1  | ✓      | 11910.2    | 8.28    | 2.12          |
| express-with-middlewares | 4.17.1  | ✓      | 10050.4    | 9.81    | 3.85          |
| express-route-prefix     | 4.17.1  | ✓      | 9521.5     | 10.40   | 3.52          |
| fastify-big-json         | 3.8.0   | ✓      | 9478.1     | 10.41   | 109.05        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
