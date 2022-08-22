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
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug 22 2022 02:09:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 58698.4    | 16.54   | 10.47         |
| micro                    | 9.4.1   | ✗      | 58296.8    | 16.66   | 10.40         |
| polkadot                 | 1.0.0   | ✗      | 57674.4    | 16.85   | 10.28         |
| fastify                  | 4.5.2   | ✓      | 57153.6    | 17.00   | 10.25         |
| polka                    | 0.5.2   | ✓      | 56996.0    | 17.06   | 10.16         |
| 0http                    | 3.4.1   | ✓      | 55925.6    | 17.36   | 9.97          |
| connect                  | 3.7.0   | ✗      | 55440.6    | 17.55   | 9.89          |
| foxify                   | 0.10.20 | ✓      | 53685.6    | 18.13   | 8.81          |
| rayo                     | 1.3.10  | ✓      | 52798.4    | 18.45   | 9.42          |
| server-base              | 7.1.32  | ✗      | 52681.6    | 18.49   | 9.39          |
| server-base-router       | 7.1.32  | ✓      | 52003.2    | 18.74   | 9.27          |
| restana                  | 4.9.6   | ✓      | 49908.8    | 19.56   | 8.90          |
| connect-router           | 1.3.7   | ✓      | 48725.6    | 20.02   | 8.69          |
| micro-route              | 2.5.0   | ✓      | 48036.8    | 20.33   | 8.57          |
| yeps                     | 1.1.1   | ✗      | 47908.8    | 20.38   | 8.54          |
| trek-engine              | 1.0.5   | ✗      | 45986.4    | 21.25   | 7.54          |
| trek-router              | 1.2.0   | ✓      | 45236.8    | 21.62   | 7.42          |
| vapr                     | 0.6.0   | ✓      | 43409.6    | 22.54   | 7.12          |
| yeps-router              | 1.2.0   | ✓      | 41531.2    | 23.58   | 7.41          |
| koa                      | 2.13.4  | ✗      | 39475.0    | 24.83   | 7.04          |
| spirit                   | 0.6.1   | ✗      | 39231.2    | 25.00   | 7.00          |
| take-five                | 2.0.0   | ✓      | 38673.4    | 25.36   | 13.91         |
| total.js                 | 3.4.13  | ✓      | 38214.4    | 25.67   | 11.70         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37811.4    | 25.95   | 6.74          |
| spirit-router            | 0.5.0   | ✓      | 37020.8    | 26.51   | 6.60          |
| restify                  | 8.6.1   | ✓      | 36946.2    | 26.56   | 6.66          |
| koa-router               | 12.0.0  | ✓      | 33560.6    | 29.30   | 5.98          |
| hapi                     | 20.2.2  | ✓      | 30142.8    | 32.67   | 5.38          |
| microrouter              | 3.1.3   | ✓      | 28936.8    | 34.05   | 5.16          |
| egg.js                   | 2.36.0  | ✓      | 18317.7    | 54.07   | 6.55          |
| express                  | 4.18.1  | ✓      | 12185.8    | 81.52   | 2.17          |
| express-with-middlewares | 4.18.1  | ✓      | 10454.5    | 95.03   | 3.89          |
| fastify-big-json         | 4.5.2   | ✓      | 10149.6    | 97.97   | 116.78        |
| express-route-prefix     | 4.18.1  | ✓      | 10059.9    | 98.83   | 3.72          |
