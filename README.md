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
* __Run:__ Tue Jan 16 2024 16:08:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 3.5.2    | ✓      | 48845.6    | 19.98        | 8.71          |
| h3                       | 1.10.0   | ✗      | 48424.8    | 20.15        | 8.64          |
| h3-router                | 1.10.0   | ✓      | 46867.2    | 20.84        | 8.36          |
| bare                     | v20.10.0 | ✗      | 46350.4    | 21.07        | 8.27          |
| fastify                  | 4.25.2   | ✓      | 45509.6    | 21.47        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45507.2    | 21.47        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 44734.4    | 21.86        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44185.6    | 22.14        | 7.88          |
| polka                    | 0.5.2    | ✓      | 44161.6    | 22.14        | 7.88          |
| server-base              | 7.1.32   | ✗      | 44139.2    | 22.15        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 43397.6    | 22.54        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 41676.0    | 23.50        | 7.43          |
| restana                  | 4.9.7    | ✓      | 40363.2    | 24.27        | 7.20          |
| koa                      | 2.15.0   | ✗      | 36647.0    | 26.77        | 6.54          |
| hono                     | 3.12.5   | ✓      | 36610.6    | 26.81        | 6.53          |
| take-five                | 2.0.0    | ✓      | 34280.2    | 28.66        | 12.33         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34097.2    | 28.82        | 6.08          |
| restify                  | 11.1.0   | ✓      | 33758.4    | 29.12        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 33145.2    | 29.66        | 5.91          |
| hapi                     | 21.3.2   | ✓      | 30300.8    | 32.48        | 5.40          |
| fastify-big-json         | 4.25.2   | ✓      | 11394.4    | 87.19        | 131.09        |
| express                  | 4.18.2   | ✓      | 10633.6    | 93.48        | 1.90          |
| express-with-middlewares | 4.18.2   | ✓      | 10036.2    | 99.04        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.0  | ✓      | N/A        | N/A          | N/A           |
