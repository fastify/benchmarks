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
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov 22 2021 01:30:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.1   | ✓      | 54513.6    | 17.86   | 9.72          |
| polkadot                 | 1.0.0   | ✗      | 54374.4    | 17.90   | 9.70          |
| fastify                  | 3.24.0  | ✓      | 54104.0    | 17.98   | 9.65          |
| polka                    | 0.5.2   | ✓      | 53524.0    | 18.19   | 9.55          |
| micro                    | 9.3.4   | ✗      | 53362.4    | 18.24   | 9.52          |
| foxify                   | 0.10.20 | ✓      | 52448.8    | 18.57   | 8.60          |
| bare                     | 10.13.0 | ✗      | 52389.6    | 18.59   | 9.34          |
| rayo                     | 1.3.6   | ✓      | 51878.4    | 18.78   | 9.25          |
| connect                  | 3.7.0   | ✗      | 50665.6    | 19.25   | 9.04          |
| server-base              | 7.1.29  | ✗      | 48782.4    | 20.00   | 8.70          |
| restana                  | 4.9.2   | ✓      | 48104.8    | 20.26   | 8.58          |
| server-base-router       | 7.1.29  | ✓      | 47825.6    | 20.41   | 8.53          |
| connect-router           | 1.3.6   | ✓      | 46320.8    | 21.09   | 8.26          |
| yeps                     | 1.1.1   | ✗      | 45930.4    | 21.27   | 8.19          |
| micro-route              | 2.5.0   | ✓      | 45504.8    | 21.48   | 8.12          |
| trek-engine              | 1.0.5   | ✗      | 43053.0    | 22.73   | 7.06          |
| trek-router              | 1.2.0   | ✓      | 41513.4    | 23.59   | 6.81          |
| vapr                     | 0.6.0   | ✓      | 40487.2    | 24.21   | 6.64          |
| yeps-router              | 1.2.0   | ✓      | 39052.8    | 25.11   | 6.96          |
| koa                      | 2.13.4  | ✗      | 38022.6    | 25.80   | 6.78          |
| take-five                | 2.0.0   | ✓      | 35667.0    | 27.54   | 12.82         |
| total.js                 | 3.4.13  | ✓      | 34713.0    | 28.30   | 10.63         |
| spirit                   | 0.6.1   | ✗      | 34657.4    | 28.37   | 6.18          |
| koa-router               | 10.1.1  | ✓      | 34289.4    | 28.66   | 6.11          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34233.4    | 28.71   | 6.10          |
| spirit-router            | 0.5.0   | ✓      | 33617.0    | 29.25   | 6.00          |
| restify                  | 8.6.0   | ✓      | 33541.6    | 29.31   | 6.05          |
| hapi                     | 20.2.1  | ✓      | 27892.4    | 35.35   | 4.97          |
| microrouter              | 3.1.3   | ✓      | 26469.2    | 37.27   | 4.72          |
| egg.js                   | 2.32.0  | ✓      | 18269.7    | 54.22   | 6.53          |
| express                  | 4.17.1  | ✓      | 11827.6    | 83.99   | 2.11          |
| express-with-middlewares | 4.17.1  | ✓      | 10144.1    | 98.00   | 3.77          |
| express-route-prefix     | 4.17.1  | ✓      | 9783.0     | 101.64  | 3.62          |
| fastify-big-json         | 3.24.0  | ✓      | 9695.5     | 102.66  | 111.55        |
