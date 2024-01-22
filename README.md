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
* __Run:__ Mon Jan 22 2024 01:36:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 55013.6    | 17.67        | 9.81          |
| h3                       | 1.10.0   | ✗      | 49010.4    | 19.91        | 8.74          |
| h3-router                | 1.10.0   | ✓      | 48260.0    | 20.22        | 8.61          |
| 0http                    | 3.5.2    | ✓      | 46718.4    | 20.90        | 8.33          |
| bare                     | v20.10.0 | ✗      | 45766.4    | 21.34        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45150.4    | 21.65        | 8.05          |
| fastify                  | 4.25.2   | ✓      | 44924.0    | 21.77        | 8.05          |
| connect                  | 3.7.0    | ✗      | 44782.4    | 21.85        | 7.99          |
| rayo                     | 1.4.6    | ✓      | 44319.2    | 22.06        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 43226.4    | 22.63        | 7.71          |
| server-base              | 7.1.32   | ✗      | 42938.4    | 22.78        | 7.66          |
| restana                  | 4.9.7    | ✓      | 42303.2    | 23.14        | 7.54          |
| connect-router           | 1.3.8    | ✓      | 41309.6    | 23.71        | 7.37          |
| koa                      | 2.15.0   | ✗      | 36454.4    | 26.92        | 6.50          |
| hono                     | 3.12.6   | ✓      | 35863.8    | 27.38        | 6.40          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34605.8    | 28.38        | 6.17          |
| restify                  | 11.1.0   | ✓      | 33379.2    | 29.45        | 6.02          |
| take-five                | 2.0.0    | ✓      | 33129.2    | 29.68        | 11.91         |
| koa-router               | 12.0.1   | ✓      | 32987.8    | 29.80        | 5.88          |
| hapi                     | 21.3.2   | ✓      | 30408.8    | 32.36        | 5.42          |
| fastify-big-json         | 4.25.2   | ✓      | 11585.0    | 85.76        | 133.30        |
| express                  | 4.18.2   | ✓      | 10638.8    | 93.36        | 1.90          |
| express-with-middlewares | 4.18.2   | ✓      | 9979.0     | 99.60        | 3.71          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
