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
* __Node:__ `v14.20.1`
* __Run:__ Mon Nov 21 2022 02:09:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 53404.8    | 18.23        | 9.52          |
| foxify                   | 0.10.20 | ✓      | 52884.0    | 18.41        | 8.67          |
| bare                     | 10.13.0 | ✗      | 52292.8    | 18.64        | 9.33          |
| h3                       | 0.8.6   | ✗      | 52170.4    | 18.67        | 8.56          |
| fastify                  | 4.10.0  | ✓      | 52115.2    | 18.69        | 9.34          |
| polkadot                 | 1.0.0   | ✗      | 51729.6    | 18.84        | 9.23          |
| micro                    | 9.4.1   | ✗      | 51672.8    | 18.86        | 9.22          |
| connect                  | 3.7.0   | ✗      | 50159.2    | 19.44        | 8.95          |
| server-base-router       | 7.1.32  | ✓      | 50067.2    | 19.47        | 8.93          |
| server-base              | 7.1.32  | ✗      | 49629.6    | 19.65        | 8.85          |
| h3-router                | 0.8.6   | ✓      | 49450.4    | 19.73        | 8.11          |
| 0http                    | 3.4.1   | ✓      | 49111.2    | 19.87        | 8.76          |
| yeps                     | 1.1.1   | ✗      | 48177.6    | 20.26        | 8.59          |
| connect-router           | 1.3.7   | ✓      | 47591.2    | 20.52        | 8.49          |
| restana                  | 4.9.6   | ✓      | 45632.0    | 21.42        | 8.14          |
| trek-engine              | 1.0.5   | ✗      | 44640.0    | 21.91        | 7.32          |
| micro-route              | 2.5.0   | ✓      | 44250.4    | 22.11        | 7.89          |
| trek-router              | 1.2.0   | ✓      | 43188.2    | 22.66        | 7.08          |
| vapr                     | 0.6.0   | ✓      | 40664.8    | 24.10        | 6.67          |
| yeps-router              | 1.2.0   | ✓      | 38374.0    | 25.56        | 6.84          |
| spirit                   | 0.6.1   | ✗      | 37146.4    | 26.43        | 6.63          |
| koa                      | 2.13.4  | ✗      | 37047.0    | 26.50        | 6.61          |
| spirit-router            | 0.5.0   | ✓      | 36600.6    | 26.83        | 6.53          |
| take-five                | 2.0.0   | ✓      | 34248.2    | 28.70        | 12.31         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34156.6    | 28.77        | 6.09          |
| total.js                 | 3.4.13  | ✓      | 34004.4    | 28.90        | 10.41         |
| restify                  | 8.6.1   | ✓      | 33543.2    | 29.31        | 6.05          |
| koa-router               | 12.0.0  | ✓      | 30774.8    | 31.99        | 5.49          |
| hapi                     | 20.2.2  | ✓      | 27770.0    | 35.51        | 4.95          |
| microrouter              | 3.1.3   | ✓      | 27096.4    | 36.40        | 4.83          |
| trpc-router              | 9.27.4  | ✓      | 22581.2    | 43.77        | 5.00          |
| egg.js                   | 3.5.0   | ✓      | 17032.4    | 58.19        | 6.09          |
| express                  | 4.18.2  | ✓      | 10773.0    | 92.25        | 1.92          |
| express-with-middlewares | 4.18.2  | ✓      | 9376.0     | 106.10       | 3.49          |
| express-route-prefix     | 4.18.2  | ✓      | 9163.1     | 108.54       | 3.39          |
| fastify-big-json         | 4.10.0  | ✓      | 9023.1     | 110.42       | 103.81        |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A          | N/A           |
