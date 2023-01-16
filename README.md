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
* __Run:__ Mon Jan 16 2023 01:49:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 57212.0    | 16.95        | 10.20         |
| bare                     | 10.13.0 | ✗      | 52540.0    | 18.53        | 9.37          |
| polka                    | 0.5.2   | ✓      | 51182.4    | 19.05        | 9.13          |
| fastify                  | 4.11.0  | ✓      | 49518.4    | 19.70        | 8.88          |
| server-base-router       | 7.1.32  | ✓      | 49503.2    | 19.71        | 8.83          |
| connect                  | 3.7.0   | ✗      | 49311.2    | 19.78        | 8.79          |
| server-base              | 7.1.32  | ✗      | 49139.2    | 19.86        | 8.76          |
| yeps                     | 1.1.1   | ✗      | 48312.0    | 20.19        | 8.62          |
| restana                  | 4.9.7   | ✓      | 47717.6    | 20.45        | 8.51          |
| connect-router           | 1.3.7   | ✓      | 46802.4    | 20.87        | 8.35          |
| vapr                     | 0.6.0   | ✓      | 45050.4    | 21.72        | 7.39          |
| spirit                   | 0.6.1   | ✗      | 43695.2    | 22.41        | 7.79          |
| spirit-router            | 0.5.0   | ✓      | 42792.8    | 22.88        | 7.63          |
| h3                       | 1.0.2   | ✗      | 42090.4    | 23.25        | 6.90          |
| h3-router                | 1.0.2   | ✓      | 41475.2    | 23.63        | 6.80          |
| koa                      | 2.14.1  | ✗      | 40302.4    | 24.30        | 7.19          |
| 0http                    | v3.4.2  | ✓      | 39964.0    | 24.54        | 7.13          |
| yeps-router              | 1.2.0   | ✓      | 38413.4    | 25.53        | 6.85          |
| take-five                | 2.0.0   | ✓      | 37604.8    | 26.09        | 13.52         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37266.2    | 26.35        | 6.65          |
| restify                  | 10.0.0  | ✓      | 36820.2    | 26.64        | 6.64          |
| koa-router               | 12.0.0  | ✓      | 35335.0    | 27.84        | 6.30          |
| hapi                     | 21.2.0  | ✓      | 33344.8    | 29.49        | 5.95          |
| express                  | 4.18.2  | ✓      | 11937.2    | 83.21        | 2.13          |
| express-with-middlewares | 4.18.2  | ✓      | 10349.0    | 96.02        | 3.85          |
| fastify-big-json         | 4.11.0  | ✓      | 9442.9     | 105.34       | 108.64        |
| trpc-router              | 10.9.0  | ✓      | 6591.6     | 150.97       | 1.97          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
