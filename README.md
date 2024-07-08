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
* __Node:__ `v20.15.0`
* __Run:__ Mon Jul 08 2024 01:39:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.0 | ✗      | 46585.6    | 20.96        | 8.31          |
| fastify                  | 4.28.1   | ✓      | 46007.2    | 21.23        | 8.25          |
| connect                  | 3.7.0    | ✗      | 45417.4    | 21.51        | 8.10          |
| polka                    | 0.5.2    | ✓      | 45326.4    | 21.56        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 45200.0    | 21.63        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 45099.2    | 21.68        | 8.04          |
| rayo                     | 1.4.6    | ✓      | 44586.4    | 21.94        | 7.95          |
| server-base              | 7.1.32   | ✗      | 44548.8    | 21.95        | 7.95          |
| 0http                    | 3.5.3    | ✓      | 44336.8    | 22.06        | 7.91          |
| connect-router           | 1.3.8    | ✓      | 41946.4    | 23.34        | 7.48          |
| h3                       | 1.12.0   | ✗      | 40916.0    | 23.94        | 7.30          |
| h3-router                | 1.12.0   | ✓      | 39739.2    | 24.66        | 7.09          |
| hono                     | 4.4.12   | ✓      | 39184.8    | 25.02        | 6.99          |
| restana                  | 4.9.9    | ✓      | 38806.4    | 25.27        | 6.92          |
| koa                      | 2.15.3   | ✗      | 35900.6    | 27.36        | 6.40          |
| take-five                | 2.0.0    | ✓      | 34190.8    | 28.75        | 12.29         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33214.8    | 29.61        | 5.92          |
| restify                  | 11.1.0   | ✓      | 32997.0    | 29.80        | 5.95          |
| koa-router               | 12.0.1   | ✓      | 32791.6    | 30.00        | 5.85          |
| hapi                     | 21.3.10  | ✓      | 30701.0    | 32.07        | 5.47          |
| fastify-big-json         | 4.28.1   | ✓      | 11643.4    | 85.31        | 133.96        |
| express                  | 4.19.2   | ✓      | 10402.2    | 95.55        | 1.86          |
| express-with-middlewares | 4.19.2   | ✓      | 9984.0     | 99.51        | 3.71          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
