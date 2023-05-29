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
* __Run:__ Mon May 29 2023 01:49:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 46996.0    | 20.82        | 8.38          |
| bare                     | 10.13.0 | ✗      | 46176.8    | 21.22        | 8.23          |
| polka                    | 0.5.2   | ✓      | 45042.4    | 21.73        | 8.03          |
| fastify                  | 4.17.0  | ✓      | 44314.4    | 22.09        | 7.95          |
| yeps                     | 1.1.1   | ✗      | 42778.4    | 22.87        | 7.63          |
| server-base              | 7.1.32  | ✗      | 42222.4    | 23.23        | 7.53          |
| server-base-router       | 7.1.32  | ✓      | 42010.4    | 23.35        | 7.49          |
| connect                  | 3.7.0   | ✗      | 41586.8    | 23.58        | 7.42          |
| connect-router           | 1.3.8   | ✓      | 40908.8    | 23.97        | 7.30          |
| vapr                     | 0.6.0   | ✓      | 40759.8    | 24.02        | 6.69          |
| spirit                   | 0.6.1   | ✗      | 38806.2    | 25.29        | 6.92          |
| spirit-router            | 0.5.0   | ✓      | 37381.4    | 26.29        | 6.67          |
| koa                      | 2.14.2  | ✗      | 35893.0    | 27.38        | 6.40          |
| yeps-router              | 1.2.0   | ✓      | 34285.8    | 28.66        | 6.11          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33315.8    | 29.54        | 5.94          |
| take-five                | 2.0.0   | ✓      | 32964.2    | 29.89        | 11.85         |
| h3                       | 1.6.6   | ✗      | 32444.8    | 30.37        | 5.32          |
| restify                  | 11.1.0  | ✓      | 32393.4    | 30.41        | 5.84          |
| h3-router                | 1.6.6   | ✓      | 32236.0    | 30.54        | 5.29          |
| 0http                    | 3.5.2   | ✓      | 31961.6    | 30.81        | 5.70          |
| koa-router               | 12.0.0  | ✓      | 30718.4    | 32.07        | 5.48          |
| hapi                     | 21.3.2  | ✓      | 28860.8    | 34.17        | 5.15          |
| restana                  | 4.9.7   | ✓      | 28281.2    | 34.85        | 5.04          |
| fastify-big-json         | 4.17.0  | ✓      | 9966.0     | 99.78        | 114.67        |
| express                  | 4.18.2  | ✓      | 9904.6     | 100.42       | 1.77          |
| express-with-middlewares | 4.18.2  | ✓      | 8665.0     | 114.81       | 3.22          |
| trpc-router              | 10.28.0 | ✓      | 5587.9     | 178.22       | 1.64          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
