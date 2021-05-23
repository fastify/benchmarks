<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
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

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Fri May 07 2021 15:03:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 40461.6    | 24.23   | 7.22          |
| polkadot                 | 1.0.0   | ✗      | 40353.6    | 24.32   | 7.20          |
| spirit-router            | 0.5.0   | ✓      | 40196.8    | 24.50   | 7.17          |
| 0http                    | 3.1.1   | ✓      | 40164.6    | 24.41   | 7.16          |
| micro                    | 9.3.4   | ✗      | 39412.8    | 24.87   | 7.03          |
| fastify                  | 3.15.1  | ✓      | 38901.6    | 25.20   | 6.94          |
| spirit                   | 0.6.1   | ✗      | 37741.4    | 26.10   | 6.73          |
| rayo                     | 1.3.6   | ✓      | 37381.4    | 26.25   | 6.67          |
| polka                    | 0.5.2   | ✓      | 36619.0    | 26.81   | 6.53          |
| server-base              | 7.1.27  | ✗      | 35939.8    | 27.32   | 6.41          |
| foxify                   | 0.10.20 | ✓      | 35637.4    | 27.56   | 5.85          |
| connect                  | 3.7.0   | ✗      | 35430.6    | 27.73   | 6.32          |
| server-base-router       | 7.1.27  | ✓      | 35104.2    | 27.98   | 6.26          |
| yeps                     | 1.1.1   | ✗      | 34802.6    | 28.24   | 6.21          |
| restana                  | 4.9.1   | ✓      | 34537.4    | 28.45   | 6.16          |
| connect-router           | 1.3.5   | ✓      | 33602.4    | 29.26   | 5.99          |
| trek-engine              | 1.0.5   | ✗      | 32797.0    | 30.00   | 5.38          |
| trek-router              | 1.2.0   | ✓      | 31766.2    | 30.98   | 5.21          |
| micro-route              | 2.5.0   | ✓      | 30891.2    | 31.87   | 5.51          |
| yeps-router              | 1.2.0   | ✓      | 30014.4    | 32.82   | 5.35          |
| koa                      | 2.13.1  | ✗      | 28576.0    | 34.49   | 5.10          |
| vapr                     | 0.6.0   | ✓      | 25892.8    | 38.13   | 4.25          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 25696.8    | 38.42   | 4.58          |
| koa-router               | 10.0.0  | ✓      | 24846.0    | 39.76   | 4.43          |
| restify                  | 8.5.1   | ✓      | 24450.0    | 40.39   | 4.41          |
| total.js                 | 3.4.8   | ✓      | 23344.4    | 42.32   | 7.15          |
| take-five                | 2.0.0   | ✓      | 23101.2    | 42.77   | 8.31          |
| hapi                     | 20.1.2  | ✓      | 20302.9    | 48.75   | 3.62          |
| microrouter              | 3.1.3   | ✓      | 19498.5    | 50.77   | 3.48          |
| egg.js                   | 2.29.4  | ✓      | 13083.2    | 75.92   | 4.60          |
| express                  | 4.17.1  | ✓      | 8458.5     | 117.61  | 1.51          |
| fastify-big-json         | 3.15.1  | ✓      | 8052.4     | 123.69  | 92.63         |
| express-route-prefix     | 4.17.1  | ✓      | 7484.3     | 133.02  | 2.77          |
| express-with-middlewares | 4.17.1  | ✓      | 7048.5     | 141.20  | 2.62          |
