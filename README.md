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
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 20 2022 02:06:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 33172.8    | 29.73   | 5.92          |
| bare                     | 10.13.0 | ✗      | 33166.2    | 29.73   | 5.91          |
| server-base-router       | 7.1.32  | ✓      | 32720.8    | 30.14   | 5.83          |
| rayo                     | 1.3.10  | ✓      | 32581.2    | 30.23   | 5.81          |
| fastify                  | 4.0.3   | ✓      | 32487.0    | 30.36   | 5.82          |
| micro                    | 9.3.4   | ✗      | 32465.2    | 30.36   | 5.79          |
| connect                  | 3.7.0   | ✗      | 31973.4    | 30.83   | 5.70          |
| polka                    | 0.5.2   | ✓      | 31508.4    | 31.26   | 5.62          |
| spirit-router            | 0.5.0   | ✓      | 31463.0    | 31.44   | 5.61          |
| server-base              | 7.1.32  | ✗      | 30559.8    | 32.25   | 5.45          |
| trek-engine              | 1.0.5   | ✗      | 29897.2    | 32.99   | 4.90          |
| 0http                    | 3.4.1   | ✓      | 29797.0    | 33.11   | 5.31          |
| foxify                   | 0.10.20 | ✓      | 29775.2    | 33.09   | 4.88          |
| spirit                   | 0.6.1   | ✗      | 29198.6    | 33.83   | 5.21          |
| restana                  | 4.9.6   | ✓      | 28132.0    | 35.06   | 5.02          |
| yeps                     | 1.1.1   | ✗      | 27817.6    | 35.45   | 4.96          |
| connect-router           | 1.3.7   | ✓      | 27546.0    | 35.83   | 4.91          |
| micro-route              | 2.5.0   | ✓      | 27427.6    | 35.95   | 4.89          |
| yeps-router              | 1.2.0   | ✓      | 25679.2    | 38.44   | 4.58          |
| trek-router              | 1.2.0   | ✓      | 24686.0    | 40.01   | 4.05          |
| vapr                     | 0.6.0   | ✓      | 24477.6    | 40.34   | 4.02          |
| take-five                | 2.0.0   | ✓      | 23339.2    | 42.33   | 8.39          |
| koa                      | 2.13.4  | ✗      | 22659.2    | 43.62   | 4.04          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 22424.0    | 44.08   | 4.00          |
| koa-router               | 10.1.1  | ✓      | 22403.6    | 44.12   | 4.00          |
| total.js                 | 3.4.13  | ✓      | 21302.4    | 46.45   | 6.52          |
| restify                  | 8.6.1   | ✓      | 20804.7    | 47.55   | 3.75          |
| hapi                     | 20.2.2  | ✓      | 19621.5    | 50.46   | 3.50          |
| microrouter              | 3.1.3   | ✓      | 17162.8    | 57.73   | 3.06          |
| egg.js                   | 2.36.0  | ✓      | 11467.5    | 86.64   | 4.10          |
| fastify-big-json         | 4.0.3   | ✓      | 7923.6     | 125.70  | 91.16         |
| express                  | 4.18.1  | ✓      | 7802.6     | 127.54  | 1.39          |
| express-route-prefix     | 4.18.1  | ✓      | 7072.7     | 140.76  | 2.62          |
| express-with-middlewares | 4.18.1  | ✓      | 6933.5     | 143.50  | 2.58          |
