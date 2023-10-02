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

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.18.0`
* __Run:__ Mon Oct 02 2023 01:38:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0   | ✗      | 45308.0    | 21.57        | 8.08          |
| bare                     | 10.13.0 | ✗      | 45134.4    | 21.66        | 8.05          |
| fastify                  | 4.23.2  | ✓      | 44436.8    | 22.01        | 7.97          |
| polka                    | 0.5.2   | ✓      | 43859.4    | 22.31        | 7.82          |
| server-base-router       | 7.1.32  | ✓      | 41856.0    | 23.41        | 7.46          |
| connect                  | 3.7.0   | ✗      | 41774.2    | 23.44        | 7.45          |
| server-base              | 7.1.32  | ✗      | 41573.6    | 23.55        | 7.41          |
| yeps                     | 1.1.1   | ✗      | 40456.8    | 24.23        | 7.21          |
| connect-router           | 1.3.8   | ✓      | 39854.4    | 24.61        | 7.11          |
| vapr                     | 0.6.0   | ✓      | 39196.8    | 25.01        | 6.43          |
| spirit                   | 0.6.1   | ✗      | 37163.0    | 26.42        | 6.63          |
| spirit-router            | 0.5.0   | ✓      | 34719.0    | 28.32        | 6.19          |
| koa                      | 2.14.2  | ✗      | 34122.6    | 28.80        | 6.09          |
| 0http                    | 3.5.2   | ✓      | 33642.8    | 29.25        | 6.00          |
| yeps-router              | 1.2.0   | ✓      | 32699.2    | 30.07        | 5.83          |
| take-five                | 2.0.0   | ✓      | 32655.4    | 30.13        | 11.74         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 32354.8    | 30.40        | 5.77          |
| h3                       | 1.8.2   | ✗      | 31538.4    | 31.22        | 5.17          |
| restify                  | 11.1.0  | ✓      | 31376.8    | 31.37        | 5.66          |
| h3-router                | 1.8.2   | ✓      | 30852.0    | 31.92        | 5.06          |
| koa-router               | 12.0.0  | ✓      | 29854.8    | 32.99        | 5.32          |
| restana                  | 4.9.7   | ✓      | 29464.0    | 33.46        | 5.25          |
| hapi                     | 21.3.2  | ✓      | 28066.8    | 35.12        | 5.01          |
| fastify-big-json         | 4.23.2  | ✓      | 9782.3     | 101.79       | 112.54        |
| express                  | 4.18.2  | ✓      | 9408.0     | 105.73       | 1.68          |
| express-with-middlewares | 4.18.2  | ✓      | 8439.0     | 117.88       | 3.14          |
| foxify                   | 0.10.20 | ✓      | N/A        | N/A          | N/A           |
| galatajs                 | 0.1.1   | ✓      | N/A        | N/A          | N/A           |
| micro-route              | 2.5.0   | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1  | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3   | ✓      | N/A        | N/A          | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.38.5 | ✓      | N/A        | N/A          | N/A           |
