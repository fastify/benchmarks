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
* __Run:__ Mon Jul 01 2024 01:44:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.0 | ✗      | 46858.4    | 20.84        | 8.36          |
| polka                    | 0.5.2    | ✓      | 45382.4    | 21.53        | 8.09          |
| connect                  | 3.7.0    | ✗      | 45009.6    | 21.72        | 8.03          |
| server-base-router       | 7.1.32   | ✓      | 44963.2    | 21.74        | 8.02          |
| fastify                  | 4.28.1   | ✓      | 44872.8    | 21.79        | 8.04          |
| rayo                     | 1.4.6    | ✓      | 44217.6    | 22.12        | 7.89          |
| server-base              | 7.1.32   | ✗      | 44091.2    | 22.18        | 7.86          |
| polkadot                 | 1.0.0    | ✗      | 43774.4    | 22.35        | 7.81          |
| 0http                    | 3.5.3    | ✓      | 43264.0    | 22.62        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42172.0    | 23.21        | 7.52          |
| h3                       | 1.12.0   | ✗      | 39408.0    | 24.88        | 7.03          |
| restana                  | 4.9.9    | ✓      | 38844.8    | 25.24        | 6.93          |
| h3-router                | 1.12.0   | ✓      | 38769.6    | 25.31        | 6.91          |
| hono                     | 4.4.10   | ✓      | 38728.8    | 25.32        | 6.91          |
| koa                      | 2.15.3   | ✗      | 36017.8    | 27.26        | 6.42          |
| take-five                | 2.0.0    | ✓      | 34567.0    | 28.43        | 12.43         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34186.0    | 28.75        | 6.10          |
| restify                  | 11.1.0   | ✓      | 32709.2    | 30.07        | 5.90          |
| koa-router               | 12.0.1   | ✓      | 32676.8    | 30.10        | 5.83          |
| hapi                     | 21.3.10  | ✓      | 29720.0    | 33.14        | 5.30          |
| fastify-big-json         | 4.28.1   | ✓      | 11623.8    | 85.46        | 133.73        |
| express                  | 4.19.2   | ✓      | 10899.8    | 91.17        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10044.9    | 98.92        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
