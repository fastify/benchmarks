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
* __Run:__ Mon Mar 28 2022 01:52:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 48195.2    | 20.27   | 8.60          |
| foxify                   | 0.10.20 | ✓      | 48039.2    | 20.33   | 7.88          |
| fastify                  | 3.27.4  | ✓      | 47928.0    | 20.36   | 8.55          |
| connect                  | 3.7.0   | ✗      | 47572.8    | 20.53   | 8.48          |
| micro                    | 9.3.4   | ✗      | 47340.0    | 20.63   | 8.44          |
| bare                     | 10.13.0 | ✗      | 47284.2    | 20.66   | 8.43          |
| 0http                    | 3.1.2   | ✓      | 47164.0    | 20.72   | 8.41          |
| polka                    | 0.5.2   | ✓      | 46774.4    | 20.88   | 8.34          |
| rayo                     | 1.3.10  | ✓      | 46490.4    | 21.01   | 8.29          |
| server-base              | 7.1.32  | ✗      | 45197.6    | 21.63   | 8.06          |
| yeps                     | 1.1.1   | ✗      | 43910.4    | 22.27   | 7.83          |
| server-base-router       | 7.1.32  | ✓      | 43571.4    | 22.47   | 7.77          |
| connect-router           | 1.3.6   | ✓      | 41493.6    | 23.60   | 7.40          |
| micro-route              | 2.5.0   | ✓      | 40769.4    | 24.03   | 7.27          |
| restana                  | 4.9.3   | ✓      | 40703.0    | 24.07   | 7.26          |
| trek-engine              | 1.0.5   | ✗      | 39861.8    | 24.69   | 6.54          |
| trek-router              | 1.2.0   | ✓      | 37931.8    | 25.87   | 6.22          |
| vapr                     | 0.6.0   | ✓      | 36529.0    | 26.89   | 5.99          |
| yeps-router              | 1.2.0   | ✓      | 35323.4    | 27.81   | 6.30          |
| koa                      | 2.13.4  | ✗      | 35208.2    | 27.91   | 6.28          |
| spirit                   | 0.6.1   | ✗      | 33855.4    | 29.05   | 6.04          |
| spirit-router            | 0.5.0   | ✓      | 32671.8    | 30.11   | 5.83          |
| total.js                 | 3.4.13  | ✓      | 32100.2    | 30.68   | 9.83          |
| take-five                | 2.0.0   | ✓      | 31031.2    | 31.72   | 11.16         |
| koa-router               | 10.1.1  | ✓      | 30906.8    | 31.84   | 5.51          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 30899.2    | 31.86   | 5.51          |
| restify                  | 8.6.1   | ✓      | 30067.6    | 32.76   | 5.42          |
| hapi                     | 20.2.1  | ✓      | 25139.2    | 39.27   | 4.48          |
| microrouter              | 3.1.3   | ✓      | 24004.0    | 41.15   | 4.28          |
| egg.js                   | 2.34.0  | ✓      | 15330.2    | 64.71   | 5.48          |
| express                  | 4.17.3  | ✓      | 10376.6    | 95.78   | 1.85          |
| express-route-prefix     | 4.17.3  | ✓      | 8663.4     | 114.82  | 3.21          |
| express-with-middlewares | 4.17.3  | ✓      | 8617.8     | 115.44  | 3.20          |
| fastify-big-json         | 3.27.4  | ✓      | 8148.6     | 122.27  | 93.74         |
