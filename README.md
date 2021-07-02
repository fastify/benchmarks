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
* __Run:__ Fri Jul 02 2021 13:43:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 37768.4    | 26.04   | 6.74          |
| bare                     | 10.13.0 | ✗      | 34012.0    | 28.93   | 6.07          |
| 0http                    | 3.1.1   | ✓      | 33224.0    | 29.62   | 5.92          |
| polka                    | 0.5.2   | ✓      | 32397.0    | 30.38   | 5.78          |
| foxify                   | 0.10.20 | ✓      | 31999.4    | 30.75   | 5.25          |
| fastify                  | 3.18.1  | ✓      | 29979.2    | 32.85   | 5.35          |
| rayo                     | 1.3.6   | ✓      | 29899.4    | 32.96   | 5.33          |
| spirit                   | 0.6.1   | ✗      | 29422.8    | 33.60   | 5.25          |
| connect                  | 3.7.0   | ✗      | 29398.2    | 33.53   | 5.24          |
| yeps                     | 1.1.1   | ✗      | 29133.0    | 33.82   | 5.20          |
| micro                    | 9.3.4   | ✗      | 29127.0    | 33.84   | 5.19          |
| connect-router           | 1.3.5   | ✓      | 28915.2    | 34.08   | 5.16          |
| spirit-router            | 0.5.0   | ✓      | 28550.6    | 34.62   | 5.09          |
| trek-router              | 1.2.0   | ✓      | 27999.2    | 35.21   | 4.59          |
| server-base              | 7.1.27  | ✗      | 27372.8    | 36.03   | 4.88          |
| restana                  | 4.9.1   | ✓      | 27242.4    | 36.21   | 4.86          |
| server-base-router       | 7.1.27  | ✓      | 27008.8    | 36.52   | 4.82          |
| trek-engine              | 1.0.5   | ✗      | 26608.4    | 37.09   | 4.36          |
| micro-route              | 2.5.0   | ✓      | 25804.8    | 38.26   | 4.60          |
| vapr                     | 0.6.0   | ✓      | 24109.6    | 40.98   | 3.95          |
| yeps-router              | 1.2.0   | ✓      | 23444.4    | 42.15   | 4.18          |
| koa                      | 2.13.1  | ✗      | 22972.4    | 43.03   | 4.10          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21961.7    | 45.04   | 3.92          |
| koa-router               | 10.0.0  | ✓      | 21610.0    | 45.78   | 3.85          |
| restify                  | 8.5.1   | ✓      | 21090.8    | 46.90   | 3.80          |
| total.js                 | 3.4.9   | ✓      | 20067.2    | 49.33   | 6.14          |
| take-five                | 2.0.0   | ✓      | 19991.3    | 49.50   | 7.19          |
| hapi                     | 20.1.5  | ✓      | 18978.3    | 52.18   | 3.38          |
| microrouter              | 3.1.3   | ✓      | 16637.2    | 59.58   | 2.97          |
| egg.js                   | 2.29.4  | ✓      | 11659.6    | 85.24   | 4.10          |
| express                  | 4.17.1  | ✓      | 7236.7     | 137.56  | 1.29          |
| fastify-big-json         | 3.18.1  | ✓      | 6783.9     | 146.92  | 78.04         |
| express-route-prefix     | 4.17.1  | ✓      | 6406.8     | 155.32  | 2.37          |
| express-with-middlewares | 4.17.1  | ✓      | 6243.1     | 159.50  | 2.32          |
