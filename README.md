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
* __Node:__ `v18.16.0`
* __Run:__ Mon May 08 2023 01:44:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 49156.0    | 19.86        | 8.77          |
| fastify                  | 4.17.0  | ✓      | 47707.2    | 20.46        | 8.55          |
| polka                    | 0.5.2   | ✓      | 47666.4    | 20.48        | 8.50          |
| connect                  | 3.7.0   | ✗      | 47002.4    | 20.77        | 8.38          |
| server-base-router       | 7.1.32  | ✓      | 46895.2    | 20.83        | 8.36          |
| server-base              | 7.1.32  | ✗      | 46636.8    | 20.95        | 8.32          |
| yeps                     | 1.1.1   | ✗      | 46147.2    | 21.17        | 8.23          |
| connect-router           | 1.3.8   | ✓      | 44058.4    | 22.20        | 7.86          |
| vapr                     | 0.6.0   | ✓      | 43682.4    | 22.39        | 7.17          |
| spirit                   | 0.6.1   | ✗      | 41759.2    | 23.45        | 7.45          |
| polkadot                 | 1.0.0   | ✗      | 40677.6    | 24.10        | 7.25          |
| spirit-router            | 0.5.0   | ✓      | 40337.6    | 24.29        | 7.19          |
| h3                       | 1.6.5   | ✗      | 38950.6    | 25.18        | 6.39          |
| 0http                    | 3.5.2   | ✓      | 38229.6    | 25.66        | 6.82          |
| h3-router                | 1.6.5   | ✓      | 38174.2    | 25.70        | 6.26          |
| koa                      | 2.14.2  | ✗      | 37675.0    | 26.06        | 6.72          |
| yeps-router              | 1.2.0   | ✓      | 36343.4    | 27.04        | 6.48          |
| take-five                | 2.0.0   | ✓      | 35866.2    | 27.38        | 12.89         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35808.2    | 27.43        | 6.39          |
| restana                  | 4.9.7   | ✓      | 35390.2    | 27.77        | 6.31          |
| restify                  | 11.1.0  | ✓      | 35052.4    | 28.03        | 6.32          |
| koa-router               | 12.0.0  | ✓      | 33755.4    | 29.13        | 6.02          |
| hapi                     | 21.3.2  | ✓      | 32025.2    | 30.70        | 5.71          |
| express                  | 4.18.2  | ✓      | 11273.8    | 88.15        | 2.01          |
| fastify-big-json         | 4.17.0  | ✓      | 10883.0    | 91.42        | 125.21        |
| express-with-middlewares | 4.18.2  | ✓      | 10043.6    | 98.97        | 3.74          |
| trpc-router              | 10.25.0 | ✓      | 6278.8     | 158.52       | 1.87          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
