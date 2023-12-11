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
* __Run:__ Mon Dec 11 2023 01:34:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 53304.0    | 18.28        | 9.51          |
| 0http                    | 3.5.2    | ✓      | 49525.6    | 19.70        | 8.83          |
| h3                       | 1.9.0    | ✗      | 47607.2    | 20.52        | 7.81          |
| h3-router                | 1.9.0    | ✓      | 46353.6    | 21.08        | 7.60          |
| fastify                  | 4.24.3   | ✓      | 45120.8    | 21.67        | 8.09          |
| bare                     | v20.10.0 | ✗      | 44970.4    | 21.75        | 8.02          |
| polka                    | 0.5.2    | ✓      | 44480.0    | 21.98        | 7.93          |
| connect                  | 3.7.0    | ✗      | 44347.2    | 22.05        | 7.91          |
| rayo                     | 1.4.5    | ✓      | 43716.8    | 22.37        | 7.80          |
| server-base-router       | 7.1.32   | ✓      | 43590.4    | 22.44        | 7.77          |
| server-base              | 7.1.32   | ✗      | 43546.4    | 22.47        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 40760.8    | 24.03        | 7.27          |
| restana                  | 4.9.7    | ✓      | 40588.8    | 24.13        | 7.24          |
| koa                      | 2.14.2   | ✗      | 36043.4    | 27.23        | 6.43          |
| hono                     | 3.11.4   | ✓      | 35841.4    | 27.39        | 6.39          |
| take-five                | 2.0.0    | ✓      | 34278.4    | 28.69        | 12.32         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33667.4    | 29.21        | 6.00          |
| restify                  | 11.1.0   | ✓      | 33608.4    | 29.25        | 6.06          |
| koa-router               | 12.0.1   | ✓      | 31928.8    | 30.82        | 5.69          |
| hapi                     | 21.3.2   | ✓      | 30190.4    | 32.62        | 5.38          |
| fastify-big-json         | 4.24.3   | ✓      | 11289.8    | 88.02        | 129.90        |
| express                  | 4.18.2   | ✓      | 10760.4    | 92.36        | 1.92          |
| express-with-middlewares | 4.18.2   | ✓      | 9907.8     | 100.30       | 3.68          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.44.1  | ✓      | N/A        | N/A          | N/A           |
