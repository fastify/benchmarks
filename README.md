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
* __Node:__ `v20.16.0`
* __Run:__ Mon Aug 26 2024 01:41:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 46671.2    | 20.93        | 8.32          |
| polka                    | 0.5.2    | ✓      | 44908.8    | 21.77        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44625.6    | 21.93        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 44481.6    | 22.00        | 7.93          |
| fastify                  | 4.28.1   | ✓      | 44343.2    | 22.07        | 7.95          |
| 0http                    | 3.5.3    | ✓      | 43183.2    | 22.66        | 7.70          |
| server-base-router       | 7.1.32   | ✓      | 43153.6    | 22.66        | 7.70          |
| server-base              | 7.1.32   | ✗      | 43116.8    | 22.68        | 7.69          |
| connect-router           | 1.3.8    | ✓      | 41871.2    | 23.41        | 7.47          |
| polkadot                 | 1.0.0    | ✗      | 41684.0    | 23.49        | 7.43          |
| h3                       | 1.12.0   | ✗      | 40604.8    | 24.12        | 7.24          |
| h3-router                | 1.12.0   | ✓      | 40296.8    | 24.32        | 7.19          |
| hono                     | 4.5.8    | ✓      | 40077.6    | 24.44        | 7.15          |
| restana                  | 4.9.9    | ✓      | 36591.4    | 26.83        | 6.53          |
| koa                      | 2.15.3   | ✗      | 36271.8    | 27.05        | 6.47          |
| take-five                | 2.0.0    | ✓      | 34504.8    | 28.49        | 12.41         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33787.2    | 29.09        | 6.03          |
| restify                  | 11.1.0   | ✓      | 33145.6    | 29.67        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32413.2    | 30.35        | 5.78          |
| hapi                     | 21.3.10  | ✓      | 31153.0    | 31.59        | 5.56          |
| fastify-big-json         | 4.28.1   | ✓      | 11689.6    | 84.98        | 134.48        |
| express                  | 4.19.2   | ✓      | 10554.8    | 94.16        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 10152.2    | 97.90        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
