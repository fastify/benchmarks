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
* __Node:__ `v14.17.3`
* __Run:__ Mon Jul 26 2021 01:27:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.1   | ✓      | 45687.2    | 21.45   | 8.15          |
| micro                    | 9.3.4   | ✗      | 44949.6    | 21.75   | 8.02          |
| foxify                   | 0.10.20 | ✓      | 44667.2    | 21.92   | 7.33          |
| polkadot                 | 1.0.0   | ✗      | 44623.2    | 21.95   | 7.96          |
| rayo                     | 1.3.6   | ✓      | 43284.8    | 22.61   | 7.72          |
| connect                  | 3.7.0   | ✗      | 43148.8    | 22.68   | 7.69          |
| spirit-router            | 0.5.0   | ✓      | 42458.4    | 23.18   | 7.57          |
| polka                    | 0.5.2   | ✓      | 42088.8    | 23.26   | 7.51          |
| fastify                  | 3.19.2  | ✓      | 41949.0    | 23.35   | 7.48          |
| spirit                   | 0.6.1   | ✗      | 41162.2    | 23.93   | 7.34          |
| server-base              | 7.1.27  | ✗      | 40942.2    | 23.94   | 7.30          |
| yeps                     | 1.1.1   | ✗      | 40824.0    | 24.00   | 7.28          |
| micro-route              | 2.5.0   | ✓      | 40057.4    | 24.46   | 7.14          |
| connect-router           | 1.3.5   | ✓      | 39383.8    | 24.89   | 7.02          |
| server-base-router       | 7.1.27  | ✓      | 39369.8    | 24.91   | 7.02          |
| restana                  | 4.9.1   | ✓      | 39116.0    | 25.06   | 6.98          |
| trek-router              | 1.2.0   | ✓      | 37349.8    | 26.28   | 6.13          |
| trek-engine              | 1.0.5   | ✗      | 37264.4    | 26.36   | 6.11          |
| bare                     | 10.13.0 | ✗      | 34866.7    | 28.27   | 6.22          |
| koa                      | 2.13.1  | ✗      | 34514.4    | 28.48   | 6.15          |
| yeps-router              | 1.2.0   | ✓      | 32441.6    | 30.32   | 5.79          |
| vapr                     | 0.6.0   | ✓      | 31305.6    | 31.44   | 5.13          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 30104.0    | 32.71   | 5.37          |
| koa-router               | 10.0.0  | ✓      | 29420.4    | 33.49   | 5.25          |
| restify                  | 8.5.1   | ✓      | 29010.0    | 33.98   | 5.23          |
| total.js                 | 3.4.9   | ✓      | 27708.8    | 35.59   | 8.48          |
| take-five                | 2.0.0   | ✓      | 27031.2    | 36.53   | 9.72          |
| hapi                     | 20.1.5  | ✓      | 25097.6    | 39.33   | 4.48          |
| microrouter              | 3.1.3   | ✓      | 21203.2    | 46.64   | 3.78          |
| egg.js                   | 2.29.4  | ✓      | 16293.6    | 60.83   | 5.73          |
| express                  | 4.17.1  | ✓      | 10369.4    | 95.85   | 1.85          |
| fastify-big-json         | 3.19.2  | ✓      | 9225.0     | 108.01  | 106.12        |
| express-route-prefix     | 4.17.1  | ✓      | 8889.5     | 111.89  | 3.29          |
| express-with-middlewares | 4.17.1  | ✓      | 8569.4     | 116.05  | 3.19          |
