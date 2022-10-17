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
* __Node:__ `v14.20.1`
* __Run:__ Mon Oct 17 2022 02:49:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| micro                    | 9.4.1   | ✗      | 31325.2    | 31.42        | 5.59          |
| fastify                  | 4.8.1   | ✓      | 30338.0    | 32.46        | 5.44          |
| bare                     | 10.13.0 | ✗      | 29863.6    | 33.00        | 5.33          |
| foxify                   | 0.10.20 | ✓      | 29824.8    | 33.03        | 4.89          |
| connect                  | 3.7.0   | ✗      | 29785.4    | 33.09        | 5.31          |
| polkadot                 | 1.0.0   | ✗      | 29357.2    | 33.59        | 5.24          |
| 0http                    | 3.4.1   | ✓      | 29153.2    | 33.81        | 5.20          |
| server-base              | 7.1.32  | ✗      | 28722.0    | 34.32        | 5.12          |
| polka                    | 0.5.2   | ✓      | 28453.6    | 34.65        | 5.07          |
| h3                       | 0.8.1   | ✗      | 28056.4    | 35.16        | 4.60          |
| rayo                     | 1.3.10  | ✓      | 27996.4    | 35.23        | 4.99          |
| connect-router           | 1.3.7   | ✓      | 26451.6    | 37.31        | 4.72          |
| server-base-router       | 7.1.32  | ✓      | 26042.0    | 37.89        | 4.64          |
| yeps                     | 1.1.1   | ✗      | 25755.2    | 38.33        | 4.59          |
| micro-route              | 2.5.0   | ✓      | 25149.2    | 39.25        | 4.49          |
| spirit                   | 0.6.1   | ✗      | 24551.2    | 40.26        | 4.38          |
| trek-router              | 1.2.0   | ✓      | 24444.8    | 40.41        | 4.01          |
| spirit-router            | 0.5.0   | ✓      | 23961.9    | 41.27        | 4.27          |
| yeps-router              | 1.2.0   | ✓      | 23798.4    | 41.50        | 4.24          |
| trek-engine              | 1.0.5   | ✗      | 23730.0    | 41.65        | 3.89          |
| vapr                     | 0.6.0   | ✓      | 23468.0    | 42.12        | 3.85          |
| koa                      | 2.13.4  | ✗      | 21563.6    | 45.87        | 3.85          |
| take-five                | 2.0.0   | ✓      | 21531.6    | 45.95        | 7.74          |
| restana                  | 4.9.6   | ✓      | 21043.3    | 47.01        | 3.75          |
| restify                  | 8.6.1   | ✓      | 20493.3    | 48.28        | 3.69          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 19946.5    | 49.65        | 3.56          |
| total.js                 | 3.4.13  | ✓      | 19385.7    | 51.08        | 5.93          |
| koa-router               | 12.0.0  | ✓      | 19045.9    | 51.99        | 3.40          |
| hapi                     | 20.2.2  | ✓      | 18846.1    | 52.54        | 3.36          |
| trpc-router              | 9.27.4  | ✓      | 17593.9    | 56.33        | 3.89          |
| microrouter              | 3.1.3   | ✓      | 17517.9    | 56.55        | 3.12          |
| egg.js                   | 3.3.3   | ✓      | 11353.9    | 87.51        | 4.06          |
| express                  | 4.18.2  | ✓      | 7638.3     | 130.29       | 1.36          |
| fastify-big-json         | 4.8.1   | ✓      | 7163.7     | 139.08       | 82.42         |
| express-with-middlewares | 4.18.2  | ✓      | 6927.4     | 143.69       | 2.58          |
| express-route-prefix     | 4.18.2  | ✓      | 6732.1     | 147.92       | 2.49          |
