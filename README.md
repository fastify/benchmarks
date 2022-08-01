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
* __Run:__ Mon Aug 01 2022 02:28:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 56603.2    | 17.18   | 10.10         |
| polka                    | 0.5.2   | ✓      | 56178.4    | 17.30   | 10.02         |
| polkadot                 | 1.0.0   | ✗      | 55632.8    | 17.49   | 9.92          |
| micro                    | 9.4.1   | ✗      | 55322.4    | 17.58   | 9.87          |
| fastify                  | 4.3.0   | ✓      | 54842.4    | 17.74   | 9.83          |
| foxify                   | 0.10.20 | ✓      | 54135.2    | 17.98   | 8.88          |
| connect                  | 3.7.0   | ✗      | 53988.0    | 18.04   | 9.63          |
| 0http                    | 3.4.1   | ✓      | 53982.4    | 18.03   | 9.63          |
| rayo                     | 1.3.10  | ✓      | 53698.4    | 18.13   | 9.58          |
| server-base-router       | 7.1.32  | ✓      | 53110.4    | 18.33   | 9.47          |
| server-base              | 7.1.32  | ✗      | 53029.6    | 18.36   | 9.46          |
| yeps                     | 1.1.1   | ✗      | 50119.2    | 19.46   | 8.94          |
| restana                  | 4.9.6   | ✓      | 47820.0    | 20.41   | 8.53          |
| connect-router           | 1.3.7   | ✓      | 46966.4    | 20.80   | 8.38          |
| micro-route              | 2.5.0   | ✓      | 46238.4    | 21.13   | 8.25          |
| trek-engine              | 1.0.5   | ✗      | 45997.6    | 21.24   | 7.55          |
| trek-router              | 1.2.0   | ✓      | 43997.6    | 22.23   | 7.22          |
| vapr                     | 0.6.0   | ✓      | 42929.6    | 22.80   | 7.04          |
| yeps-router              | 1.2.0   | ✓      | 40860.0    | 23.97   | 7.29          |
| koa                      | 2.13.4  | ✗      | 38581.0    | 25.41   | 6.88          |
| total.js                 | 3.4.13  | ✓      | 37814.2    | 25.95   | 11.58         |
| take-five                | 2.0.0   | ✓      | 36699.0    | 26.75   | 13.20         |
| spirit                   | 0.6.1   | ✗      | 36264.6    | 27.09   | 6.47          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35158.6    | 27.94   | 6.27          |
| koa-router               | 10.1.1  | ✓      | 34614.2    | 28.39   | 6.17          |
| spirit-router            | 0.5.0   | ✓      | 34575.4    | 28.43   | 6.17          |
| restify                  | 8.6.1   | ✓      | 34241.8    | 28.71   | 6.17          |
| hapi                     | 20.2.2  | ✓      | 28919.6    | 34.07   | 5.16          |
| microrouter              | 3.1.3   | ✓      | 27664.4    | 35.64   | 4.93          |
| egg.js                   | 2.36.0  | ✓      | 17768.9    | 55.79   | 6.35          |
| express                  | 4.18.1  | ✓      | 11833.0    | 84.00   | 2.11          |
| express-with-middlewares | 4.18.1  | ✓      | 10196.8    | 97.48   | 3.79          |
| express-route-prefix     | 4.18.1  | ✓      | 10007.2    | 99.33   | 3.70          |
| fastify-big-json         | 4.3.0   | ✓      | 9572.1     | 103.95  | 110.13        |
