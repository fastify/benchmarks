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
* __Run:__ Mon Nov 27 2023 01:33:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| bare                     | 10.13.0 | ✗      | 45044.8    | 21.71        | 8.03          |
| fastify                  | 4.24.3  | ✓      | 44659.2    | 21.91        | 8.01          |
| polka                    | 0.5.2   | ✓      | 44119.4    | 22.17        | 7.87          |
| connect                  | 3.7.0   | ✗      | 43981.6    | 22.22        | 7.84          |
| server-base-router       | 7.1.32  | ✓      | 43435.2    | 22.52        | 7.75          |
| server-base              | 7.1.32  | ✗      | 43054.4    | 22.72        | 7.68          |
| rayo                     | 1.4.5   | ✓      | 42653.6    | 22.93        | 7.61          |
| polkadot                 | 1.0.0   | ✗      | 41756.0    | 23.44        | 7.45          |
| connect-router           | 1.3.8   | ✓      | 41262.4    | 23.73        | 7.36          |
| h3-router                | 1.9.0   | ✓      | 38831.2    | 25.25        | 6.37          |
| h3                       | 1.9.0   | ✗      | 38489.6    | 25.48        | 6.31          |
| 0http                    | 3.5.2   | ✓      | 37093.2    | 26.46        | 6.62          |
| koa                      | 2.14.2  | ✗      | 36380.6    | 26.97        | 6.49          |
| take-five                | 2.0.0   | ✓      | 34109.6    | 28.81        | 12.26         |
| restify                  | 11.1.0  | ✓      | 33354.4    | 29.49        | 6.01          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 33325.2    | 29.52        | 5.94          |
| koa-router               | 12.0.1  | ✓      | 32477.0    | 30.27        | 5.79          |
| restana                  | 4.9.7   | ✓      | 31064.8    | 31.68        | 5.54          |
| hapi                     | 21.3.2  | ✓      | 30663.2    | 32.10        | 5.47          |
| hono                     | 3.10.2  | ✓      | 12102.4    | 82.06        | 2.16          |
| fastify-big-json         | 4.24.3  | ✓      | 11181.6    | 88.86        | 128.65        |
| express                  | 4.18.2  | ✓      | 10587.0    | 93.83        | 1.89          |
| express-with-middlewares | 4.18.2  | ✓      | 9813.3     | 101.31       | 3.65          |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.44.1 | ✓      | N/A        | N/A          | N/A           |
