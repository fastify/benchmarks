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
* __Node:__ `v20.11.1`
* __Run:__ Mon Mar 11 2024 01:30:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 47006.4    | 20.77        | 8.38          |
| polkadot                 | 1.0.0    | ✗      | 45976.0    | 21.26        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45788.8    | 21.34        | 8.17          |
| connect                  | 3.7.0    | ✗      | 45727.2    | 21.35        | 8.16          |
| fastify                  | 4.26.2   | ✓      | 45604.8    | 21.40        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 44309.6    | 22.07        | 7.90          |
| rayo                     | 1.4.6    | ✓      | 44173.6    | 22.14        | 7.88          |
| server-base              | 7.1.32   | ✗      | 43868.8    | 22.29        | 7.82          |
| h3                       | 1.11.1   | ✗      | 42812.0    | 22.86        | 7.64          |
| connect-router           | 1.3.8    | ✓      | 42186.4    | 23.20        | 7.52          |
| h3-router                | 1.11.1   | ✓      | 42093.6    | 23.26        | 7.51          |
| 0http                    | 3.5.2    | ✓      | 38744.0    | 25.31        | 6.91          |
| koa                      | 2.15.0   | ✗      | 36458.6    | 26.92        | 6.50          |
| hono                     | 4.0.10   | ✓      | 35771.8    | 27.45        | 6.38          |
| take-five                | 2.0.0    | ✓      | 34587.8    | 28.43        | 12.44         |
| restana                  | 4.9.7    | ✓      | 34419.0    | 28.56        | 6.14          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34411.0    | 28.56        | 6.14          |
| restify                  | 11.1.0   | ✓      | 33838.6    | 29.05        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 33239.6    | 29.60        | 5.93          |
| hapi                     | 21.3.3   | ✓      | 30692.4    | 32.07        | 5.47          |
| fastify-big-json         | 4.26.2   | ✓      | 11840.4    | 83.90        | 136.22        |
| express                  | 4.18.3   | ✓      | 10533.2    | 94.35        | 1.88          |
| express-with-middlewares | 4.18.3   | ✓      | 10105.0    | 98.38        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.1  | ✓      | N/A        | N/A          | N/A           |
