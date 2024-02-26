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

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Mon Feb 26 2024 01:30:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 44634.4    | 21.89        | 7.96          |
| connect                  | 3.7.0    | ✗      | 43548.0    | 22.45        | 7.77          |
| rayo                     | 1.4.6    | ✓      | 43209.6    | 22.63        | 7.71          |
| fastify                  | 4.26.1   | ✓      | 43172.0    | 22.66        | 7.74          |
| polka                    | 0.5.2    | ✓      | 43149.4    | 22.68        | 7.69          |
| polkadot                 | 1.0.0    | ✗      | 42844.8    | 22.83        | 7.64          |
| server-base-router       | 7.1.32   | ✓      | 41909.6    | 23.36        | 7.47          |
| server-base              | 7.1.32   | ✗      | 41308.0    | 23.71        | 7.37          |
| connect-router           | 1.3.8    | ✓      | 41021.6    | 23.87        | 7.32          |
| h3                       | 1.11.1   | ✗      | 39677.6    | 24.70        | 7.08          |
| h3-router                | 1.11.1   | ✓      | 39104.2    | 25.07        | 6.97          |
| 0http                    | 3.5.2    | ✓      | 37916.8    | 25.87        | 6.76          |
| koa                      | 2.15.0   | ✗      | 35281.4    | 27.86        | 6.29          |
| hono                     | 4.0.7    | ✓      | 34390.4    | 28.57        | 6.13          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33396.8    | 29.47        | 5.96          |
| take-five                | 2.0.0    | ✓      | 33247.0    | 29.57        | 11.95         |
| koa-router               | 12.0.1   | ✓      | 32043.0    | 30.70        | 5.71          |
| restify                  | 11.1.0   | ✓      | 31797.0    | 30.94        | 5.73          |
| hapi                     | 21.3.3   | ✓      | 30371.2    | 32.39        | 5.42          |
| restana                  | 4.9.7    | ✓      | 29894.2    | 32.95        | 5.33          |
| fastify-big-json         | 4.26.1   | ✓      | 11738.0    | 84.64        | 135.04        |
| express                  | 4.18.2   | ✓      | 10561.6    | 94.11        | 1.88          |
| express-with-middlewares | 4.18.2   | ✓      | 9684.6     | 102.65       | 3.60          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.1  | ✓      | N/A        | N/A          | N/A           |
