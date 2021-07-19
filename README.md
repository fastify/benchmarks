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
* __Node:__ `v14.17.3`
* __Run:__ Mon Jul 19 2021 01:29:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 40856.8    | 23.99   | 7.29          |
| fastify                  | 3.19.1  | ✓      | 39893.6    | 24.56   | 7.11          |
| 0http                    | 3.1.1   | ✓      | 39309.8    | 24.95   | 7.01          |
| foxify                   | 0.10.20 | ✓      | 39058.4    | 25.11   | 6.41          |
| rayo                     | 1.3.6   | ✓      | 38931.4    | 25.19   | 6.94          |
| connect                  | 3.7.0   | ✗      | 38879.2    | 25.23   | 6.93          |
| polkadot                 | 1.0.0   | ✗      | 38220.0    | 25.69   | 6.82          |
| micro                    | 9.3.4   | ✗      | 37435.0    | 26.22   | 6.68          |
| polka                    | 0.5.2   | ✓      | 37104.0    | 26.46   | 6.62          |
| server-base              | 7.1.27  | ✗      | 36910.2    | 26.60   | 6.58          |
| spirit                   | 0.6.1   | ✗      | 36717.8    | 26.80   | 6.55          |
| server-base-router       | 7.1.27  | ✓      | 34253.0    | 28.69   | 6.11          |
| yeps                     | 1.1.1   | ✗      | 33395.4    | 29.45   | 5.96          |
| restana                  | 4.9.1   | ✓      | 33268.8    | 29.56   | 5.93          |
| spirit-router            | 0.5.0   | ✓      | 33103.2    | 29.82   | 5.90          |
| connect-router           | 1.3.5   | ✓      | 32390.6    | 30.38   | 5.78          |
| trek-router              | 1.2.0   | ✓      | 30590.8    | 32.20   | 5.02          |
| micro-route              | 2.5.0   | ✓      | 29735.6    | 33.13   | 5.30          |
| trek-engine              | 1.0.5   | ✗      | 29605.2    | 33.29   | 4.86          |
| yeps-router              | 1.2.0   | ✓      | 28608.8    | 34.46   | 5.10          |
| koa                      | 2.13.1  | ✗      | 27152.4    | 36.32   | 4.84          |
| vapr                     | 0.6.0   | ✓      | 25672.4    | 38.46   | 4.21          |
| koa-router               | 10.0.0  | ✓      | 24879.6    | 39.71   | 4.44          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 24649.6    | 40.08   | 4.40          |
| restify                  | 8.5.1   | ✓      | 23897.6    | 41.34   | 4.31          |
| take-five                | 2.0.0   | ✓      | 22728.3    | 43.48   | 8.17          |
| total.js                 | 3.4.9   | ✓      | 22655.6    | 43.63   | 6.94          |
| hapi                     | 20.1.5  | ✓      | 21411.6    | 46.19   | 3.82          |
| microrouter              | 3.1.3   | ✓      | 18972.7    | 52.20   | 3.38          |
| egg.js                   | 2.29.4  | ✓      | 13482.0    | 73.69   | 4.74          |
| express                  | 4.17.1  | ✓      | 8733.9     | 113.89  | 1.56          |
| fastify-big-json         | 3.19.1  | ✓      | 8244.6     | 120.70  | 94.85         |
| express-route-prefix     | 4.17.1  | ✓      | 7770.3     | 128.04  | 2.88          |
| express-with-middlewares | 4.17.1  | ✓      | 7589.7     | 131.09  | 2.82          |
