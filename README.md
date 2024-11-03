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
* __Run:__ Mon Oct 28 2024 01:52:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 46784.8    | 20.87        | 8.34          |
| polka                    | 0.5.2    | ✓      | 45455.2    | 21.50        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45325.6    | 21.56        | 8.08          |
| fastify                  | 5.0.0    | ✓      | 45196.8    | 21.62        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 44948.0    | 21.75        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44907.2    | 21.76        | 8.01          |
| micro                    | 10.0.1   | ✗      | 44629.6    | 21.91        | 7.96          |
| server-base              | 7.1.32   | ✗      | 44154.6    | 22.15        | 7.87          |
| 0http                    | 3.5.3    | ✓      | 43780.8    | 22.34        | 7.81          |
| polkadot                 | 1.0.0    | ✗      | 42938.4    | 22.79        | 7.66          |
| connect-router           | 1.3.8    | ✓      | 42189.6    | 23.20        | 7.52          |
| micro-route              | 2.5.0    | ✓      | 41537.6    | 23.58        | 7.41          |
| adonisjs                 | 7.2.5    | ✓      | 41484.0    | 23.61        | 7.40          |
| h3                       | 1.13.0   | ✗      | 40014.4    | 24.49        | 7.14          |
| h3-router                | 1.13.0   | ✓      | 39348.8    | 24.92        | 7.02          |
| hono                     | 4.6.7    | ✓      | 37604.8    | 26.09        | 6.71          |
| restana                  | 4.9.9    | ✓      | 36890.2    | 26.61        | 6.58          |
| koa                      | 2.15.3   | ✗      | 36380.2    | 26.98        | 6.49          |
| take-five                | 2.0.0    | ✓      | 34620.6    | 28.38        | 12.45         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34356.8    | 28.60        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 34069.4    | 28.84        | 6.08          |
| hapi                     | 21.3.12  | ✓      | 30564.4    | 32.20        | 5.45          |
| restify                  | 11.1.0   | ✓      | 30522.0    | 32.26        | 5.50          |
| microrouter              | 3.1.3    | ✓      | 29440.4    | 33.46        | 5.25          |
| fastify-big-json         | 5.0.0    | ✓      | 11529.8    | 86.14        | 132.65        |
| express                  | 5.0.1    | ✓      | 9916.0     | 100.23       | 1.77          |
| express-with-middlewares | 5.0.1    | ✓      | 9084.6     | 109.41       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
