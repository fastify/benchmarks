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
* __Run:__ Tue Jan 16 2024 18:05:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 52945.6    | 18.40        | 9.44          |
| h3                       | 1.10.0   | ✗      | 48228.8    | 20.24        | 8.60          |
| h3-router                | 1.10.0   | ✓      | 47576.8    | 20.52        | 8.48          |
| bare                     | v20.10.0 | ✗      | 44925.6    | 21.76        | 8.01          |
| polka                    | 0.5.2    | ✓      | 44717.6    | 21.87        | 7.98          |
| connect                  | 3.7.0    | ✗      | 44088.8    | 22.18        | 7.86          |
| fastify                  | 4.25.2   | ✓      | 43981.6    | 22.24        | 7.88          |
| rayo                     | 1.4.6    | ✓      | 42450.4    | 23.05        | 7.57          |
| server-base              | 7.1.32   | ✗      | 41624.8    | 23.53        | 7.42          |
| server-base-router       | 7.1.32   | ✓      | 41374.4    | 23.67        | 7.38          |
| connect-router           | 1.3.8    | ✓      | 41240.0    | 23.75        | 7.35          |
| restana                  | 4.9.7    | ✓      | 40172.8    | 24.39        | 7.16          |
| koa                      | 2.15.0   | ✗      | 36089.8    | 27.21        | 6.44          |
| 0http                    | 3.5.2    | ✓      | 35573.2    | 27.61        | 6.34          |
| hono                     | 3.12.5   | ✓      | 35538.0    | 27.63        | 6.34          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33092.4    | 29.71        | 5.90          |
| restify                  | 11.1.0   | ✓      | 32525.6    | 30.23        | 5.86          |
| take-five                | 2.0.0    | ✓      | 31935.0    | 30.81        | 11.48         |
| koa-router               | 12.0.1   | ✓      | 31374.0    | 31.37        | 5.59          |
| hapi                     | 21.3.2   | ✓      | 30536.8    | 32.24        | 5.45          |
| fastify-big-json         | 4.25.2   | ✓      | 11225.8    | 88.50        | 129.14        |
| express                  | 4.18.2   | ✓      | 10878.4    | 91.33        | 1.94          |
| express-with-middlewares | 4.18.2   | ✓      | 10029.8    | 99.12        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
