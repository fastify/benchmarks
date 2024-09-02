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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 02 2024 01:44:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 47122.4    | 20.72        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46671.2    | 20.92        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46414.4    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46281.6    | 21.10        | 8.25          |
| server-base              | 7.1.32   | ✗      | 46278.4    | 21.10        | 8.25          |
| fastify                  | 4.28.1   | ✓      | 46273.6    | 21.12        | 8.30          |
| server-base-router       | 7.1.32   | ✓      | 45978.4    | 21.24        | 8.20          |
| 0http                    | 3.5.3    | ✓      | 45313.6    | 21.58        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 44868.8    | 21.78        | 8.00          |
| connect-router           | 1.3.8    | ✓      | 43118.4    | 22.69        | 7.69          |
| h3                       | 1.12.0   | ✗      | 41469.6    | 23.62        | 7.40          |
| hono                     | 4.5.10   | ✓      | 40775.2    | 24.02        | 7.27          |
| restana                  | 4.9.9    | ✓      | 40509.6    | 24.19        | 7.22          |
| h3-router                | 1.12.0   | ✓      | 40154.4    | 24.40        | 7.16          |
| koa                      | 2.15.3   | ✗      | 36894.2    | 26.61        | 6.58          |
| restify                  | 11.1.0   | ✓      | 36058.2    | 27.23        | 6.50          |
| take-five                | 2.0.0    | ✓      | 34865.4    | 28.18        | 12.53         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34565.6    | 28.42        | 6.16          |
| koa-router               | 12.0.1   | ✓      | 33327.4    | 29.51        | 5.94          |
| hapi                     | 21.3.10  | ✓      | 30986.6    | 31.77        | 5.53          |
| fastify-big-json         | 4.28.1   | ✓      | 11923.6    | 83.28        | 137.19        |
| express                  | 4.19.2   | ✓      | 10641.4    | 93.37        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 10187.0    | 97.53        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
