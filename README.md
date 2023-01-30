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
* __Node:__ `v18.13.0`
* __Run:__ Mon Jan 30 2023 01:46:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 57440.8    | 16.91        | 10.24         |
| bare                     | 10.13.0 | ✗      | 52380.0    | 18.58        | 9.34          |
| fastify                  | 4.12.0  | ✓      | 51988.0    | 18.73        | 9.32          |
| connect                  | 3.7.0   | ✗      | 50772.8    | 19.21        | 9.05          |
| polka                    | 0.5.2   | ✓      | 50760.8    | 19.21        | 9.05          |
| server-base              | 7.1.32  | ✗      | 49561.6    | 19.68        | 8.84          |
| server-base-router       | 7.1.32  | ✓      | 49385.6    | 19.76        | 8.81          |
| yeps                     | 1.1.1   | ✗      | 48624.0    | 20.07        | 8.67          |
| connect-router           | 1.3.7   | ✓      | 48012.8    | 20.34        | 8.56          |
| restana                  | 4.9.7   | ✓      | 45868.8    | 21.31        | 8.18          |
| vapr                     | 0.6.0   | ✓      | 45745.6    | 21.40        | 7.50          |
| spirit                   | 0.6.1   | ✗      | 45528.8    | 21.46        | 8.12          |
| spirit-router            | 0.5.0   | ✓      | 43940.8    | 22.27        | 7.84          |
| h3                       | 1.1.0   | ✗      | 42587.2    | 22.99        | 6.99          |
| h3-router                | 1.1.0   | ✓      | 41832.0    | 23.43        | 6.86          |
| koa                      | 2.14.1  | ✗      | 39891.0    | 24.56        | 7.11          |
| 0http                    | v3.4.2  | ✓      | 39794.4    | 24.64        | 7.10          |
| yeps-router              | 1.2.0   | ✓      | 39065.6    | 25.12        | 6.97          |
| take-five                | 2.0.0   | ✓      | 38186.2    | 25.68        | 13.73         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37809.0    | 25.95        | 6.74          |
| restify                  | 11.0.0  | ✓      | 36983.0    | 26.53        | 6.67          |
| koa-router               | 12.0.0  | ✓      | 35326.8    | 27.82        | 6.30          |
| hapi                     | 21.2.0  | ✓      | 33829.6    | 29.05        | 6.03          |
| express                  | 4.18.2  | ✓      | 11900.6    | 83.48        | 2.12          |
| fastify-big-json         | 4.12.0  | ✓      | 10936.2    | 90.92        | 125.81        |
| express-with-middlewares | 4.18.2  | ✓      | 10507.6    | 94.62        | 3.91          |
| trpc-router              | 10.9.0  | ✓      | 6649.4     | 149.68       | 1.98          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
