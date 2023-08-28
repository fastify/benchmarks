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
* __Node:__ `v18.17.1`
* __Run:__ Mon Aug 28 2023 01:37:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 39192.2    | 25.03        | 6.99          |
| fastify                  | 4.22.0  | ✓      | 39085.6    | 25.09        | 7.01          |
| polka                    | 0.5.2   | ✓      | 38611.4    | 25.41        | 6.89          |
| 0http                    | 3.5.2   | ✓      | 37960.2    | 25.86        | 6.77          |
| server-base              | 7.1.32  | ✗      | 37481.0    | 26.18        | 6.68          |
| server-base-router       | 7.1.32  | ✓      | 37464.6    | 26.19        | 6.68          |
| connect                  | 3.7.0   | ✗      | 37101.0    | 26.45        | 6.62          |
| yeps                     | 1.1.1   | ✗      | 36526.6    | 26.88        | 6.51          |
| h3-router                | 1.8.1   | ✓      | 36405.6    | 26.97        | 5.97          |
| connect-router           | 1.3.8   | ✓      | 35612.2    | 27.58        | 6.35          |
| spirit                   | 0.6.1   | ✗      | 34088.2    | 28.83        | 6.08          |
| restana                  | 4.9.7   | ✓      | 33394.2    | 29.43        | 5.96          |
| spirit-router            | 0.5.0   | ✓      | 33048.6    | 29.77        | 5.89          |
| vapr                     | 0.6.0   | ✓      | 32768.6    | 30.03        | 5.38          |
| polkadot                 | 1.0.0   | ✗      | 30160.8    | 32.67        | 5.38          |
| koa                      | 2.14.2  | ✗      | 30082.8    | 32.74        | 5.37          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 29071.6    | 33.90        | 5.18          |
| yeps-router              | 1.2.0   | ✓      | 28759.6    | 34.26        | 5.13          |
| take-five                | 2.0.0   | ✓      | 28082.0    | 35.10        | 10.10         |
| h3                       | 1.8.1   | ✗      | 27791.2    | 35.50        | 4.56          |
| restify                  | 11.1.0  | ✓      | 27014.0    | 36.51        | 4.87          |
| koa-router               | 12.0.0  | ✓      | 26892.4    | 36.69        | 4.80          |
| hapi                     | 21.3.2  | ✓      | 25633.2    | 38.52        | 4.57          |
| express                  | 4.18.2  | ✓      | 8308.2     | 119.74       | 1.48          |
| fastify-big-json         | 4.22.0  | ✓      | 8145.1     | 122.36       | 93.71         |
| express-with-middlewares | 4.18.2  | ✓      | 7409.7     | 134.31       | 2.76          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.0 | ✓      | N/A        | N/A          | N/A           |
