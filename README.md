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
* __Run:__ Mon Aug 15 2022 02:13:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 56644.8    | 17.15   | 10.10         |
| polkadot                 | 1.0.0   | ✗      | 55762.4    | 17.44   | 9.94          |
| foxify                   | 0.10.20 | ✓      | 55540.8    | 17.51   | 9.11          |
| polka                    | 0.5.2   | ✓      | 55379.2    | 17.56   | 9.88          |
| connect                  | 3.7.0   | ✗      | 54857.4    | 17.73   | 9.78          |
| 0http                    | 3.4.1   | ✓      | 54182.4    | 17.97   | 9.66          |
| micro                    | 9.4.1   | ✗      | 53962.4    | 18.04   | 9.62          |
| fastify                  | 4.4.0   | ✓      | 53913.6    | 18.05   | 9.67          |
| server-base              | 7.1.32  | ✗      | 52006.4    | 18.73   | 9.27          |
| rayo                     | 1.3.10  | ✓      | 51352.8    | 18.97   | 9.16          |
| yeps                     | 1.1.1   | ✗      | 50050.4    | 19.48   | 8.93          |
| server-base-router       | 7.1.32  | ✓      | 50035.2    | 19.49   | 8.92          |
| micro-route              | 2.5.0   | ✓      | 48322.4    | 20.19   | 8.62          |
| connect-router           | 1.3.7   | ✓      | 47608.8    | 20.51   | 8.49          |
| restana                  | 4.9.6   | ✓      | 47604.0    | 20.51   | 8.49          |
| trek-engine              | 1.0.5   | ✗      | 46072.8    | 21.21   | 7.56          |
| trek-router              | 1.2.0   | ✓      | 44425.6    | 22.01   | 7.29          |
| vapr                     | 0.6.0   | ✓      | 43370.4    | 22.57   | 7.11          |
| yeps-router              | 1.2.0   | ✓      | 41600.8    | 23.54   | 7.42          |
| koa                      | 2.13.4  | ✗      | 39435.4    | 24.85   | 7.03          |
| take-five                | 2.0.0   | ✓      | 37631.0    | 26.07   | 13.53         |
| total.js                 | 3.4.13  | ✓      | 36880.6    | 26.62   | 11.29         |
| spirit                   | 0.6.1   | ✗      | 36044.8    | 27.26   | 6.43          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35434.6    | 27.72   | 6.32          |
| spirit-router            | 0.5.0   | ✓      | 35380.6    | 27.77   | 6.31          |
| restify                  | 8.6.1   | ✓      | 34125.0    | 28.81   | 6.15          |
| koa-router               | 12.0.0  | ✓      | 32849.0    | 29.94   | 5.86          |
| hapi                     | 20.2.2  | ✓      | 28650.4    | 34.40   | 5.11          |
| microrouter              | 3.1.3   | ✓      | 27995.6    | 35.21   | 4.99          |
| egg.js                   | 2.36.0  | ✓      | 17959.7    | 55.19   | 6.42          |
| express                  | 4.18.1  | ✓      | 11739.6    | 84.62   | 2.09          |
| express-with-middlewares | 4.18.1  | ✓      | 10173.9    | 97.71   | 3.78          |
| express-route-prefix     | 4.18.1  | ✓      | 9911.0     | 100.33  | 3.67          |
| fastify-big-json         | 4.4.0   | ✓      | 9671.1     | 102.96  | 111.27        |
