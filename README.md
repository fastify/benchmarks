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
* __Run:__ Mon Dec 18 2023 01:34:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 52391.2    | 18.60        | 9.34          |
| h3                       | 1.9.0    | ✗      | 46112.8    | 21.18        | 7.56          |
| bare                     | v20.10.0 | ✗      | 45802.4    | 21.32        | 8.17          |
| 0http                    | 3.5.2    | ✓      | 45307.2    | 21.57        | 8.08          |
| h3-router                | 1.9.0    | ✓      | 44624.8    | 21.91        | 7.32          |
| fastify                  | 4.25.1   | ✓      | 44381.6    | 22.04        | 7.96          |
| polka                    | 0.5.2    | ✓      | 43864.0    | 22.30        | 7.82          |
| connect                  | 3.7.0    | ✗      | 43648.8    | 22.41        | 7.78          |
| rayo                     | 1.4.5    | ✓      | 42836.8    | 22.84        | 7.64          |
| server-base              | 7.1.32   | ✗      | 42580.0    | 22.98        | 7.59          |
| server-base-router       | 7.1.32   | ✓      | 42286.4    | 23.15        | 7.54          |
| connect-router           | 1.3.8    | ✓      | 40702.4    | 24.07        | 7.26          |
| restana                  | 4.9.7    | ✓      | 38136.6    | 25.72        | 6.80          |
| koa                      | 2.14.2   | ✗      | 35836.2    | 27.40        | 6.39          |
| hono                     | 3.11.8   | ✓      | 35471.2    | 27.68        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34117.2    | 28.80        | 6.08          |
| take-five                | 2.0.0    | ✓      | 33609.8    | 29.25        | 12.08         |
| restify                  | 11.1.0   | ✓      | 33071.2    | 29.73        | 5.96          |
| koa-router               | 12.0.1   | ✓      | 32267.0    | 30.49        | 5.75          |
| hapi                     | 21.3.2   | ✓      | 29900.8    | 32.93        | 5.33          |
| fastify-big-json         | 4.25.1   | ✓      | 11328.6    | 87.67        | 130.34        |
| express                  | 4.18.2   | ✓      | 10825.6    | 91.74        | 1.93          |
| express-with-middlewares | 4.18.2   | ✓      | 9843.1     | 101.00       | 3.66          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.44.1  | ✓      | N/A        | N/A          | N/A           |
