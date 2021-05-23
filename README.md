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
* __Node:__ `v14.17.0`
* __Run:__ Sun May 23 2021 09:46:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 41291.4    | 23.76   | 7.36          |
| bare                     | 10.13.0 | ✗      | 38654.4    | 25.38   | 6.89          |
| 0http                    | 3.1.1   | ✓      | 38062.6    | 25.79   | 6.79          |
| foxify                   | 0.10.20 | ✓      | 36565.4    | 26.85   | 6.00          |
| micro                    | 9.3.4   | ✗      | 36433.0    | 26.97   | 6.50          |
| fastify                  | 3.15.1  | ✓      | 36082.2    | 27.22   | 6.43          |
| polka                    | 0.5.2   | ✓      | 35870.6    | 27.38   | 6.40          |
| rayo                     | 1.3.6   | ✓      | 35453.8    | 27.71   | 6.32          |
| server-base-router       | 7.1.27  | ✓      | 35264.6    | 27.86   | 6.29          |
| spirit-router            | 0.5.0   | ✓      | 33722.8    | 29.24   | 6.01          |
| connect                  | 3.7.0   | ✗      | 33719.2    | 29.16   | 6.01          |
| spirit                   | 0.6.1   | ✗      | 32803.8    | 30.04   | 5.85          |
| restana                  | 4.9.1   | ✓      | 32676.6    | 30.13   | 5.83          |
| yeps                     | 1.1.1   | ✗      | 32520.8    | 30.26   | 5.80          |
| micro-route              | 2.5.0   | ✓      | 31979.4    | 30.78   | 5.70          |
| connect-router           | 1.3.5   | ✓      | 31566.6    | 31.19   | 5.63          |
| server-base              | 7.1.27  | ✗      | 31565.0    | 31.19   | 5.63          |
| trek-engine              | 1.0.5   | ✗      | 30468.4    | 32.31   | 5.00          |
| trek-router              | 1.2.0   | ✓      | 30255.2    | 32.55   | 4.96          |
| yeps-router              | 1.2.0   | ✓      | 28302.8    | 34.82   | 5.05          |
| vapr                     | 0.6.0   | ✓      | 27486.0    | 35.88   | 4.51          |
| koa                      | 2.13.1  | ✗      | 27077.2    | 36.43   | 4.83          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 24427.6    | 40.44   | 4.36          |
| total.js                 | 3.4.8   | ✓      | 24169.2    | 40.86   | 7.40          |
| restify                  | 8.5.1   | ✓      | 23995.6    | 41.16   | 4.32          |
| take-five                | 2.0.0   | ✓      | 22675.6    | 43.58   | 8.15          |
| koa-router               | 10.0.0  | ✓      | 21751.6    | 45.46   | 3.88          |
| hapi                     | 20.1.3  | ✓      | 19973.7    | 49.56   | 3.56          |
| microrouter              | 3.1.3   | ✓      | 19245.9    | 51.43   | 3.43          |
| egg.js                   | 2.29.4  | ✓      | 12840.6    | 77.34   | 4.52          |
| express                  | 4.17.1  | ✓      | 8310.5     | 119.73  | 1.48          |
| fastify-big-json         | 3.15.1  | ✓      | 7752.6     | 128.60  | 89.18         |
| express-route-prefix     | 4.17.1  | ✓      | 7221.8     | 137.80  | 2.67          |
| express-with-middlewares | 4.17.1  | ✓      | 7019.5     | 141.79  | 2.61          |
