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
* __Node:__ `v14.17.4`
* __Run:__ Tue Aug 10 2021 18:57:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 37662.0    | 26.11   | 6.72          |
| spirit                   | 0.6.1   | ✗      | 35897.6    | 27.46   | 6.40          |
| 0http                    | 3.1.1   | ✓      | 35344.0    | 27.81   | 6.30          |
| micro                    | 9.3.4   | ✗      | 35057.0    | 28.04   | 6.25          |
| bare                     | 10.13.0 | ✗      | 34854.2    | 28.21   | 6.22          |
| fastify                  | 3.20.1  | ✓      | 34590.0    | 28.41   | 6.17          |
| polka                    | 0.5.2   | ✓      | 34498.2    | 28.50   | 6.15          |
| connect                  | 3.7.0   | ✗      | 33777.0    | 29.11   | 6.02          |
| spirit-router            | 0.5.0   | ✓      | 33672.6    | 29.32   | 6.01          |
| rayo                     | 1.3.6   | ✓      | 33501.6    | 29.34   | 5.97          |
| foxify                   | 0.10.20 | ✓      | 33198.2    | 29.63   | 5.44          |
| server-base              | 7.1.27  | ✗      | 31993.2    | 30.77   | 5.71          |
| restana                  | 4.9.1   | ✓      | 30858.0    | 31.90   | 5.50          |
| server-base-router       | 7.1.27  | ✓      | 30726.4    | 32.05   | 5.48          |
| micro-route              | 2.5.0   | ✓      | 30529.6    | 32.25   | 5.44          |
| connect-router           | 1.3.5   | ✓      | 29637.2    | 33.24   | 5.29          |
| trek-engine              | 1.0.5   | ✗      | 28910.8    | 34.09   | 4.74          |
| trek-router              | 1.2.0   | ✓      | 27604.0    | 35.72   | 4.53          |
| yeps                     | 1.1.1   | ✗      | 27526.0    | 35.82   | 4.91          |
| yeps-router              | 1.2.0   | ✓      | 26700.4    | 36.95   | 4.76          |
| vapr                     | 0.6.0   | ✓      | 25562.8    | 38.63   | 4.19          |
| koa                      | 2.13.1  | ✗      | 25458.0    | 38.77   | 4.54          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 25095.6    | 39.34   | 4.48          |
| restify                  | 8.5.1   | ✓      | 23408.8    | 42.21   | 4.22          |
| take-five                | 2.0.0   | ✓      | 22521.2    | 43.89   | 8.10          |
| koa-router               | 10.0.0  | ✓      | 21758.8    | 45.45   | 3.88          |
| total.js                 | 3.4.9   | ✓      | 20413.2    | 48.47   | 6.25          |
| hapi                     | 20.1.5  | ✓      | 19786.7    | 50.02   | 3.53          |
| microrouter              | 3.1.3   | ✓      | 19327.5    | 51.23   | 3.45          |
| egg.js                   | 2.30.0  | ✓      | 12525.6    | 79.31   | 4.41          |
| express                  | 4.17.1  | ✓      | 8120.8     | 122.51  | 1.45          |
| express-route-prefix     | 4.17.1  | ✓      | 6995.6     | 142.30  | 2.59          |
| express-with-middlewares | 4.17.1  | ✓      | 6874.8     | 144.75  | 2.56          |
| fastify-big-json         | 3.20.1  | ✓      | 2442.9     | 407.40  | 28.10         |
