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
* __Run:__ Mon Jul 15 2024 01:40:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.0 | ✗      | 45587.2    | 21.43        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45567.2    | 21.44        | 8.13          |
| fastify                  | 4.28.1   | ✓      | 45249.6    | 21.60        | 8.11          |
| connect                  | 3.7.0    | ✗      | 44872.8    | 21.79        | 8.00          |
| polka                    | 0.5.2    | ✓      | 44864.0    | 21.79        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 44622.4    | 21.92        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 43614.4    | 22.43        | 7.78          |
| server-base              | 7.1.32   | ✗      | 43456.8    | 22.51        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42644.8    | 22.95        | 7.60          |
| h3                       | 1.12.0   | ✗      | 42151.2    | 23.23        | 7.52          |
| 0http                    | 3.5.3    | ✓      | 41743.2    | 23.46        | 7.44          |
| h3-router                | 1.12.0   | ✓      | 40280.8    | 24.33        | 7.18          |
| hono                     | 4.4.13   | ✓      | 39488.0    | 24.82        | 7.04          |
| restana                  | 4.9.9    | ✓      | 38473.6    | 25.48        | 6.86          |
| koa                      | 2.15.3   | ✗      | 35434.2    | 27.73        | 6.32          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33914.4    | 28.98        | 6.05          |
| koa-router               | 12.0.1   | ✓      | 33415.4    | 29.42        | 5.96          |
| take-five                | 2.0.0    | ✓      | 32431.2    | 30.33        | 11.66         |
| restify                  | 11.1.0   | ✓      | 31578.4    | 31.16        | 5.69          |
| hapi                     | 21.3.10  | ✓      | 31225.4    | 31.52        | 5.57          |
| fastify-big-json         | 4.28.1   | ✓      | 11751.2    | 84.55        | 135.21        |
| express                  | 4.19.2   | ✓      | 10633.6    | 93.46        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 10156.0    | 97.87        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
