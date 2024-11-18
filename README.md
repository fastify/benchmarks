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
* __Node:__ `v20.18.0`
* __Run:__ Mon Nov 18 2024 01:54:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47828.0    | 20.43        | 8.53          |
| fastify                  | 5.1.0    | ✓      | 46844.0    | 20.86        | 8.40          |
| polkadot                 | 1.0.0    | ✗      | 46670.4    | 20.93        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46290.4    | 21.11        | 8.25          |
| polka                    | 0.5.2    | ✓      | 45914.4    | 21.26        | 8.19          |
| 0http                    | 3.5.3    | ✓      | 45712.8    | 21.39        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45508.8    | 21.49        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45490.4    | 21.48        | 8.11          |
| micro                    | 10.0.1   | ✗      | 45483.2    | 21.48        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 45260.8    | 21.59        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 43714.4    | 22.37        | 7.80          |
| micro-route              | 2.5.0    | ✓      | 42455.2    | 23.05        | 7.57          |
| adonisjs                 | 7.2.5    | ✓      | 41464.8    | 23.63        | 7.39          |
| h3                       | 1.13.0   | ✗      | 41315.2    | 23.71        | 7.37          |
| h3-router                | 1.13.0   | ✓      | 40363.2    | 24.27        | 7.20          |
| hono                     | 4.6.10   | ✓      | 40133.6    | 24.42        | 7.16          |
| restana                  | 4.9.9    | ✓      | 39356.8    | 24.91        | 7.02          |
| koa                      | 2.15.3   | ✗      | 36794.4    | 26.66        | 6.56          |
| take-five                | 2.0.0    | ✓      | 35546.6    | 27.63        | 12.78         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34869.8    | 28.17        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34559.0    | 28.42        | 6.23          |
| koa-router               | 12.0.1   | ✓      | 34245.6    | 28.69        | 6.11          |
| hapi                     | 21.3.12  | ✓      | 32301.0    | 30.45        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 30694.4    | 32.07        | 5.47          |
| fastify-big-json         | 5.1.0    | ✓      | 12022.8    | 82.62        | 138.34        |
| express                  | 5.0.1    | ✓      | 10040.6    | 99.02        | 1.79          |
| express-with-middlewares | 5.0.1    | ✓      | 9342.0     | 106.41       | 3.47          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
