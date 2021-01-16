<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![Build Status](https://travis-ci.org/fastify/fastify.svg?branch=master)](https://travis-ci.org/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is, fast and low overhead web framework for Node.js
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
* __Machine:__ Linux fv-az50-626 5.4.0-1036-azure #38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.1`
* __Run:__ Sat Jan 16 19:18:27 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.10.1  | ✓      | 64683.2    | 14.99   | 11.54         |
| 0http                    | 3.0.0   | ✓      | 60436.8    | 16.06   | 10.78         |
| bare                     | 10.13.0 | ✗      | 60258.4    | 16.11   | 10.75         |
| polkadot                 | 1.0.0   | ✗      | 59602.4    | 16.30   | 10.63         |
| foxify                   | 0.10.20 | ✓      | 59111.2    | 16.42   | 9.70          |
| polka                    | 0.5.2   | ✓      | 58952.0    | 16.48   | 10.51         |
| connect                  | 3.7.0   | ✗      | 58108.0    | 16.71   | 10.36         |
| server-base              | 7.1.23  | ✗      | 56984.0    | 17.05   | 10.16         |
| rayo                     | 1.3.6   | ✓      | 56336.0    | 17.25   | 10.05         |
| server-base-router       | 7.1.23  | ✓      | 56296.0    | 17.26   | 10.04         |
| micro                    | 9.3.4   | ✗      | 56266.4    | 17.27   | 10.03         |
| connect-router           | 1.3.5   | ✓      | 52819.2    | 18.44   | 9.42          |
| yeps                     | 1.1.1   | ✗      | 52294.4    | 18.62   | 9.33          |
| micro-route              | 2.5.0   | ✓      | 52024.0    | 18.72   | 9.28          |
| restana                  | 4.8.1   | ✓      | 51368.0    | 18.98   | 9.16          |
| trek-engine              | 1.0.5   | ✗      | 47545.4    | 20.54   | 7.80          |
| trek-router              | 1.2.0   | ✓      | 47086.6    | 20.74   | 7.72          |
| yeps-router              | 1.2.0   | ✓      | 43118.4    | 22.69   | 7.69          |
| spirit                   | 0.6.1   | ✗      | 42965.6    | 22.80   | 7.66          |
| vapr                     | 0.5.5   | ✓      | 42636.8    | 22.95   | 6.99          |
| koa                      | 2.13.1  | ✗      | 41324.2    | 23.70   | 7.37          |
| koa-isomorphic-router    | 0.1.1   | ✓      | 38433.4    | 25.52   | 6.85          |
| spirit-router            | 0.5.0   | ✓      | 38260.2    | 25.66   | 6.82          |
| total.js                 | 3.4.6   | ✓      | 38139.2    | 25.72   | 11.67         |
| koa-router               | 10.0.0  | ✓      | 37539.4    | 26.15   | 6.69          |
| restify                  | 8.5.1   | ✓      | 34424.2    | 28.55   | 6.20          |
| hapi                     | 20.0.3  | ✓      | 30830.8    | 31.94   | 5.50          |
| microrouter              | 3.1.3   | ✓      | 28684.4    | 34.36   | 5.12          |
| egg.js                   | 2.29.1  | ✓      | 19175.7    | 51.66   | 6.75          |
| express                  | 4.17.1  | ✓      | 11795.6    | 84.23   | 2.10          |
| express-with-middlewares | 4.17.1  | ✓      | 10241.3    | 97.06   | 3.81          |
| fastify-big-json         | 3.10.1  | ✓      | 9829.4     | 101.19  | 113.08        |
| express-route-prefix     | 4.17.1  | ✓      | 9354.8     | 106.28  | 3.46          |
| take-five                | 2.0.0   | ✓      | N/A        | N/A     | N/A           |
