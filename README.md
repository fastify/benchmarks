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
* __Node:__ `v20.12.0`
* __Run:__ Mon Apr 08 2024 01:32:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.26.2   | ✓      | 45935.2    | 21.26        | 8.24          |
| bare                     | v20.12.0 | ✗      | 45868.0    | 21.30        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45808.0    | 21.33        | 8.17          |
| polka                    | 0.5.2    | ✓      | 45044.0    | 21.70        | 8.03          |
| server-base              | 7.1.32   | ✗      | 44447.2    | 22.01        | 7.93          |
| rayo                     | 1.4.6    | ✓      | 44248.8    | 22.10        | 7.89          |
| 0http                    | 3.5.3    | ✓      | 44118.4    | 22.17        | 7.87          |
| connect                  | 3.7.0    | ✗      | 44023.2    | 22.21        | 7.85          |
| server-base-router       | 7.1.32   | ✓      | 43820.0    | 22.32        | 7.81          |
| connect-router           | 1.3.8    | ✓      | 41943.2    | 23.34        | 7.48          |
| h3                       | 1.11.1   | ✗      | 41476.8    | 23.62        | 7.40          |
| h3-router                | 1.11.1   | ✓      | 41368.8    | 23.68        | 7.38          |
| hono                     | 4.2.2    | ✓      | 40829.6    | 23.99        | 7.28          |
| restana                  | 4.9.9    | ✓      | 37964.2    | 25.84        | 6.77          |
| koa                      | 2.15.2   | ✗      | 36287.4    | 27.05        | 6.47          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34195.0    | 28.73        | 6.10          |
| take-five                | 2.0.0    | ✓      | 34160.4    | 28.77        | 12.28         |
| restify                  | 11.1.0   | ✓      | 33106.8    | 29.69        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32718.6    | 30.06        | 5.83          |
| hapi                     | 21.3.8   | ✓      | 30645.6    | 32.13        | 5.46          |
| fastify-big-json         | 4.26.2   | ✓      | 11970.0    | 82.98        | 137.72        |
| express                  | 4.19.2   | ✓      | 10902.6    | 91.15        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10109.4    | 98.28        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
