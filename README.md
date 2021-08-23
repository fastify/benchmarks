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
* __Node:__ `v14.17.5`
* __Run:__ Mon Aug 23 2021 01:23:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 41423.4    | 23.68   | 7.39          |
| bare                     | 10.13.0 | ✗      | 39295.2    | 24.95   | 7.01          |
| micro                    | 9.3.4   | ✗      | 37801.0    | 25.96   | 6.74          |
| 0http                    | 3.1.1   | ✓      | 37720.6    | 26.02   | 6.73          |
| foxify                   | 0.10.20 | ✓      | 36809.4    | 26.67   | 6.04          |
| rayo                     | 1.3.6   | ✓      | 35563.4    | 27.62   | 6.34          |
| polka                    | 0.5.2   | ✓      | 34909.4    | 28.15   | 6.23          |
| fastify                  | 3.20.2  | ✓      | 34528.0    | 28.46   | 6.16          |
| yeps                     | 1.1.1   | ✗      | 32986.0    | 29.81   | 5.88          |
| spirit-router            | 0.5.0   | ✓      | 32927.0    | 29.93   | 5.87          |
| restana                  | 4.9.1   | ✓      | 32922.4    | 29.88   | 5.87          |
| micro-route              | 2.5.0   | ✓      | 32549.0    | 30.22   | 5.80          |
| trek-engine              | 1.0.5   | ✗      | 32166.4    | 30.59   | 5.28          |
| spirit                   | 0.6.1   | ✗      | 31829.4    | 30.97   | 5.68          |
| server-base              | 7.1.29  | ✗      | 31403.2    | 31.34   | 5.60          |
| server-base-router       | 7.1.29  | ✓      | 31183.8    | 31.57   | 5.56          |
| trek-router              | 1.2.0   | ✓      | 30317.0    | 32.48   | 4.97          |
| connect                  | 3.7.0   | ✗      | 29875.0    | 32.98   | 5.33          |
| connect-router           | 1.3.5   | ✓      | 29599.2    | 33.28   | 5.28          |
| yeps-router              | 1.2.0   | ✓      | 28311.2    | 34.82   | 5.05          |
| koa                      | 2.13.1  | ✗      | 27100.0    | 36.39   | 4.83          |
| vapr                     | 0.6.0   | ✓      | 25228.8    | 39.13   | 4.14          |
| restify                  | 8.5.1   | ✓      | 24198.4    | 40.82   | 4.36          |
| koa-router               | 10.1.1  | ✓      | 23913.2    | 41.32   | 4.26          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 23856.4    | 41.42   | 4.25          |
| take-five                | 2.0.0   | ✓      | 23032.0    | 42.92   | 8.28          |
| total.js                 | 3.4.10  | ✓      | 20469.6    | 48.34   | 6.27          |
| hapi                     | 20.1.5  | ✓      | 20369.9    | 48.59   | 3.63          |
| microrouter              | 3.1.3   | ✓      | 19315.1    | 51.26   | 3.44          |
| egg.js                   | 2.30.0  | ✓      | 13762.4    | 72.15   | 4.84          |
| express                  | 4.17.1  | ✓      | 8646.8     | 115.07  | 1.54          |
| express-with-middlewares | 4.17.1  | ✓      | 7650.2     | 130.06  | 2.85          |
| express-route-prefix     | 4.17.1  | ✓      | 7547.8     | 131.85  | 2.79          |
| fastify-big-json         | 3.20.2  | ✓      | 3383.7     | 294.37  | 38.92         |
