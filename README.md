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
* __Machine:__ Linux fv-az86 5.0.0-1032-azure #34-Ubuntu SMP Mon Feb 10 19:37:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.16.1`
* __Run:__ Wed Apr  1 00:55:20 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 48565.6    | 1.95    | 7.60          |
| bare                     | ✗      | 45758.4    | 2.09    | 7.16          |
| fastify                  | ✓      | 44277.6    | 2.17    | 6.92          |
| connect                  | ✗      | 41373.6    | 2.33    | 6.47          |
| polka                    | ✓      | 41212.0    | 2.33    | 6.45          |
| rayo                     | ✓      | 41018.2    | 2.35    | 6.42          |
| foxify                   | ✓      | 40988.8    | 2.35    | 5.82          |
| micro                    | ✗      | 40716.8    | 2.37    | 6.37          |
| server-base-router       | ✓      | 38633.6    | 2.49    | 6.04          |
| server-base              | ✗      | 37670.4    | 2.56    | 5.89          |
| yeps                     | ✗      | 36944.8    | 2.61    | 5.78          |
| micro-route              | ✓      | 36912.6    | 2.62    | 5.77          |
| connect-router           | ✓      | 35057.4    | 2.76    | 5.48          |
| spirit-router            | ✓      | 34822.2    | 2.40    | 5.45          |
| trek-router              | ✓      | 33903.6    | 2.86    | 4.82          |
| spirit                   | ✗      | 33046.0    | 2.50    | 5.17          |
| yeps-router              | ✓      | 33045.2    | 2.93    | 5.17          |
| trek-engine              | ✗      | 32498.2    | 2.99    | 4.62          |
| koa                      | ✗      | 31761.6    | 3.06    | 4.97          |
| vapr                     | ✓      | 29624.8    | 3.28    | 4.21          |
| restify                  | ✓      | 28350.4    | 3.44    | 4.49          |
| koa-router               | ✓      | 28336.8    | 3.44    | 4.43          |
| total.js                 | ✓      | 27690.4    | 3.51    | 7.87          |
| express-route-prefix     | ✓      | 22272.0    | 4.39    | 7.75          |
| microrouter              | ✓      | 21522.4    | 4.54    | 3.37          |
| express                  | ✓      | 20366.0    | 4.80    | 3.19          |
| hapi                     | ✓      | 19349.6    | 5.08    | 3.03          |
| express-with-middlewares | ✓      | 17755.5    | 5.53    | 6.42          |
| egg.js                   | ✓      | 16354.3    | 6.04    | 5.40          |
| fastify-big-json         | ✓      | 9677.6     | 10.19   | 111.12        |
| take-five                | ✓      | N/A        | N/A     | N/A           |
