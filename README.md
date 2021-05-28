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
* __Node:__ `v14.17.0`
* __Run:__ Thu May 27 2021 11:30:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65047.6    | 14.89   | 11.60         |
| bare                     | 10.13.0 | ✗      | 64435.2    | 15.04   | 11.49         |
| fastify                  | 3.16.2  | ✓      | 63476.0    | 15.28   | 11.32         |
| foxify                   | 0.10.20 | ✓      | 63312.8    | 15.31   | 10.39         |
| polka                    | 0.5.2   | ✓      | 62920.8    | 15.42   | 11.22         |
| 0http                    | 3.1.1   | ✓      | 61711.2    | 15.71   | 11.01         |
| rayo                     | 1.3.6   | ✓      | 61458.4    | 15.78   | 10.96         |
| micro                    | 9.3.4   | ✗      | 60822.4    | 15.94   | 10.85         |
| connect                  | 3.7.0   | ✗      | 59984.0    | 16.19   | 10.70         |
| server-base-router       | 7.1.27  | ✓      | 59692.8    | 16.26   | 10.65         |
| server-base              | 7.1.27  | ✗      | 59492.8    | 16.31   | 10.61         |
| restana                  | 4.9.1   | ✓      | 57815.2    | 16.80   | 10.31         |
| yeps                     | 1.1.1   | ✗      | 57322.4    | 16.95   | 10.22         |
| connect-router           | 1.3.5   | ✓      | 57284.8    | 16.96   | 10.22         |
| micro-route              | 2.5.0   | ✓      | 57268.8    | 16.97   | 10.21         |
| trek-engine              | 1.0.5   | ✗      | 54736.8    | 17.78   | 8.98          |
| trek-router              | 1.2.0   | ✓      | 53257.6    | 18.29   | 8.74          |
| vapr                     | 0.6.0   | ✓      | 50073.6    | 19.48   | 8.21          |
| koa                      | 2.13.1  | ✗      | 45115.2    | 21.67   | 8.05          |
| yeps-router              | 1.2.0   | ✓      | 45107.8    | 21.67   | 8.04          |
| total.js                 | 3.4.8   | ✓      | 43077.6    | 22.72   | 13.19         |
| spirit                   | 0.6.1   | ✗      | 43014.4    | 22.76   | 7.67          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 42168.8    | 23.22   | 7.52          |
| spirit-router            | 0.5.0   | ✓      | 42077.6    | 23.29   | 7.50          |
| take-five                | 2.0.0   | ✓      | 41185.6    | 23.79   | 14.81         |
| koa-router               | 10.0.0  | ✓      | 40214.4    | 24.35   | 7.17          |
| restify                  | 8.5.1   | ✓      | 39588.2    | 24.78   | 7.14          |
| hapi                     | 20.1.3  | ✓      | 32485.8    | 30.29   | 5.79          |
| microrouter              | 3.1.3   | ✓      | 31709.6    | 31.03   | 5.65          |
| egg.js                   | 2.29.4  | ✓      | 19418.9    | 50.98   | 6.83          |
| express                  | 4.17.1  | ✓      | 12268.2    | 80.96   | 2.19          |
| express-with-middlewares | 4.17.1  | ✓      | 10600.8    | 93.76   | 3.94          |
| express-route-prefix     | 4.17.1  | ✓      | 10500.9    | 94.68   | 3.89          |
| fastify-big-json         | 3.16.2  | ✓      | 10321.2    | 96.38   | 118.73        |
