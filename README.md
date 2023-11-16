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
* __Node:__ `v20.9.0`
* __Run:__ Thu Nov 16 2023 10:45:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 43627.2    | 22.42        | 7.78          |
| fastify                  | 4.24.3  | ✓      | 42519.2    | 23.01        | 7.62          |
| rayo                     | 1.4.5   | ✓      | 42472.0    | 23.04        | 7.57          |
| polka                    | 0.5.2   | ✓      | 42286.4    | 23.28        | 7.54          |
| connect                  | 3.7.0   | ✗      | 41899.0    | 23.37        | 7.47          |
| server-base-router       | 7.1.32  | ✓      | 41744.8    | 23.46        | 7.44          |
| server-base              | 7.1.32  | ✗      | 41415.2    | 23.65        | 7.39          |
| connect-router           | 1.3.8   | ✓      | 39822.4    | 24.62        | 7.10          |
| polkadot                 | 1.0.0   | ✗      | 39779.8    | 24.63        | 7.09          |
| h3                       | 1.8.2   | ✗      | 36950.4    | 26.56        | 6.06          |
| h3-router                | 1.8.2   | ✓      | 36711.8    | 26.74        | 6.02          |
| 0http                    | 3.5.2   | ✓      | 35940.4    | 27.33        | 6.41          |
| koa                      | 2.14.2  | ✗      | 34696.6    | 28.31        | 6.19          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33349.4    | 29.48        | 5.95          |
| take-five                | 2.0.0   | ✓      | 32648.2    | 30.13        | 11.74         |
| restify                  | 11.1.0  | ✓      | 32131.0    | 30.62        | 5.79          |
| koa-router               | 12.0.1  | ✓      | 31623.8    | 31.12        | 5.64          |
| restana                  | 4.9.7   | ✓      | 30971.6    | 31.78        | 5.52          |
| hapi                     | 21.3.2  | ✓      | 29013.2    | 33.96        | 5.17          |
| hono                     | 3.10.1  | ✓      | 11666.4    | 85.16        | 2.08          |
| fastify-big-json         | 4.24.3  | ✓      | 10994.4    | 90.41        | 126.50        |
| express                  | 4.18.2  | ✓      | 10329.8    | 96.16        | 1.84          |
| express-with-middlewares | 4.18.2  | ✓      | 9810.6     | 101.34       | 3.65          |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.43.3 | ✓      | N/A        | N/A          | N/A           |
