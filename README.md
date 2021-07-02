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
* __Node:__ `v14.17.1`
* __Run:__ Fri Jul 02 2021 18:57:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.18.1  | ✓      | 54383.2    | 17.93   | 9.70          |
| polkadot                 | 1.0.0   | ✗      | 52428.0    | 18.64   | 9.35          |
| rayo                     | 1.3.6   | ✓      | 51872.0    | 18.79   | 9.25          |
| micro                    | 9.3.4   | ✗      | 51548.8    | 18.90   | 9.19          |
| connect                  | 3.7.0   | ✗      | 50756.8    | 19.21   | 9.05          |
| foxify                   | 0.10.20 | ✓      | 50590.4    | 19.28   | 8.30          |
| server-base-router       | 7.1.27  | ✓      | 50414.4    | 19.34   | 8.99          |
| server-base              | 7.1.27  | ✗      | 49446.4    | 19.74   | 8.82          |
| 0http                    | 3.1.1   | ✓      | 49368.8    | 19.78   | 8.80          |
| bare                     | 10.13.0 | ✗      | 49318.4    | 19.81   | 8.80          |
| polka                    | 0.5.2   | ✓      | 48857.6    | 19.99   | 8.71          |
| restana                  | 4.9.1   | ✓      | 47633.6    | 20.56   | 8.49          |
| micro-route              | 2.5.0   | ✓      | 47340.8    | 20.67   | 8.44          |
| connect-router           | 1.3.5   | ✓      | 47068.0    | 20.76   | 8.39          |
| yeps                     | 1.1.1   | ✗      | 46900.8    | 20.83   | 8.36          |
| trek-engine              | 1.0.5   | ✗      | 45224.6    | 21.63   | 7.42          |
| trek-router              | 1.2.0   | ✓      | 44773.0    | 21.87   | 7.34          |
| vapr                     | 0.6.0   | ✓      | 42193.8    | 23.20   | 6.92          |
| spirit-router            | 0.5.0   | ✓      | 40576.8    | 24.18   | 7.24          |
| koa                      | 2.13.1  | ✗      | 40449.8    | 24.23   | 7.21          |
| spirit                   | 0.6.1   | ✗      | 40304.0    | 24.35   | 7.19          |
| yeps-router              | 1.2.0   | ✓      | 38836.2    | 25.25   | 6.93          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35688.6    | 27.54   | 6.36          |
| total.js                 | 3.4.9   | ✓      | 35515.8    | 27.75   | 10.87         |
| take-five                | 2.0.0   | ✓      | 34922.6    | 28.16   | 12.56         |
| koa-router               | 10.0.0  | ✓      | 34594.2    | 28.41   | 6.17          |
| restify                  | 8.5.1   | ✓      | 32939.2    | 29.85   | 5.94          |
| hapi                     | 20.1.5  | ✓      | 27634.8    | 35.69   | 4.93          |
| microrouter              | 3.1.3   | ✓      | 26468.8    | 37.28   | 4.72          |
| egg.js                   | 2.29.4  | ✓      | 16509.4    | 60.05   | 5.81          |
| express                  | 4.17.1  | ✓      | 10196.1    | 97.53   | 1.82          |
| express-route-prefix     | 4.17.1  | ✓      | 8687.1     | 114.53  | 3.21          |
| express-with-middlewares | 4.17.1  | ✓      | 8637.6     | 115.16  | 3.21          |
| fastify-big-json         | 3.18.1  | ✓      | 8333.5     | 119.46  | 95.87         |
