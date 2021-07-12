<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

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
* __Node:__ `v14.17.1`
* __Run:__ Mon Jul 12 2021 01:25:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65715.2    | 14.75   | 11.72         |
| bare                     | 10.13.0 | ✗      | 64524.8    | 15.02   | 11.51         |
| foxify                   | 0.10.20 | ✓      | 63579.2    | 15.25   | 10.43         |
| polka                    | 0.5.2   | ✓      | 63112.8    | 15.37   | 11.26         |
| fastify                  | 3.19.0  | ✓      | 63007.2    | 15.39   | 11.24         |
| connect                  | 3.7.0   | ✗      | 62023.2    | 15.59   | 11.06         |
| micro                    | 9.3.4   | ✗      | 61644.0    | 15.72   | 10.99         |
| 0http                    | 3.1.1   | ✓      | 60597.6    | 16.01   | 10.81         |
| server-base-router       | 7.1.27  | ✓      | 60581.6    | 16.02   | 10.80         |
| rayo                     | 1.3.6   | ✓      | 59590.4    | 16.28   | 10.63         |
| server-base              | 7.1.27  | ✗      | 59099.2    | 16.41   | 10.54         |
| yeps                     | 1.1.1   | ✗      | 57965.6    | 16.75   | 10.34         |
| connect-router           | 1.3.5   | ✓      | 57342.4    | 16.95   | 10.23         |
| micro-route              | 2.5.0   | ✓      | 55687.2    | 17.48   | 9.93          |
| restana                  | 4.9.1   | ✓      | 55609.6    | 17.45   | 9.92          |
| trek-engine              | 1.0.5   | ✗      | 53298.4    | 18.26   | 8.74          |
| trek-router              | 1.2.0   | ✓      | 53168.0    | 18.31   | 8.72          |
| vapr                     | 0.6.0   | ✓      | 51756.0    | 18.83   | 8.49          |
| koa                      | 2.13.1  | ✗      | 47573.6    | 20.52   | 8.48          |
| yeps-router              | 1.2.0   | ✓      | 45110.4    | 21.65   | 8.04          |
| spirit-router            | 0.5.0   | ✓      | 44014.4    | 22.24   | 7.85          |
| spirit                   | 0.6.1   | ✗      | 43522.4    | 22.49   | 7.76          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 42044.8    | 23.31   | 7.50          |
| total.js                 | 3.4.9   | ✓      | 41954.4    | 23.34   | 12.84         |
| take-five                | 2.0.0   | ✓      | 41141.6    | 23.82   | 14.79         |
| koa-router               | 10.0.0  | ✓      | 41038.4    | 23.88   | 7.32          |
| restify                  | 8.5.1   | ✓      | 39340.0    | 24.90   | 7.09          |
| hapi                     | 20.1.5  | ✓      | 32789.0    | 30.00   | 5.85          |
| microrouter              | 3.1.3   | ✓      | 31482.4    | 31.26   | 5.61          |
| egg.js                   | 2.29.4  | ✓      | 19752.3    | 50.12   | 6.95          |
| express                  | 4.17.1  | ✓      | 12303.6    | 80.73   | 2.19          |
| express-with-middlewares | 4.17.1  | ✓      | 11016.4    | 90.20   | 4.10          |
| fastify-big-json         | 3.19.0  | ✓      | 10676.6    | 93.29   | 122.83        |
| express-route-prefix     | 4.17.1  | ✓      | 10648.5    | 93.34   | 3.94          |
