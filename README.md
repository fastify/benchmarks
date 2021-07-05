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
* __Node:__ `v14.17.1`
* __Run:__ Mon Jul 05 2021 01:23:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 43794.2    | 22.41   | 7.81          |
| bare                     | 10.13.0 | ✗      | 41655.2    | 23.52   | 7.43          |
| micro                    | 9.3.4   | ✗      | 41639.2    | 23.52   | 7.43          |
| fastify                  | 3.18.1  | ✓      | 41586.4    | 23.55   | 7.42          |
| 0http                    | 3.1.1   | ✓      | 41480.0    | 23.62   | 7.40          |
| rayo                     | 1.3.6   | ✓      | 40832.8    | 24.00   | 7.28          |
| foxify                   | 0.10.20 | ✓      | 40064.0    | 24.46   | 6.57          |
| spirit-router            | 0.5.0   | ✓      | 40032.0    | 24.54   | 7.14          |
| server-base-router       | 7.1.27  | ✓      | 39664.8    | 24.71   | 7.07          |
| polka                    | 0.5.2   | ✓      | 39496.8    | 24.83   | 7.04          |
| connect                  | 3.7.0   | ✗      | 38441.0    | 25.51   | 6.85          |
| restana                  | 4.9.1   | ✓      | 38229.0    | 25.67   | 6.82          |
| yeps                     | 1.1.1   | ✗      | 37754.2    | 25.99   | 6.73          |
| server-base              | 7.1.27  | ✗      | 37732.4    | 26.00   | 6.73          |
| spirit                   | 0.6.1   | ✗      | 37062.4    | 26.53   | 6.61          |
| trek-engine              | 1.0.5   | ✗      | 35779.8    | 27.45   | 5.87          |
| micro-route              | 2.5.0   | ✓      | 35198.4    | 27.92   | 6.28          |
| trek-router              | 1.2.0   | ✓      | 34159.2    | 28.78   | 5.60          |
| connect-router           | 1.3.5   | ✓      | 33241.4    | 29.58   | 5.93          |
| yeps-router              | 1.2.0   | ✓      | 32438.6    | 30.32   | 5.79          |
| vapr                     | 0.6.0   | ✓      | 31898.2    | 30.87   | 5.23          |
| koa                      | 2.13.1  | ✗      | 28550.8    | 34.52   | 5.09          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 27642.8    | 35.68   | 4.93          |
| restify                  | 8.5.1   | ✓      | 26142.8    | 37.75   | 4.71          |
| take-five                | 2.0.0   | ✓      | 25903.6    | 38.09   | 9.31          |
| koa-router               | 10.0.0  | ✓      | 25527.2    | 38.68   | 4.55          |
| total.js                 | 3.4.9   | ✓      | 24749.6    | 39.90   | 7.58          |
| hapi                     | 20.1.5  | ✓      | 22478.7    | 43.97   | 4.01          |
| microrouter              | 3.1.3   | ✓      | 19344.8    | 51.17   | 3.45          |
| egg.js                   | 2.29.4  | ✓      | 14656.2    | 67.70   | 5.16          |
| express                  | 4.17.1  | ✓      | 9483.1     | 104.86  | 1.69          |
| fastify-big-json         | 3.18.1  | ✓      | 8933.9     | 111.51  | 102.78        |
| express-route-prefix     | 4.17.1  | ✓      | 8392.5     | 118.63  | 3.11          |
| express-with-middlewares | 4.17.1  | ✓      | 8016.4     | 124.09  | 2.98          |
