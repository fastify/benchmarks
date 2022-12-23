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
* For metrics (cold-start) see [metrics.md](./METRICS.md)

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
* __Node:__ `v18.12.1`
* __Run:__ Fri Dec 23 2022 13:42:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 54164.0    | 17.97        | 9.66          |
| bare                     | 10.13.0 | ✗      | 51296.8    | 19.01        | 9.15          |
| polka                    | 0.5.2   | ✓      | 50170.4    | 19.44        | 8.95          |
| micro                    | 9.4.1   | ✗      | 48740.0    | 20.02        | 8.69          |
| h3-router                | 0.8.6   | ✓      | 48266.4    | 20.22        | 7.92          |
| foxify                   | 0.10.20 | ✓      | 48250.4    | 20.23        | 7.91          |
| connect                  | 3.7.0   | ✗      | 48028.8    | 20.33        | 8.56          |
| 0http                    | v3.4.2  | ✓      | 47050.4    | 20.77        | 8.39          |
| server-base-router       | 7.1.32  | ✓      | 46590.4    | 20.96        | 8.31          |
| yeps                     | 1.1.1   | ✗      | 46423.2    | 21.05        | 8.28          |
| server-base              | 7.1.32  | ✗      | 46345.6    | 21.08        | 8.26          |
| micro-route              | 2.5.0   | ✓      | 44758.4    | 21.84        | 7.98          |
| connect-router           | 1.3.7   | ✓      | 44042.4    | 22.21        | 7.85          |
| restana                  | 4.9.7   | ✓      | 43003.2    | 22.75        | 7.67          |
| vapr                     | 0.6.0   | ✓      | 42149.6    | 23.22        | 6.91          |
| spirit                   | 0.6.1   | ✗      | 39506.6    | 24.82        | 7.05          |
| trek-engine              | 1.0.5   | ✗      | 38754.2    | 25.33        | 6.36          |
| spirit-router            | 0.5.0   | ✓      | 37881.0    | 25.91        | 6.76          |
| koa                      | 2.14.1  | ✗      | 37716.2    | 26.02        | 6.73          |
| trek-router              | 1.2.0   | ✓      | 37483.4    | 26.18        | 6.15          |
| yeps-router              | 1.2.0   | ✓      | 35917.4    | 27.34        | 6.41          |
| take-five                | 2.0.0   | ✓      | 35774.6    | 27.45        | 12.86         |
| h3                       | 0.8.6   | ✗      | 35494.6    | 27.70        | 5.82          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34581.8    | 28.42        | 6.17          |
| koa-router               | 12.0.0  | ✓      | 31781.2    | 30.96        | 5.67          |
| microrouter              | 3.1.3   | ✓      | 29607.6    | 33.27        | 5.28          |
| galatajs                 | 0.1.1   | ✓      | 14492.8    | 68.54        | 2.38          |
| egg.js                   | 3.9.2   | ✓      | 13340.4    | 74.41        | 4.77          |
| express                  | 4.18.2  | ✓      | 9991.5     | 99.49        | 1.78          |
| express-with-middlewares | 4.18.2  | ✓      | 8935.0     | 111.30       | 3.32          |
| express-route-prefix     | 4.18.2  | ✓      | 8758.5     | 113.57       | 3.24          |
| fastify-big-json         | 4.10.2  | ✓      | 8225.1     | 121.04       | 94.63         |
| fastify                  | 4.10.2  | ✓      | N/A        | N/A          | N/A           |
| hapi                     | 20.2.2  | ✓      | N/A        | N/A          | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 9.27.3  | ✓      | N/A        | N/A          | N/A           |
