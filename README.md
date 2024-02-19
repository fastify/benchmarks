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
* __Node:__ `v20.11.0`
* __Run:__ Mon Feb 19 2024 01:31:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 51031.2    | 19.09        | 9.10          |
| h3                       | 1.10.1   | ✗      | 48985.6    | 19.93        | 8.74          |
| h3-router                | 1.10.1   | ✓      | 47997.6    | 20.34        | 8.56          |
| bare                     | v20.11.0 | ✗      | 46067.2    | 21.21        | 8.21          |
| 0http                    | 3.5.2    | ✓      | 45595.2    | 21.44        | 8.13          |
| fastify                  | 4.26.1   | ✓      | 45076.0    | 21.70        | 8.08          |
| connect                  | 3.7.0    | ✗      | 44250.4    | 22.10        | 7.89          |
| polka                    | 0.5.2    | ✓      | 44118.4    | 22.16        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 43924.0    | 22.26        | 7.83          |
| server-base              | 7.1.32   | ✗      | 43752.8    | 22.36        | 7.80          |
| rayo                     | 1.4.6    | ✓      | 42692.0    | 22.93        | 7.61          |
| connect-router           | 1.3.8    | ✓      | 42526.4    | 23.02        | 7.58          |
| restana                  | 4.9.7    | ✓      | 35831.8    | 27.40        | 6.39          |
| koa                      | 2.15.0   | ✗      | 35395.8    | 27.75        | 6.31          |
| hono                     | 4.0.4    | ✓      | 34932.6    | 28.12        | 6.23          |
| take-five                | 2.0.0    | ✓      | 34257.4    | 28.68        | 12.32         |
| restify                  | 11.1.0   | ✓      | 32744.2    | 30.02        | 5.90          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32707.2    | 30.08        | 5.83          |
| koa-router               | 12.0.1   | ✓      | 32433.4    | 30.33        | 5.78          |
| hapi                     | 21.3.3   | ✓      | 31265.8    | 31.49        | 5.58          |
| fastify-big-json         | 4.26.1   | ✓      | 11439.6    | 86.83        | 131.62        |
| express                  | 4.18.2   | ✓      | 10781.4    | 92.15        | 1.92          |
| express-with-middlewares | 4.18.2   | ✓      | 9933.0     | 100.07       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.1  | ✓      | N/A        | N/A          | N/A           |
