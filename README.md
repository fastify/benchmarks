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

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Mon Oct 21 2024 01:50:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47996.0    | 20.38        | 8.56          |
| connect                  | 3.7.0    | ✗      | 47068.8    | 20.73        | 8.39          |
| fastify                  | 5.0.0    | ✓      | 45716.0    | 21.38        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45256.8    | 21.60        | 8.07          |
| 0http                    | 3.5.3    | ✓      | 45016.8    | 21.72        | 8.03          |
| rayo                     | 1.4.6    | ✓      | 45005.6    | 21.72        | 8.03          |
| micro                    | 10.0.1   | ✗      | 44466.4    | 21.98        | 7.93          |
| polkadot                 | 1.0.0    | ✗      | 44140.8    | 22.15        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 43988.0    | 22.23        | 7.84          |
| server-base              | 7.1.32   | ✗      | 43931.2    | 22.26        | 7.83          |
| connect-router           | 1.3.8    | ✓      | 43366.4    | 22.56        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 41891.2    | 23.37        | 7.47          |
| adonisjs                 | 7.2.5    | ✓      | 41252.0    | 23.74        | 7.36          |
| h3                       | 1.13.0   | ✗      | 41160.8    | 23.80        | 7.34          |
| hono                     | 4.6.5    | ✓      | 40401.6    | 24.25        | 7.21          |
| h3-router                | 1.13.0   | ✓      | 40117.6    | 24.43        | 7.15          |
| koa                      | 2.15.3   | ✗      | 37017.4    | 26.52        | 6.60          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35430.4    | 27.72        | 6.32          |
| restana                  | 4.9.9    | ✓      | 35255.6    | 27.86        | 6.29          |
| take-five                | 2.0.0    | ✓      | 34075.4    | 28.84        | 12.25         |
| koa-router               | 12.0.1   | ✓      | 33737.2    | 29.13        | 6.02          |
| restify                  | 11.1.0   | ✓      | 33166.8    | 29.65        | 5.98          |
| hapi                     | 21.3.10  | ✓      | 31422.2    | 31.32        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 29116.4    | 33.84        | 5.19          |
| fastify-big-json         | 5.0.0    | ✓      | 12064.6    | 82.31        | 138.81        |
| express                  | 5.0.1    | ✓      | 10094.8    | 98.47        | 1.80          |
| express-with-middlewares | 5.0.1    | ✓      | 9294.8     | 106.97       | 3.46          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
