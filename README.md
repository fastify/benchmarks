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
* __Node:__ `v20.13.1`
* __Run:__ Mon Jun 03 2024 01:36:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.13.1 | ✗      | 46226.4    | 21.13        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45287.2    | 21.58        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 45273.6    | 21.59        | 8.07          |
| polka                    | 0.5.2    | ✓      | 44379.2    | 22.04        | 7.91          |
| rayo                     | 1.4.6    | ✓      | 44154.4    | 22.15        | 7.87          |
| fastify                  | 4.27.0   | ✓      | 44057.6    | 22.20        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 43820.8    | 22.32        | 7.81          |
| server-base              | 7.1.32   | ✗      | 43332.0    | 22.57        | 7.73          |
| server-base-router       | 7.1.32   | ✓      | 43000.0    | 22.75        | 7.67          |
| connect-router           | 1.3.8    | ✓      | 42550.4    | 22.99        | 7.59          |
| h3                       | 1.11.1   | ✗      | 40436.0    | 24.24        | 7.21          |
| h3-router                | 1.11.1   | ✓      | 39118.4    | 25.06        | 6.98          |
| hono                     | 4.4.2    | ✓      | 38333.8    | 25.59        | 6.84          |
| restana                  | 4.9.9    | ✓      | 37828.0    | 25.94        | 6.75          |
| koa                      | 2.15.3   | ✗      | 35995.4    | 27.27        | 6.42          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34377.4    | 28.58        | 6.13          |
| take-five                | 2.0.0    | ✓      | 33241.0    | 29.58        | 11.95         |
| restify                  | 11.1.0   | ✓      | 33112.0    | 29.70        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32117.6    | 30.63        | 5.73          |
| hapi                     | 21.3.9   | ✓      | 30310.4    | 32.49        | 5.41          |
| fastify-big-json         | 4.27.0   | ✓      | 11485.0    | 86.51        | 132.14        |
| express                  | 4.19.2   | ✓      | 10629.6    | 93.48        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 10125.6    | 98.16        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
