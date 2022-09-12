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
* __Node:__ `v14.20.0`
* __Run:__ Mon Sep 12 2022 02:41:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 35204.2    | 27.92   | 6.28          |
| micro                    | 9.4.1   | ✗      | 33413.8    | 29.44   | 5.96          |
| rayo                     | 1.3.10  | ✓      | 32571.6    | 30.21   | 5.81          |
| foxify                   | 0.10.20 | ✓      | 32520.8    | 30.25   | 5.33          |
| fastify                  | 4.5.3   | ✓      | 31690.0    | 31.06   | 5.68          |
| server-base              | 7.1.32  | ✗      | 31324.4    | 31.42   | 5.59          |
| 0http                    | 3.4.1   | ✓      | 30999.2    | 31.77   | 5.53          |
| polka                    | 0.5.2   | ✓      | 30150.8    | 32.68   | 5.38          |
| bare                     | 10.13.0 | ✗      | 29340.4    | 33.62   | 5.23          |
| spirit-router            | 0.5.0   | ✓      | 28318.4    | 34.87   | 5.05          |
| connect                  | 3.7.0   | ✗      | 28145.6    | 35.03   | 5.02          |
| connect-router           | 1.3.7   | ✓      | 28014.4    | 35.20   | 5.00          |
| trek-engine              | 1.0.5   | ✗      | 27892.8    | 35.38   | 4.58          |
| server-base-router       | 7.1.32  | ✓      | 27816.4    | 35.45   | 4.96          |
| micro-route              | 2.5.0   | ✓      | 27251.6    | 36.18   | 4.86          |
| yeps                     | 1.1.1   | ✗      | 26216.8    | 37.64   | 4.68          |
| spirit                   | 0.6.1   | ✗      | 25129.6    | 39.37   | 4.48          |
| trek-router              | 1.2.0   | ✓      | 25124.8    | 39.30   | 4.12          |
| vapr                     | 0.6.0   | ✓      | 24746.0    | 39.93   | 4.06          |
| yeps-router              | 1.2.0   | ✓      | 24423.6    | 40.45   | 4.36          |
| koa                      | 2.13.4  | ✗      | 23618.0    | 41.83   | 4.21          |
| restana                  | 4.9.6   | ✓      | 22692.4    | 43.55   | 4.05          |
| restify                  | 8.6.1   | ✓      | 21809.6    | 45.35   | 3.93          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21195.6    | 46.68   | 3.78          |
| take-five                | 2.0.0   | ✓      | 21051.6    | 46.98   | 7.57          |
| total.js                 | 3.4.13  | ✓      | 20654.7    | 47.90   | 6.32          |
| koa-router               | 12.0.0  | ✓      | 19634.8    | 50.42   | 3.50          |
| hapi                     | 20.2.2  | ✓      | 18908.7    | 52.40   | 3.37          |
| trpc-router              | 9.27.2  | ✓      | 17895.1    | 55.38   | 3.96          |
| microrouter              | 3.1.3   | ✓      | 17722.3    | 55.91   | 3.16          |
| egg.js                   | 3.1.0   | ✓      | 11038.8    | 90.03   | 3.95          |
| express                  | 4.18.1  | ✓      | 7804.9     | 127.46  | 1.39          |
| fastify-big-json         | 4.5.3   | ✓      | 7273.2     | 137.14  | 83.68         |
| express-route-prefix     | 4.18.1  | ✓      | 6845.4     | 145.42  | 2.53          |
| express-with-middlewares | 4.18.1  | ✓      | 6667.7     | 149.24  | 2.48          |
