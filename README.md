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
* __Run:__ Mon Oct 03 2022 02:14:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 47526.2    | 20.56   | 8.48          |
| polkadot                 | 1.0.0   | ✗      | 47470.4    | 20.57   | 8.47          |
| polka                    | 0.5.2   | ✓      | 46987.2    | 20.79   | 8.38          |
| foxify                   | 0.10.20 | ✓      | 46968.8    | 20.79   | 7.70          |
| connect                  | 3.7.0   | ✗      | 46206.4    | 21.15   | 8.24          |
| micro                    | 9.4.1   | ✗      | 45452.0    | 21.51   | 8.11          |
| server-base              | 7.1.32  | ✗      | 44530.4    | 21.96   | 7.94          |
| 0http                    | 3.4.1   | ✓      | 44485.6    | 21.98   | 7.93          |
| fastify                  | 4.7.0   | ✓      | 44320.6    | 22.06   | 7.95          |
| rayo                     | 1.3.10  | ✓      | 43837.6    | 22.32   | 7.82          |
| server-base-router       | 7.1.32  | ✓      | 42273.6    | 23.16   | 7.54          |
| yeps                     | 1.1.1   | ✗      | 40984.0    | 23.91   | 7.31          |
| connect-router           | 1.3.7   | ✓      | 40166.4    | 24.40   | 7.16          |
| restana                  | 4.9.6   | ✓      | 39634.6    | 24.73   | 7.07          |
| micro-route              | 2.5.0   | ✓      | 38715.0    | 25.33   | 6.90          |
| trek-engine              | 1.0.5   | ✗      | 38461.8    | 25.50   | 6.31          |
| trek-router              | 1.2.0   | ✓      | 37567.4    | 26.12   | 6.16          |
| vapr                     | 0.6.0   | ✓      | 34954.6    | 28.11   | 5.73          |
| yeps-router              | 1.2.0   | ✓      | 34934.6    | 28.13   | 6.23          |
| koa                      | 2.13.4  | ✗      | 32932.2    | 29.87   | 5.87          |
| spirit                   | 0.6.1   | ✗      | 32444.2    | 30.33   | 5.79          |
| spirit-router            | 0.5.0   | ✓      | 31382.0    | 31.37   | 5.60          |
| take-five                | 2.0.0   | ✓      | 31192.4    | 31.56   | 11.21         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 30542.4    | 32.24   | 5.45          |
| total.js                 | 3.4.13  | ✓      | 30129.6    | 32.70   | 9.22          |
| restify                  | 8.6.1   | ✓      | 29766.0    | 33.10   | 5.37          |
| koa-router               | 12.0.0  | ✓      | 28210.4    | 34.94   | 5.03          |
| hapi                     | 20.2.2  | ✓      | 24978.8    | 39.53   | 4.45          |
| microrouter              | 3.1.3   | ✓      | 23545.6    | 41.96   | 4.20          |
| trpc-router              | 9.27.4  | ✓      | 20579.2    | 48.09   | 4.55          |
| egg.js                   | 3.3.3   | ✓      | 15350.6    | 64.63   | 5.49          |
| express                  | 4.18.1  | ✓      | 9817.0     | 101.27  | 1.75          |
| express-with-middlewares | 4.18.1  | ✓      | 8513.1     | 116.85  | 3.17          |
| express-route-prefix     | 4.18.1  | ✓      | 8243.3     | 120.68  | 3.05          |
| fastify-big-json         | 4.7.0   | ✓      | 8205.9     | 121.37  | 94.41         |
