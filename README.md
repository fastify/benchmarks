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
* __Node:__ `v14.18.0`
* __Run:__ Mon Oct 11 2021 01:32:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 57293.6    | 16.95   | 10.22         |
| foxify                   | 0.10.20 | ✓      | 56499.2    | 17.20   | 9.27          |
| fastify                  | 3.22.0  | ✓      | 56056.0    | 17.34   | 10.00         |
| 0http                    | 3.1.1   | ✓      | 56043.2    | 17.36   | 9.99          |
| bare                     | 10.13.0 | ✗      | 55276.0    | 17.60   | 9.86          |
| micro                    | 9.3.4   | ✗      | 55191.2    | 17.61   | 9.84          |
| connect                  | 3.7.0   | ✗      | 54913.6    | 17.72   | 9.79          |
| rayo                     | 1.3.6   | ✓      | 54546.4    | 17.84   | 9.73          |
| polka                    | 0.5.2   | ✓      | 54056.0    | 18.01   | 9.64          |
| server-base-router       | 7.1.29  | ✓      | 51620.0    | 18.87   | 9.21          |
| restana                  | 4.9.1   | ✓      | 50431.2    | 19.29   | 8.99          |
| server-base              | 7.1.29  | ✗      | 50231.2    | 19.41   | 8.96          |
| yeps                     | 1.1.1   | ✗      | 49799.2    | 19.58   | 8.88          |
| connect-router           | 1.3.5   | ✓      | 48950.4    | 19.93   | 8.73          |
| micro-route              | 2.5.0   | ✓      | 48090.4    | 20.30   | 8.58          |
| trek-engine              | 1.0.5   | ✗      | 45717.8    | 21.38   | 7.50          |
| trek-router              | 1.2.0   | ✓      | 44953.4    | 21.74   | 7.37          |
| vapr                     | 0.6.0   | ✓      | 43116.8    | 22.69   | 7.07          |
| yeps-router              | 1.2.0   | ✓      | 41696.0    | 23.48   | 7.44          |
| koa                      | 2.13.3  | ✗      | 40577.4    | 24.14   | 7.24          |
| spirit                   | 0.6.1   | ✗      | 38736.8    | 25.32   | 6.91          |
| take-five                | 2.0.0   | ✓      | 37333.4    | 26.29   | 13.42         |
| spirit-router            | 0.5.0   | ✓      | 36998.4    | 26.55   | 6.60          |
| total.js                 | 3.4.10  | ✓      | 36790.6    | 26.67   | 11.26         |
| koa-router               | 10.1.1  | ✓      | 36242.2    | 27.09   | 6.46          |
| restify                  | 8.6.0   | ✓      | 34980.6    | 28.09   | 6.31          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31521.9    | 31.26   | 5.62          |
| microrouter              | 3.1.3   | ✓      | 22690.0    | 44.24   | 4.05          |
| hapi                     | 20.2.1  | ✓      | 20297.2    | 49.59   | 3.62          |
| egg.js                   | 2.30.0  | ✓      | 19420.5    | 50.98   | 6.83          |
| express                  | 4.17.1  | ✓      | 12259.6    | 81.01   | 2.19          |
| express-with-middlewares | 4.17.1  | ✓      | 10501.4    | 94.63   | 3.91          |
| express-route-prefix     | 4.17.1  | ✓      | 10065.0    | 98.77   | 3.72          |
| fastify-big-json         | 3.22.0  | ✓      | 9533.6     | 104.38  | 109.68        |
