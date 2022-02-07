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
* __Node:__ `v14.18.3`
* __Run:__ Mon Feb 07 2022 01:33:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.27.1  | ✓      | 56254.4    | 17.28   | 10.03         |
| bare                     | 10.13.0 | ✗      | 55976.8    | 17.37   | 9.98          |
| polkadot                 | 1.0.0   | ✗      | 55748.8    | 17.44   | 9.94          |
| foxify                   | 0.10.20 | ✓      | 55571.2    | 17.50   | 9.12          |
| connect                  | 3.7.0   | ✗      | 55433.6    | 17.54   | 9.89          |
| 0http                    | 3.1.2   | ✓      | 55170.4    | 17.64   | 9.84          |
| micro                    | 9.3.4   | ✗      | 54468.8    | 17.86   | 9.71          |
| polka                    | 0.5.2   | ✓      | 54428.0    | 17.88   | 9.71          |
| rayo                     | 1.3.10  | ✓      | 54300.8    | 17.92   | 9.68          |
| server-base-router       | 7.1.29  | ✓      | 53389.6    | 18.23   | 9.52          |
| server-base              | 7.1.29  | ✗      | 51862.4    | 18.78   | 9.25          |
| restana                  | 4.9.3   | ✓      | 50332.8    | 19.35   | 8.98          |
| yeps                     | 1.1.1   | ✗      | 48486.4    | 20.13   | 8.65          |
| connect-router           | 1.3.6   | ✓      | 47440.0    | 20.58   | 8.46          |
| micro-route              | 2.5.0   | ✓      | 46123.2    | 21.18   | 8.23          |
| trek-engine              | 1.0.5   | ✗      | 45293.6    | 21.58   | 7.43          |
| trek-router              | 1.2.0   | ✓      | 44689.4    | 21.88   | 7.33          |
| vapr                     | 0.6.0   | ✓      | 42111.2    | 23.25   | 6.91          |
| yeps-router              | 1.2.0   | ✓      | 40752.8    | 24.04   | 7.27          |
| koa                      | 2.13.4  | ✗      | 39105.0    | 25.07   | 6.97          |
| take-five                | 2.0.0   | ✓      | 36973.0    | 26.56   | 13.29         |
| total.js                 | 3.4.13  | ✓      | 35969.8    | 27.32   | 11.01         |
| spirit                   | 0.6.1   | ✗      | 35908.8    | 27.35   | 6.40          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35890.6    | 27.36   | 6.40          |
| spirit-router            | 0.5.0   | ✓      | 35724.2    | 27.49   | 6.37          |
| restify                  | 8.6.0   | ✓      | 35274.2    | 27.85   | 6.36          |
| koa-router               | 10.1.1  | ✓      | 35145.4    | 27.96   | 6.27          |
| microrouter              | 3.1.3   | ✓      | 28786.4    | 34.23   | 5.13          |
| hapi                     | 20.2.1  | ✓      | 28693.2    | 34.35   | 5.12          |
| egg.js                   | 2.33.1  | ✓      | 18628.7    | 53.16   | 6.66          |
| express                  | 4.17.2  | ✓      | 12029.8    | 82.61   | 2.15          |
| express-with-middlewares | 4.17.2  | ✓      | 10288.5    | 96.60   | 3.83          |
| express-route-prefix     | 4.17.2  | ✓      | 10241.8    | 97.10   | 3.79          |
| fastify-big-json         | 3.27.1  | ✓      | 10012.1    | 99.34   | 115.18        |
