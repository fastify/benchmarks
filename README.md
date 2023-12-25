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
* __Run:__ Mon Dec 25 2023 01:33:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 53237.6    | 18.29        | 9.49          |
| h3                       | 1.9.0    | ✗      | 47246.4    | 20.68        | 7.75          |
| h3-router                | 1.9.0    | ✓      | 45561.6    | 21.44        | 7.47          |
| bare                     | v20.10.0 | ✗      | 45444.8    | 21.50        | 8.10          |
| fastify                  | 4.25.2   | ✓      | 45107.2    | 21.68        | 8.09          |
| polka                    | 0.5.2    | ✓      | 44395.2    | 22.03        | 7.92          |
| connect                  | 3.7.0    | ✗      | 43881.6    | 22.29        | 7.83          |
| rayo                     | 1.4.5    | ✓      | 43641.6    | 22.41        | 7.78          |
| server-base              | 7.1.32   | ✗      | 43567.2    | 22.45        | 7.77          |
| server-base-router       | 7.1.32   | ✓      | 42802.4    | 22.86        | 7.63          |
| restana                  | 4.9.7    | ✓      | 41669.6    | 23.50        | 7.43          |
| connect-router           | 1.3.8    | ✓      | 40923.2    | 23.93        | 7.30          |
| 0http                    | 3.5.2    | ✓      | 37571.8    | 26.12        | 6.70          |
| hono                     | 3.11.10  | ✓      | 35634.2    | 27.55        | 6.35          |
| koa                      | 2.14.2   | ✗      | 35570.6    | 27.60        | 6.34          |
| take-five                | 2.0.0    | ✓      | 33317.8    | 29.50        | 11.98         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33262.0    | 29.56        | 5.93          |
| restify                  | 11.1.0   | ✓      | 33129.6    | 29.67        | 5.97          |
| koa-router               | 12.0.1   | ✓      | 32752.4    | 30.02        | 5.84          |
| hapi                     | 21.3.2   | ✓      | 29861.2    | 32.98        | 5.33          |
| fastify-big-json         | 4.25.2   | ✓      | 11321.2    | 87.76        | 130.27        |
| express                  | 4.18.2   | ✓      | 10757.0    | 92.38        | 1.92          |
| express-with-middlewares | 4.18.2   | ✓      | 9862.3     | 100.78       | 3.67          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.44.1  | ✓      | N/A        | N/A          | N/A           |
