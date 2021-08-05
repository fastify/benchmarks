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
* __Run:__ Thu Aug 05 2021 19:02:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| 0http                    | 3.1.1   | ✓      | 55546.4    | 17.51   | 9.91          |
| fastify                  | 3.20.1  | ✓      | 55396.8    | 17.55   | 9.88          |
| foxify                   | 0.10.20 | ✓      | 54380.0    | 17.90   | 8.92          |
| polka                    | 0.5.2   | ✓      | 53965.6    | 18.03   | 9.62          |
| polkadot                 | 1.0.0   | ✗      | 53844.8    | 18.08   | 9.60          |
| bare                     | 10.13.0 | ✗      | 52983.2    | 18.39   | 9.45          |
| connect                  | 3.7.0   | ✗      | 52544.0    | 18.54   | 9.37          |
| micro                    | 9.3.4   | ✗      | 51805.6    | 18.80   | 9.24          |
| server-base              | 7.1.27  | ✗      | 51022.4    | 19.10   | 9.10          |
| rayo                     | 1.3.6   | ✓      | 50314.4    | 19.37   | 8.97          |
| server-base-router       | 7.1.27  | ✓      | 49088.0    | 19.87   | 8.75          |
| connect-router           | 1.3.5   | ✓      | 48924.0    | 19.94   | 8.72          |
| yeps                     | 1.1.1   | ✗      | 48176.8    | 20.26   | 8.59          |
| restana                  | 4.9.1   | ✓      | 48094.4    | 20.29   | 8.58          |
| micro-route              | 2.5.0   | ✓      | 47472.0    | 20.57   | 8.47          |
| trek-engine              | 1.0.5   | ✗      | 46583.8    | 20.98   | 7.64          |
| trek-router              | 1.2.0   | ✓      | 43313.6    | 22.59   | 7.10          |
| vapr                     | 0.6.0   | ✓      | 41959.2    | 23.34   | 6.88          |
| yeps-router              | 1.2.0   | ✓      | 41238.4    | 23.75   | 7.35          |
| koa                      | 2.13.1  | ✗      | 39042.2    | 25.11   | 6.96          |
| spirit                   | 0.6.1   | ✗      | 37905.6    | 25.90   | 6.76          |
| spirit-router            | 0.5.0   | ✓      | 37247.4    | 26.38   | 6.64          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35939.4    | 27.32   | 6.41          |
| take-five                | 2.0.0   | ✓      | 35835.8    | 27.40   | 12.88         |
| koa-router               | 10.0.0  | ✓      | 35626.6    | 27.57   | 6.35          |
| total.js                 | 3.4.9   | ✓      | 35579.4    | 27.61   | 10.89         |
| restify                  | 8.5.1   | ✓      | 32797.2    | 29.99   | 5.91          |
| hapi                     | 20.1.5  | ✓      | 29372.8    | 33.54   | 5.24          |
| microrouter              | 3.1.3   | ✓      | 26905.6    | 36.66   | 4.80          |
| egg.js                   | 2.29.4  | ✓      | 19046.1    | 51.99   | 6.70          |
| express                  | 4.17.1  | ✓      | 11746.6    | 84.61   | 2.09          |
| express-with-middlewares | 4.17.1  | ✓      | 9961.5     | 99.80   | 3.70          |
| express-route-prefix     | 4.17.1  | ✓      | 9443.0     | 105.32  | 3.49          |
| fastify-big-json         | 3.20.1  | ✓      | 3522.2     | 282.59  | 40.52         |
