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
* __Node:__ `v14.17.4`
* __Run:__ Mon Aug 09 2021 01:29:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.20.1  | ✓      | 40383.2    | 24.26   | 7.20          |
| connect                  | 3.7.0   | ✗      | 39604.8    | 24.75   | 7.06          |
| foxify                   | 0.10.20 | ✓      | 38949.6    | 25.19   | 6.39          |
| 0http                    | 3.1.1   | ✓      | 37778.2    | 25.97   | 6.74          |
| server-base-router       | 7.1.27  | ✓      | 37464.2    | 26.19   | 6.68          |
| bare                     | 10.13.0 | ✗      | 37241.0    | 26.37   | 6.64          |
| micro                    | 9.3.4   | ✗      | 36930.6    | 26.59   | 6.59          |
| polkadot                 | 1.0.0   | ✗      | 36336.2    | 27.03   | 6.48          |
| server-base              | 7.1.27  | ✗      | 36298.2    | 27.05   | 6.47          |
| yeps                     | 1.1.1   | ✗      | 35550.6    | 27.63   | 6.34          |
| polka                    | 0.5.2   | ✓      | 35426.8    | 27.72   | 6.32          |
| restana                  | 4.9.1   | ✓      | 35210.6    | 27.90   | 6.28          |
| spirit-router            | 0.5.0   | ✓      | 34664.2    | 28.38   | 6.18          |
| rayo                     | 1.3.6   | ✓      | 34557.4    | 28.44   | 6.16          |
| trek-router              | 1.2.0   | ✓      | 33630.8    | 29.23   | 5.52          |
| spirit                   | 0.6.1   | ✗      | 33587.4    | 29.30   | 5.99          |
| trek-engine              | 1.0.5   | ✗      | 33266.6    | 29.56   | 5.46          |
| vapr                     | 0.6.0   | ✓      | 29872.4    | 32.97   | 4.90          |
| connect-router           | 1.3.5   | ✓      | 29392.0    | 33.52   | 5.24          |
| yeps-router              | 1.2.0   | ✓      | 29172.8    | 33.78   | 5.20          |
| koa                      | 2.13.1  | ✗      | 27407.6    | 35.98   | 4.89          |
| micro-route              | 2.5.0   | ✓      | 26653.2    | 37.02   | 4.75          |
| restify                  | 8.5.1   | ✓      | 26075.2    | 37.84   | 4.70          |
| take-five                | 2.0.0   | ✓      | 25776.8    | 38.30   | 9.27          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 23483.2    | 42.09   | 4.19          |
| hapi                     | 20.1.5  | ✓      | 22872.4    | 43.20   | 4.08          |
| total.js                 | 3.4.9   | ✓      | 22498.0    | 43.95   | 6.89          |
| koa-router               | 10.0.0  | ✓      | 21916.4    | 45.12   | 3.91          |
| microrouter              | 3.1.3   | ✓      | 19146.7    | 51.72   | 3.41          |
| egg.js                   | 2.29.4  | ✓      | 14326.8    | 69.29   | 5.04          |
| express                  | 4.17.1  | ✓      | 9325.5     | 106.64  | 1.66          |
| express-route-prefix     | 4.17.1  | ✓      | 8544.8     | 116.47  | 3.16          |
| express-with-middlewares | 4.17.1  | ✓      | 8105.0     | 122.75  | 3.01          |
| fastify-big-json         | 3.20.1  | ✓      | 3813.2     | 261.15  | 43.86         |
