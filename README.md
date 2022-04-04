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
* __Node:__ `v14.19.0`
* __Run:__ Mon Apr 04 2022 01:51:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65050.8    | 14.91   | 11.60         |
| micro                    | 9.3.4   | ✗      | 60693.6    | 15.99   | 10.82         |
| bare                     | 10.13.0 | ✗      | 60487.2    | 16.06   | 10.79         |
| server-base              | 7.1.32  | ✗      | 60312.0    | 16.05   | 10.76         |
| polka                    | 0.5.2   | ✓      | 59800.8    | 16.24   | 10.66         |
| foxify                   | 0.10.20 | ✓      | 59523.2    | 16.32   | 9.76          |
| 0http                    | 3.1.2   | ✓      | 58164.8    | 16.70   | 10.37         |
| fastify                  | 3.27.4  | ✓      | 56779.2    | 17.13   | 10.13         |
| connect                  | 3.7.0   | ✗      | 55113.6    | 17.66   | 9.83          |
| restana                  | 4.9.3   | ✓      | 52423.2    | 18.59   | 9.35          |
| rayo                     | 1.3.10  | ✓      | 51350.4    | 18.98   | 9.16          |
| yeps                     | 1.1.1   | ✗      | 50535.2    | 19.29   | 9.01          |
| connect-router           | 1.3.6   | ✓      | 48616.8    | 20.08   | 8.67          |
| micro-route              | 2.5.0   | ✓      | 47760.8    | 20.44   | 8.52          |
| server-base-router       | 7.1.32  | ✓      | 46943.2    | 20.80   | 8.37          |
| trek-engine              | 1.0.5   | ✗      | 45224.8    | 21.61   | 7.42          |
| trek-router              | 1.2.0   | ✓      | 44822.4    | 21.83   | 7.35          |
| vapr                     | 0.6.0   | ✓      | 43028.0    | 22.75   | 7.06          |
| yeps-router              | 1.2.0   | ✓      | 41135.2    | 23.81   | 7.34          |
| spirit-router            | 0.5.0   | ✓      | 40414.4    | 24.25   | 7.21          |
| spirit                   | 0.6.1   | ✗      | 40320.0    | 24.31   | 7.19          |
| koa                      | 2.13.4  | ✗      | 38181.8    | 25.69   | 6.81          |
| total.js                 | 3.4.13  | ✓      | 38085.4    | 25.76   | 11.66         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 38023.0    | 25.80   | 6.78          |
| take-five                | 2.0.0   | ✓      | 37647.0    | 26.07   | 13.54         |
| koa-router               | 10.1.1  | ✓      | 36967.8    | 26.55   | 6.59          |
| restify                  | 8.6.1   | ✓      | 35393.4    | 27.74   | 6.38          |
| hapi                     | 20.2.1  | ✓      | 32892.4    | 29.89   | 5.87          |
| microrouter              | 3.1.3   | ✓      | 30922.0    | 31.83   | 5.51          |
| egg.js                   | 2.35.0  | ✓      | 19266.0    | 51.40   | 6.89          |
| express                  | 4.17.3  | ✓      | 12636.4    | 78.60   | 2.25          |
| express-with-middlewares | 4.17.3  | ✓      | 11057.4    | 89.87   | 4.11          |
| express-route-prefix     | 4.17.3  | ✓      | 11050.5    | 89.86   | 4.09          |
| fastify-big-json         | 3.27.4  | ✓      | 10751.2    | 92.47   | 123.68        |
