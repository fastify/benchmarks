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
* __Node:__ `v18.13.0`
* __Run:__ Mon Feb 06 2023 01:48:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2   | ✓      | 46684.0    | 20.93        | 8.33          |
| connect-router           | 1.3.7   | ✓      | 41194.4    | 23.81        | 7.35          |
| yeps                     | 1.1.1   | ✗      | 41095.6    | 23.82        | 7.33          |
| connect                  | 3.7.0   | ✗      | 40367.6    | 24.31        | 7.20          |
| vapr                     | 0.6.0   | ✓      | 40096.0    | 24.44        | 6.58          |
| server-base              | 7.1.32  | ✗      | 38183.0    | 25.73        | 6.81          |
| server-base-router       | 7.1.32  | ✓      | 37530.7    | 26.23        | 6.69          |
| polkadot                 | 1.0.0   | ✗      | 36456.8    | 27.16        | 6.50          |
| spirit                   | 0.6.1   | ✗      | 36087.2    | 27.27        | 6.44          |
| spirit-router            | 0.5.0   | ✓      | 36076.6    | 27.23        | 6.43          |
| koa                      | 2.14.1  | ✗      | 34948.6    | 28.12        | 6.23          |
| h3                       | 1.1.0   | ✗      | 34511.8    | 28.51        | 5.66          |
| 0http                    | v3.4.2  | ✓      | 34147.8    | 28.79        | 6.09          |
| take-five                | 2.0.0   | ✓      | 33568.4    | 29.29        | 12.07         |
| h3-router                | 1.1.0   | ✓      | 32897.2    | 29.91        | 5.40          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32755.4    | 30.04        | 5.84          |
| fastify                  | 4.12.0  | ✓      | 32715.0    | 30.17        | 5.87          |
| koa-router               | 12.0.0  | ✓      | 30737.2    | 32.03        | 5.48          |
| hapi                     | 21.2.1  | ✓      | 28406.8    | 34.75        | 5.07          |
| restify                  | 11.0.0  | ✓      | 27496.2    | 35.91        | 4.96          |
| restana                  | 4.9.7   | ✓      | 25983.2    | 38.04        | 4.63          |
| bare                     | 10.13.0 | ✗      | 19327.0    | 51.32        | 3.45          |
| yeps-router              | 1.2.0   | ✓      | 12155.2    | 81.73        | 2.17          |
| express                  | 4.18.2  | ✓      | 9471.1     | 105.06       | 1.69          |
| fastify-big-json         | 4.12.0  | ✓      | 8804.0     | 113.14       | 101.28        |
| express-with-middlewares | 4.18.2  | ✓      | 8612.0     | 115.48       | 3.20          |
| trpc-router              | 10.10.0 | ✓      | 6125.5     | 162.46       | 1.83          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
