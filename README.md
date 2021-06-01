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
* __Run:__ Tue Jun 01 2021 04:01:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polka                    | 0.5.2   | ✓      | 57920.8    | 16.78   | 10.33         |
| bare                     | 10.13.0 | ✗      | 57844.0    | 16.81   | 10.32         |
| rayo                     | 1.3.6   | ✓      | 56579.2    | 17.18   | 10.09         |
| polkadot                 | 1.0.0   | ✗      | 56548.0    | 17.20   | 10.08         |
| connect                  | 3.7.0   | ✗      | 56295.2    | 17.27   | 10.04         |
| foxify                   | 0.10.20 | ✓      | 56030.4    | 17.35   | 9.19          |
| fastify                  | 3.17.0  | ✓      | 55718.4    | 17.46   | 9.94          |
| micro                    | 9.3.4   | ✗      | 55601.6    | 17.49   | 9.92          |
| server-base-router       | 7.1.27  | ✓      | 55315.2    | 17.58   | 9.87          |
| server-base              | 7.1.27  | ✗      | 55148.0    | 17.63   | 9.83          |
| 0http                    | 3.1.1   | ✓      | 53433.6    | 18.23   | 9.53          |
| yeps                     | 1.1.1   | ✗      | 53327.2    | 18.25   | 9.51          |
| micro-route              | 2.5.0   | ✓      | 51504.0    | 18.92   | 9.19          |
| restana                  | 4.9.1   | ✓      | 51160.8    | 19.05   | 9.12          |
| connect-router           | 1.3.5   | ✓      | 50196.0    | 19.43   | 8.95          |
| trek-engine              | 1.0.5   | ✗      | 49224.0    | 19.82   | 8.07          |
| trek-router              | 1.2.0   | ✓      | 47602.4    | 20.51   | 7.81          |
| vapr                     | 0.6.0   | ✓      | 42692.0    | 22.92   | 7.00          |
| koa                      | 2.13.1  | ✗      | 42503.0    | 23.05   | 7.58          |
| yeps-router              | 1.2.0   | ✓      | 41016.0    | 23.88   | 7.31          |
| spirit                   | 0.6.1   | ✗      | 40990.4    | 23.92   | 7.31          |
| spirit-router            | 0.5.0   | ✓      | 39130.4    | 25.07   | 6.98          |
| total.js                 | 3.4.8   | ✓      | 38905.8    | 25.20   | 11.91         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37826.6    | 25.95   | 6.75          |
| koa-router               | 10.0.0  | ✓      | 37591.2    | 26.11   | 6.70          |
| take-five                | 2.0.0   | ✓      | 36330.6    | 27.02   | 13.06         |
| restify                  | 8.5.1   | ✓      | 35339.0    | 27.80   | 6.37          |
| hapi                     | 20.1.3  | ✓      | 28638.0    | 34.41   | 5.11          |
| microrouter              | 3.1.3   | ✓      | 28089.6    | 35.10   | 5.01          |
| egg.js                   | 2.29.4  | ✓      | 18502.2    | 53.55   | 6.51          |
| express                  | 4.17.1  | ✓      | 10787.8    | 92.16   | 1.92          |
| express-with-middlewares | 4.17.1  | ✓      | 9915.5     | 100.30  | 3.69          |
| express-route-prefix     | 4.17.1  | ✓      | 9325.1     | 106.62  | 3.45          |
| fastify-big-json         | 3.17.0  | ✓      | 9197.0     | 108.24  | 105.81        |
