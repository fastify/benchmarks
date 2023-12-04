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
* __Node:__ `v20.10.0`
* __Run:__ Mon Dec 04 2023 01:33:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 51724.0    | 18.82        | 9.22          |
| h3                       | 1.9.0    | ✗      | 47936.8    | 20.36        | 7.86          |
| h3-router                | 1.9.0    | ✓      | 47672.8    | 20.48        | 7.82          |
| 0http                    | 3.5.2    | ✓      | 45813.6    | 21.34        | 8.17          |
| fastify                  | 4.24.3   | ✓      | 44984.0    | 21.75        | 8.06          |
| bare                     | v20.10.0 | ✗      | 44759.2    | 21.85        | 7.98          |
| polka                    | 0.5.2    | ✓      | 43760.0    | 22.35        | 7.80          |
| rayo                     | 1.4.5    | ✓      | 43424.8    | 22.53        | 7.74          |
| connect                  | 3.7.0    | ✗      | 43190.4    | 22.65        | 7.70          |
| server-base-router       | 7.1.32   | ✓      | 42632.8    | 22.95        | 7.60          |
| server-base              | 7.1.32   | ✗      | 42348.8    | 23.12        | 7.55          |
| hono                     | 3.10.5   | ✓      | 42121.6    | 23.24        | 7.51          |
| restana                  | 4.9.7    | ✓      | 41964.0    | 23.33        | 7.48          |
| connect-router           | 1.3.8    | ✓      | 40480.0    | 24.20        | 7.22          |
| koa                      | 2.14.2   | ✗      | 35264.6    | 27.85        | 6.29          |
| take-five                | 2.0.0    | ✓      | 33815.4    | 29.07        | 12.16         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33436.2    | 29.43        | 5.96          |
| restify                  | 11.1.0   | ✓      | 32902.0    | 29.88        | 5.93          |
| koa-router               | 12.0.1   | ✓      | 32286.6    | 30.47        | 5.76          |
| hapi                     | 21.3.2   | ✓      | 29118.4    | 33.83        | 5.19          |
| fastify-big-json         | 4.24.3   | ✓      | 11163.4    | 89.00        | 128.43        |
| express                  | 4.18.2   | ✓      | 10642.0    | 93.37        | 1.90          |
| express-with-middlewares | 4.18.2   | ✓      | 9944.0     | 99.91        | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.44.1  | ✓      | N/A        | N/A          | N/A           |
