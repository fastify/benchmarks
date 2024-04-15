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
* __Node:__ `v20.12.1`
* __Run:__ Mon Apr 15 2024 03:53:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.12.1 | ✗      | 46892.0    | 20.83        | 8.36          |
| polkadot                 | 1.0.0    | ✗      | 45604.0    | 21.44        | 8.13          |
| polka                    | 0.5.2    | ✓      | 45405.6    | 21.51        | 8.10          |
| fastify                  | 4.26.2   | ✓      | 45164.8    | 21.64        | 8.10          |
| 0http                    | 3.5.3    | ✓      | 45126.4    | 21.66        | 8.05          |
| rayo                     | 1.4.6    | ✓      | 44833.6    | 21.81        | 8.00          |
| server-base              | 7.1.32   | ✗      | 44674.4    | 21.89        | 7.97          |
| connect                  | 3.7.0    | ✗      | 44626.4    | 21.91        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 43204.0    | 22.65        | 7.70          |
| h3                       | 1.11.1   | ✗      | 42976.8    | 22.77        | 7.66          |
| connect-router           | 1.3.8    | ✓      | 42652.8    | 22.94        | 7.61          |
| h3-router                | 1.11.1   | ✓      | 41413.6    | 23.65        | 7.39          |
| hono                     | 4.2.4    | ✓      | 40416.0    | 24.24        | 7.21          |
| restana                  | 4.9.9    | ✓      | 38696.0    | 25.34        | 6.90          |
| koa                      | 2.15.3   | ✗      | 35555.8    | 27.62        | 6.34          |
| take-five                | 2.0.0    | ✓      | 34290.0    | 28.66        | 12.33         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33973.8    | 28.92        | 6.06          |
| restify                  | 11.1.0   | ✓      | 33343.6    | 29.48        | 6.01          |
| koa-router               | 12.0.1   | ✓      | 32594.4    | 30.17        | 5.81          |
| hapi                     | 21.3.9   | ✓      | 30410.0    | 32.36        | 5.42          |
| fastify-big-json         | 4.26.2   | ✓      | 11882.0    | 83.61        | 136.71        |
| express                  | 4.19.2   | ✓      | 10500.6    | 94.65        | 1.87          |
| express-with-middlewares | 4.19.2   | ✓      | 10055.2    | 98.85        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
