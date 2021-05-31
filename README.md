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
* __Run:__ Mon May 31 2021 13:20:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 57002.4    | 17.06   | 10.17         |
| polkadot                 | 1.0.0   | ✗      | 56640.0    | 17.18   | 10.10         |
| foxify                   | 0.10.20 | ✓      | 56472.8    | 17.22   | 9.26          |
| fastify                  | 3.17.0  | ✓      | 56455.2    | 17.23   | 10.07         |
| polka                    | 0.5.2   | ✓      | 55764.8    | 17.44   | 9.94          |
| rayo                     | 1.3.6   | ✓      | 55146.4    | 17.63   | 9.83          |
| micro                    | 9.3.4   | ✗      | 54755.2    | 17.77   | 9.77          |
| 0http                    | 3.1.1   | ✓      | 54702.4    | 17.79   | 9.75          |
| server-base              | 7.1.27  | ✗      | 53469.6    | 18.21   | 9.54          |
| connect                  | 3.7.0   | ✗      | 53048.8    | 18.35   | 9.46          |
| server-base-router       | 7.1.27  | ✓      | 52844.8    | 18.42   | 9.42          |
| connect-router           | 1.3.5   | ✓      | 51380.8    | 18.96   | 9.16          |
| yeps                     | 1.1.1   | ✗      | 51004.8    | 19.11   | 9.10          |
| restana                  | 4.9.1   | ✓      | 49945.6    | 19.53   | 8.91          |
| micro-route              | 2.5.0   | ✓      | 49108.8    | 19.87   | 8.76          |
| trek-engine              | 1.0.5   | ✗      | 47686.4    | 20.48   | 7.82          |
| trek-router              | 1.2.0   | ✓      | 47467.2    | 20.57   | 7.79          |
| vapr                     | 0.6.0   | ✓      | 44539.2    | 21.96   | 7.31          |
| koa                      | 2.13.1  | ✗      | 42163.2    | 23.23   | 7.52          |
| spirit                   | 0.6.1   | ✗      | 41672.8    | 23.52   | 7.43          |
| yeps-router              | 1.2.0   | ✓      | 40892.0    | 23.96   | 7.29          |
| spirit-router            | 0.5.0   | ✓      | 39842.4    | 24.62   | 7.11          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37436.6    | 26.22   | 6.68          |
| koa-router               | 10.0.0  | ✓      | 37002.2    | 26.53   | 6.60          |
| take-five                | 2.0.0   | ✓      | 36959.4    | 26.55   | 13.29         |
| total.js                 | 3.4.8   | ✓      | 35600.2    | 27.59   | 10.90         |
| restify                  | 8.5.1   | ✓      | 35337.0    | 27.80   | 6.37          |
| hapi                     | 20.1.3  | ✓      | 28514.4    | 34.57   | 5.08          |
| microrouter              | 3.1.3   | ✓      | 27347.2    | 36.06   | 4.88          |
| egg.js                   | 2.29.4  | ✓      | 17893.1    | 55.41   | 6.30          |
| express                  | 4.17.1  | ✓      | 11273.8    | 88.11   | 2.01          |
| express-with-middlewares | 4.17.1  | ✓      | 9887.3     | 100.58  | 3.68          |
| express-route-prefix     | 4.17.1  | ✓      | 9160.0     | 108.53  | 3.39          |
| fastify-big-json         | 3.17.0  | ✓      | 9051.8     | 110.03  | 104.13        |
