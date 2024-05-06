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
* __Node:__ `v20.12.2`
* __Run:__ Mon May 06 2024 01:34:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.12.2 | ✗      | 46413.6    | 21.04        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46318.4    | 21.08        | 8.26          |
| fastify                  | 4.26.2   | ✓      | 46244.8    | 21.13        | 8.29          |
| polka                    | 0.5.2    | ✓      | 45956.8    | 21.26        | 8.20          |
| connect                  | 3.7.0    | ✗      | 45861.6    | 21.29        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45060.0    | 21.70        | 8.04          |
| server-base              | 7.1.32   | ✗      | 44588.8    | 21.94        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44076.0    | 22.19        | 7.86          |
| h3                       | 1.11.1   | ✗      | 43660.8    | 22.40        | 7.79          |
| h3-router                | 1.11.1   | ✓      | 42990.4    | 22.76        | 7.67          |
| 0http                    | 3.5.3    | ✓      | 42324.8    | 23.13        | 7.55          |
| connect-router           | 1.3.8    | ✓      | 42182.4    | 23.21        | 7.52          |
| hono                     | 4.3.2    | ✓      | 40422.4    | 24.23        | 7.21          |
| restana                  | 4.9.9    | ✓      | 38444.0    | 25.50        | 6.86          |
| koa                      | 2.15.3   | ✗      | 36703.4    | 26.73        | 6.54          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35021.6    | 28.06        | 6.25          |
| take-five                | 2.0.0    | ✓      | 34568.8    | 28.42        | 12.43         |
| koa-router               | 12.0.1   | ✓      | 33969.6    | 28.93        | 6.06          |
| restify                  | 11.1.0   | ✓      | 33726.2    | 29.15        | 6.08          |
| hapi                     | 21.3.9   | ✓      | 31690.0    | 31.03        | 5.65          |
| fastify-big-json         | 4.26.2   | ✓      | 11513.4    | 86.30        | 132.46        |
| express                  | 4.19.2   | ✓      | 10724.4    | 92.65        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 9926.6     | 100.14       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
