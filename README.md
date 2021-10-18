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
* __Node:__ `v14.18.0`
* __Run:__ Mon Oct 18 2021 01:33:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polka                    | 0.5.2   | ✓      | 61436.8    | 15.79   | 10.96         |
| bare                     | 10.13.0 | ✗      | 61102.4    | 15.88   | 10.90         |
| connect                  | 3.7.0   | ✗      | 59812.0    | 16.24   | 10.67         |
| polkadot                 | 1.0.0   | ✗      | 59719.2    | 16.25   | 10.65         |
| foxify                   | 0.10.20 | ✓      | 59367.2    | 16.36   | 9.74          |
| rayo                     | 1.3.6   | ✓      | 59104.8    | 16.44   | 10.54         |
| micro                    | 9.3.4   | ✗      | 56720.0    | 17.14   | 10.12         |
| yeps                     | 1.1.1   | ✗      | 56486.4    | 17.21   | 10.07         |
| 0http                    | 3.1.1   | ✓      | 55877.6    | 17.43   | 9.96          |
| server-base              | 7.1.29  | ✗      | 54797.6    | 17.75   | 9.77          |
| restana                  | 4.9.1   | ✓      | 51966.4    | 18.74   | 9.27          |
| fastify                  | 3.22.0  | ✓      | 51537.6    | 18.91   | 9.19          |
| micro-route              | 2.5.0   | ✓      | 49836.0    | 19.57   | 8.89          |
| vapr                     | 0.6.0   | ✓      | 49116.8    | 19.86   | 8.06          |
| server-base-router       | 7.1.29  | ✓      | 48021.6    | 20.34   | 8.56          |
| connect-router           | 1.3.5   | ✓      | 46926.4    | 20.82   | 8.37          |
| trek-router              | 1.2.0   | ✓      | 46244.2    | 21.13   | 7.59          |
| yeps-router              | 1.2.0   | ✓      | 44632.8    | 21.91   | 7.96          |
| total.js                 | 3.4.10  | ✓      | 42356.6    | 23.11   | 12.97         |
| trek-engine              | 1.0.5   | ✗      | 41996.6    | 23.31   | 6.89          |
| take-five                | 2.0.0   | ✓      | 40502.6    | 24.19   | 14.56         |
| koa                      | 2.13.3  | ✗      | 39173.8    | 25.03   | 6.99          |
| spirit                   | 0.6.1   | ✗      | 38171.8    | 25.70   | 6.81          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37984.2    | 25.82   | 6.77          |
| restify                  | 8.6.0   | ✓      | 37848.2    | 25.92   | 6.82          |
| spirit-router            | 0.5.0   | ✓      | 37305.6    | 26.32   | 6.65          |
| koa-router               | 10.1.1  | ✓      | 36336.2    | 27.02   | 6.48          |
| hapi                     | 20.2.1  | ✓      | 31181.2    | 31.57   | 5.56          |
| microrouter              | 3.1.3   | ✓      | 28448.4    | 34.64   | 5.07          |
| egg.js                   | 2.30.0  | ✓      | 19609.7    | 50.49   | 6.90          |
| express                  | 4.17.1  | ✓      | 12306.2    | 80.71   | 2.19          |
| express-with-middlewares | 4.17.1  | ✓      | 10693.8    | 92.95   | 3.98          |
| express-route-prefix     | 4.17.1  | ✓      | 10598.1    | 93.78   | 3.92          |
| fastify-big-json         | 3.22.0  | ✓      | 10255.6    | 97.04   | 117.99        |
