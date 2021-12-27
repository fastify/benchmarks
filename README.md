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
* __Node:__ `v14.18.2`
* __Run:__ Mon Dec 27 2021 01:38:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 61128.0    | 15.89   | 10.90         |
| 0http                    | 3.1.1   | ✓      | 60573.6    | 16.02   | 10.80         |
| bare                     | 10.13.0 | ✗      | 57754.1    | 16.83   | 10.30         |
| polka                    | 0.5.2   | ✓      | 53965.6    | 18.04   | 9.62          |
| micro                    | 9.3.4   | ✗      | 53495.2    | 18.20   | 9.54          |
| restana                  | 4.9.2   | ✓      | 53324.8    | 18.28   | 9.51          |
| foxify                   | 0.10.20 | ✓      | 53200.0    | 18.30   | 8.73          |
| fastify                  | 3.25.2  | ✓      | 51984.8    | 18.74   | 9.27          |
| connect                  | 3.7.0   | ✗      | 51268.0    | 19.01   | 9.14          |
| server-base              | 7.1.29  | ✗      | 50446.4    | 19.33   | 9.00          |
| server-base-router       | 7.1.29  | ✓      | 50061.6    | 19.47   | 8.93          |
| rayo                     | 1.3.10  | ✓      | 47203.2    | 20.68   | 8.42          |
| yeps                     | 1.1.1   | ✗      | 47122.4    | 20.72   | 8.40          |
| connect-router           | 1.3.6   | ✓      | 46732.8    | 20.90   | 8.33          |
| micro-route              | 2.5.0   | ✓      | 46131.2    | 21.18   | 8.23          |
| trek-router              | 1.2.0   | ✓      | 43398.2    | 22.54   | 7.12          |
| trek-engine              | 1.0.5   | ✗      | 42905.4    | 22.81   | 7.04          |
| vapr                     | 0.6.0   | ✓      | 41843.2    | 23.41   | 6.86          |
| koa                      | 2.13.4  | ✗      | 39501.0    | 24.82   | 7.04          |
| yeps-router              | 1.2.0   | ✓      | 39000.0    | 25.14   | 6.96          |
| spirit                   | 0.6.1   | ✗      | 38778.2    | 25.29   | 6.92          |
| total.js                 | 3.4.13  | ✓      | 36100.6    | 27.20   | 11.05         |
| take-five                | 2.0.0   | ✓      | 35747.4    | 27.47   | 12.85         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35581.8    | 27.61   | 6.34          |
| koa-router               | 10.1.1  | ✓      | 35421.8    | 27.73   | 6.32          |
| spirit-router            | 0.5.0   | ✓      | 35012.0    | 28.06   | 6.24          |
| restify                  | 8.6.0   | ✓      | 33531.8    | 29.36   | 6.04          |
| hapi                     | 20.2.1  | ✓      | 27853.2    | 35.40   | 4.97          |
| microrouter              | 3.1.3   | ✓      | 27517.6    | 35.83   | 4.91          |
| egg.js                   | 2.33.1  | ✓      | 18419.7    | 53.79   | 6.59          |
| express                  | 4.17.2  | ✓      | 12268.4    | 80.96   | 2.19          |
| express-with-middlewares | 4.17.2  | ✓      | 10634.6    | 93.44   | 3.95          |
| express-route-prefix     | 4.17.2  | ✓      | 9923.5     | 100.19  | 3.67          |
| fastify-big-json         | 3.25.2  | ✓      | 9615.4     | 103.53  | 110.62        |
