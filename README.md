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
* __Node:__ `v14.17.3`
* __Run:__ Tue Jul 20 2021 19:00:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.3.4   | ✗      | 43015.2    | 22.75   | 7.67          |
| polkadot                 | 1.0.0   | ✗      | 42612.0    | 22.97   | 7.60          |
| fastify                  | 3.19.1  | ✓      | 42057.6    | 23.28   | 7.50          |
| rayo                     | 1.3.6   | ✓      | 41796.2    | 23.43   | 7.45          |
| 0http                    | 3.1.1   | ✓      | 41352.6    | 23.69   | 7.37          |
| foxify                   | 0.10.20 | ✓      | 40486.0    | 24.23   | 6.64          |
| polka                    | 0.5.2   | ✓      | 40344.8    | 24.29   | 7.19          |
| spirit                   | 0.6.1   | ✗      | 39104.6    | 25.13   | 6.97          |
| bare                     | 10.13.0 | ✗      | 38857.6    | 25.25   | 6.93          |
| server-base-router       | 7.1.27  | ✓      | 37068.2    | 26.50   | 6.61          |
| trek-router              | 1.2.0   | ✓      | 36832.6    | 26.65   | 6.04          |
| yeps                     | 1.1.1   | ✗      | 36831.8    | 26.65   | 6.57          |
| server-base              | 7.1.27  | ✗      | 36689.2    | 26.76   | 6.54          |
| restana                  | 4.9.1   | ✓      | 36442.1    | 26.95   | 6.50          |
| micro-route              | 2.5.0   | ✓      | 34770.0    | 28.25   | 6.20          |
| connect-router           | 1.3.5   | ✓      | 34623.9    | 28.40   | 6.17          |
| yeps-router              | 1.2.0   | ✓      | 33673.8    | 29.19   | 6.01          |
| trek-engine              | 1.0.5   | ✗      | 31585.9    | 31.18   | 5.18          |
| vapr                     | 0.6.0   | ✓      | 31457.0    | 31.28   | 5.16          |
| connect                  | 3.7.0   | ✗      | 30840.0    | 32.03   | 5.50          |
| koa                      | 2.13.1  | ✗      | 29508.8    | 33.40   | 5.26          |
| restify                  | 8.5.1   | ✓      | 27913.6    | 35.32   | 5.03          |
| spirit-router            | 0.5.0   | ✓      | 27610.8    | 35.78   | 4.92          |
| koa-router               | 10.0.0  | ✓      | 26603.6    | 37.09   | 4.74          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 26222.1    | 37.64   | 4.68          |
| total.js                 | 3.4.9   | ✓      | 25834.0    | 38.20   | 7.91          |
| take-five                | 2.0.0   | ✓      | 24018.5    | 41.15   | 8.64          |
| hapi                     | 20.1.5  | ✓      | 22625.6    | 43.69   | 4.03          |
| microrouter              | 3.1.3   | ✓      | 20422.4    | 48.44   | 3.64          |
| egg.js                   | 2.29.4  | ✓      | 14416.8    | 68.86   | 5.07          |
| express                  | 4.17.1  | ✓      | 10006.9    | 99.36   | 1.78          |
| fastify-big-json         | 3.19.1  | ✓      | 9316.8     | 106.85  | 107.18        |
| express-route-prefix     | 4.17.1  | ✓      | 8453.1     | 117.74  | 3.13          |
| express-with-middlewares | 4.17.1  | ✓      | 8369.5     | 118.85  | 3.11          |
