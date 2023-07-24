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
* __Node:__ `v18.16.1`
* __Run:__ Mon Jul 24 2023 01:53:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| spirit-router            | 0.5.0   | ✓      | 24275.2    | 40.71        | 4.33          |
| spirit                   | 0.6.1   | ✗      | 24030.8    | 41.15        | 4.29          |
| bare                     | 10.13.0 | ✗      | 23717.2    | 41.65        | 4.23          |
| polka                    | 0.5.2   | ✓      | 23261.6    | 42.48        | 4.15          |
| fastify                  | 4.20.0  | ✓      | 22878.0    | 43.20        | 4.10          |
| server-base-router       | 7.1.32  | ✓      | 22188.8    | 44.55        | 3.96          |
| server-base              | 7.1.32  | ✗      | 21468.0    | 46.06        | 3.83          |
| connect                  | 3.7.0   | ✗      | 21225.6    | 46.60        | 3.79          |
| yeps                     | 1.1.1   | ✗      | 20822.4    | 47.52        | 3.71          |
| connect-router           | 1.3.8   | ✓      | 20303.6    | 48.73        | 3.62          |
| polkadot                 | 1.0.0   | ✗      | 20205.6    | 48.99        | 3.60          |
| vapr                     | 0.6.0   | ✓      | 19662.9    | 50.34        | 3.23          |
| h3-router                | 1.7.1   | ✓      | 19423.7    | 50.98        | 3.19          |
| koa                      | 2.14.2  | ✗      | 18877.7    | 52.47        | 3.37          |
| yeps-router              | 1.2.0   | ✓      | 18747.6    | 52.84        | 3.34          |
| take-five                | 2.0.0   | ✓      | 18378.1    | 53.89        | 6.61          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 18290.7    | 54.16        | 3.26          |
| h3                       | 1.7.1   | ✗      | 18159.7    | 54.55        | 2.98          |
| restify                  | 11.1.0  | ✓      | 17932.7    | 55.23        | 3.23          |
| koa-router               | 12.0.0  | ✓      | 17062.0    | 58.10        | 3.04          |
| 0http                    | 3.5.2   | ✓      | 16971.2    | 58.41        | 3.03          |
| restana                  | 4.9.7   | ✓      | 15186.0    | 65.34        | 2.71          |
| hapi                     | 21.3.2  | ✓      | 13940.4    | 71.20        | 2.49          |
| fastify-big-json         | 4.20.0  | ✓      | 6524.9     | 152.67       | 75.07         |
| express                  | 4.18.2  | ✓      | 5567.4     | 178.76       | 0.99          |
| express-with-middlewares | 4.18.2  | ✓      | 4832.4     | 206.00       | 1.80          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.35.0 | ✓      | N/A        | N/A          | N/A           |
