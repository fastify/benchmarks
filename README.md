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
* __Run:__ Mon Nov 04 2024 01:51:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 48113.6    | 20.33        | 8.58          |
| fastify                  | 5.1.0    | ✓      | 47153.6    | 20.68        | 8.45          |
| polka                    | 0.5.2    | ✓      | 47128.8    | 20.71        | 8.40          |
| connect                  | 3.7.0    | ✗      | 46853.6    | 20.84        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46584.8    | 20.97        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 46158.4    | 21.14        | 8.23          |
| 0http                    | 3.5.3    | ✓      | 46107.2    | 21.20        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45832.0    | 21.29        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45186.4    | 21.63        | 8.06          |
| micro                    | 10.0.1   | ✗      | 45092.8    | 21.67        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 43632.0    | 22.42        | 7.78          |
| micro-route              | 2.5.0    | ✓      | 42580.0    | 22.96        | 7.59          |
| h3                       | 1.13.0   | ✗      | 42461.6    | 23.05        | 7.57          |
| adonisjs                 | 7.2.5    | ✓      | 41808.0    | 23.43        | 7.46          |
| h3-router                | 1.13.0   | ✓      | 40696.0    | 24.07        | 7.26          |
| hono                     | 4.6.8    | ✓      | 40498.4    | 24.19        | 7.22          |
| koa                      | 2.15.3   | ✗      | 38329.6    | 25.58        | 6.84          |
| restana                  | 4.9.9    | ✓      | 37742.6    | 26.00        | 6.73          |
| take-five                | 2.0.0    | ✓      | 36035.0    | 27.23        | 12.96         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35474.6    | 27.71        | 6.33          |
| restify                  | 11.1.0   | ✓      | 34958.0    | 28.11        | 6.30          |
| koa-router               | 12.0.1   | ✓      | 34306.8    | 28.64        | 6.12          |
| hapi                     | 21.3.12  | ✓      | 32377.8    | 30.37        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 29996.0    | 32.83        | 5.35          |
| fastify-big-json         | 5.1.0    | ✓      | 11987.4    | 82.85        | 137.92        |
| express                  | 5.0.1    | ✓      | 10177.8    | 97.62        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9421.8     | 105.54       | 3.50          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
