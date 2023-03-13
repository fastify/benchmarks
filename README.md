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
* __Node:__ `v18.14.2`
* __Run:__ Mon Mar 13 2023 01:51:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| h3                       | 1.6.0   | ✗      | 53654.4    | 18.09        | 8.80          |
| 0http                    | v3.5.1  | ✓      | 53297.6    | 18.25        | 9.50          |
| fastify                  | 4.14.1  | ✓      | 52438.4    | 18.55        | 9.40          |
| polka                    | 0.5.2   | ✓      | 52219.2    | 18.64        | 9.31          |
| bare                     | 10.13.0 | ✗      | 51933.6    | 18.75        | 9.26          |
| server-base              | 7.1.32  | ✗      | 49877.6    | 19.54        | 8.90          |
| server-base-router       | 7.1.32  | ✓      | 49737.6    | 19.61        | 8.87          |
| connect                  | 3.7.0   | ✗      | 49565.6    | 19.68        | 8.84          |
| yeps                     | 1.1.1   | ✗      | 47681.6    | 20.47        | 8.50          |
| restana                  | 4.9.7   | ✓      | 47464.0    | 20.58        | 8.46          |
| vapr                     | 0.6.0   | ✓      | 46339.2    | 21.07        | 7.60          |
| connect-router           | 1.3.8   | ✓      | 46084.8    | 21.20        | 8.22          |
| spirit                   | 0.6.1   | ✗      | 45602.4    | 21.41        | 8.13          |
| spirit-router            | 0.5.0   | ✓      | 44341.6    | 22.05        | 7.91          |
| polkadot                 | 1.0.0   | ✗      | 43281.6    | 22.62        | 7.72          |
| h3-router                | 1.6.0   | ✓      | 41334.4    | 23.71        | 6.78          |
| koa                      | 2.14.1  | ✗      | 39850.2    | 24.58        | 7.11          |
| yeps-router              | 1.2.0   | ✓      | 38652.0    | 25.36        | 6.89          |
| take-five                | 2.0.0   | ✓      | 38057.4    | 25.78        | 13.68         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37821.0    | 25.93        | 6.74          |
| restify                  | 11.1.0  | ✓      | 37214.2    | 26.37        | 6.71          |
| koa-router               | 12.0.0  | ✓      | 34256.6    | 28.70        | 6.11          |
| hapi                     | 21.3.0  | ✓      | 33869.4    | 29.01        | 6.04          |
| express                  | 4.18.2  | ✓      | 11768.6    | 84.40        | 2.10          |
| fastify-big-json         | 4.14.1  | ✓      | 11422.0    | 87.07        | 131.41        |
| express-with-middlewares | 4.18.2  | ✓      | 10418.0    | 95.41        | 3.87          |
| trpc-router              | 10.15.0 | ✓      | 6587.4     | 151.07       | 1.97          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
