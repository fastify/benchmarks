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
* __Machine:__ Linux fv-az195-49 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.0`
* __Run:__ Fri Dec 18 14:46:31 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.2   | ✓      | 59497.6    | 16.33   | 10.61         |
| polkadot                 | 1.0.0   | ✗      | 57953.6    | 16.78   | 10.34         |
| 0http                    | 3.0.0   | ✓      | 56793.6    | 17.13   | 10.13         |
| foxify                   | 0.10.20 | ✓      | 56791.2    | 17.11   | 9.32          |
| polka                    | 0.5.2   | ✓      | 56612.8    | 17.17   | 10.10         |
| bare                     | 10.13.0 | ✗      | 56187.2    | 17.31   | 10.02         |
| connect                  | 3.7.0   | ✗      | 56161.6    | 17.32   | 10.02         |
| rayo                     | 1.3.6   | ✓      | 55842.4    | 17.41   | 9.96          |
| micro                    | 9.3.4   | ✗      | 54467.2    | 17.86   | 9.71          |
| server-base              | 7.1.23  | ✗      | 53969.6    | 18.04   | 9.63          |
| yeps                     | 1.1.1   | ✗      | 53053.6    | 18.35   | 9.46          |
| restana                  | 4.8.1   | ✓      | 51524.8    | 18.92   | 9.19          |
| server-base-router       | 6.1.5   | ✓      | 51450.4    | 18.94   | 9.18          |
| micro-route              | 2.5.0   | ✓      | 51389.6    | 18.97   | 9.17          |
| connect-router           | 1.3.5   | ✓      | 51156.0    | 19.07   | 9.12          |
| trek-engine              | 1.0.5   | ✗      | 46302.2    | 21.10   | 7.59          |
| trek-router              | 1.2.0   | ✓      | 46016.2    | 21.25   | 7.55          |
| koa                      | 2.13.0  | ✗      | 43025.6    | 22.75   | 7.67          |
| yeps-router              | 1.2.0   | ✓      | 42688.0    | 22.93   | 7.61          |
| vapr                     | 0.5.5   | ✓      | 41989.6    | 23.31   | 6.89          |
| spirit                   | 0.6.1   | ✗      | 40869.6    | 23.99   | 7.29          |
| spirit-router            | 0.5.0   | ✓      | 40082.4    | 24.47   | 7.15          |
| total.js                 | 3.4.6   | ✓      | 38704.8    | 25.34   | 11.85         |
| koa-router               | 10.0.0  | ✓      | 37140.2    | 26.43   | 6.62          |
| restify                  | 8.5.1   | ✓      | 36501.4    | 26.90   | 6.58          |
| hapi                     | 20.0.3  | ✓      | 30366.8    | 32.43   | 5.42          |
| microrouter              | 3.1.3   | ✓      | 27527.6    | 35.82   | 4.91          |
| egg.js                   | 2.29.1  | ✓      | 18839.2    | 52.59   | 6.63          |
| express                  | 4.17.1  | ✓      | 11387.0    | 87.26   | 2.03          |
| express-with-middlewares | 4.17.1  | ✓      | 10047.8    | 98.98   | 3.85          |
| express-route-prefix     | 4.17.1  | ✓      | 9186.3     | 108.29  | 3.40          |
| fastify-big-json         | 3.9.2   | ✓      | 9166.1     | 108.51  | 105.45        |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
