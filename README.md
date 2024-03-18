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
* __Run:__ Mon Mar 18 2024 01:31:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.11.1 | ✗      | 45109.6    | 21.67        | 8.04          |
| connect                  | 3.7.0    | ✗      | 44195.2    | 22.13        | 7.88          |
| polka                    | 0.5.2    | ✓      | 44043.2    | 22.21        | 7.85          |
| rayo                     | 1.4.6    | ✓      | 43860.0    | 22.30        | 7.82          |
| polkadot                 | 1.0.0    | ✗      | 43859.2    | 22.30        | 7.82          |
| fastify                  | 4.26.2   | ✓      | 43553.6    | 22.46        | 7.81          |
| server-base              | 7.1.32   | ✗      | 43023.2    | 22.74        | 7.67          |
| server-base-router       | 7.1.32   | ✓      | 42468.8    | 23.04        | 7.57          |
| connect-router           | 1.3.8    | ✓      | 41028.8    | 23.87        | 7.32          |
| h3-router                | 1.11.1   | ✓      | 39786.4    | 24.63        | 7.10          |
| h3                       | 1.11.1   | ✗      | 39633.6    | 24.74        | 7.07          |
| hono                     | 4.1.1    | ✓      | 38070.2    | 25.76        | 6.79          |
| 0http                    | 3.5.2    | ✓      | 36909.2    | 26.59        | 6.58          |
| koa                      | 2.15.1   | ✗      | 35797.4    | 27.43        | 6.38          |
| take-five                | 2.0.0    | ✓      | 33812.0    | 29.07        | 12.16         |
| restify                  | 11.1.0   | ✓      | 33344.8    | 29.48        | 6.01          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33344.2    | 29.49        | 5.95          |
| restana                  | 4.9.7    | ✓      | 33212.6    | 29.61        | 5.92          |
| koa-router               | 12.0.1   | ✓      | 32256.4    | 30.51        | 5.75          |
| hapi                     | 21.3.6   | ✓      | 30488.4    | 32.30        | 5.44          |
| fastify-big-json         | 4.26.2   | ✓      | 11755.2    | 84.53        | 135.25        |
| express                  | 4.18.3   | ✓      | 10664.0    | 93.16        | 1.90          |
| express-with-middlewares | 4.18.3   | ✓      | 10074.1    | 98.67        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
