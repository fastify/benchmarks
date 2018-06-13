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

# Benchmarks

* __Machine:__ MacBook Pro (Late 2013 | 2.3 GHz Intel Core i7 | 16 GB 1600 MHz DDR3)
* __Method:__ `autocannon -c 100 -d 5 -p 10 localhost:3000` (two rounds; one warm-up, one to measure).
* __Node:__ `8.11.2`

```
┌──────────────────────────┬─────────┬────────┬────────────┬─────────┬───────────────┐
│                          │ Version │ Router │ Requests/s │ Latency │ Throughput/Mb │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ bare                     │ 8.11.2  │ ✗      │ 30156.8    │ 3.23    │ 4.36          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ connect-router           │ 1.3.2   │ ✓      │ 32603.8    │ 2.98    │ 4.62          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ connect                  │ 3.6.6   │ ✗      │ 38119.2    │ 2.54    │ 5.37          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ express-route-prefix     │ 4.16.2  │ ✓      │ 18524.95   │ 5.45    │ 6.46          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ express-with-middlewares │ 4.16.2  │ ✓      │ 14403.4    │ 6.83    │ 5.21          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ express                  │ 4.16.2  │ ✓      │ 22365.2    │ 4.38    │ 3.50          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ fastify-big-json         │ 1.5.0   │ ✓      │ 5273.8     │ 18.83   │ 60.60         │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ fastify                  │ 1.5.0   │ ✓      │ 35912      │ 2.7     │ 5.62          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ hapi                     │ 17.5.0  │ ✓      │ 21769.2    │ 4.53    │ 3.42          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ koa-router               │ 7.4.0   │ ✓      │ 23903.6    │ 4.1     │ 3.74          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ koa                      │ 2.5.0   │ ✗      │ 24987.2    │ 3.92    │ 3.89          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ micro                    │ 9.1.0   │ ✗      │ 35254.4    │ 2.75    │ 5.54          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ microrouter              │ 3.1.1   │ ✓      │ 19473.6    │ 5.04    │ 3.03          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ polka                    │ 0.4.0   │ ✓      │ 36824      │ 2.63    │ 5.23          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ rayo                     │ 1.0.0   │ ✓      │ 35299.2    │ 2.74    │ 5.06          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ restify                  │ 7.1.0   │ ✓      │ 20796      │ 4.38    │ 3.30          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ spirit-router            │ 0.5.0   │ ✓      │ 27592.4    │ 3.2     │ 4.34          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ spirit                   │ 0.6.1   │ ✗      │ 36883.2    │ 2.39    │ 5.78          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ take-five                │ 1.3.5   │ ✓      │ 29164.8    │ 3.04    │ 9.74          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ total.js                 │ 2.9.30  │ ✓      │ 22850.8    │ 4.29    │ 6.51          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ trek-engine              │ 1.0.5   │ ✗      │ 31837.2    │ 3.06    │ 4.58          │
├──────────────────────────┼─────────┼────────┼────────────┼─────────┼───────────────┤
│ trek-router              │ 1.2.0   │ ✓      │ 28472.8    │ 3.43    │ 4.11          │
└──────────────────────────┴─────────┴────────┴────────────┴─────────┴───────────────┘
```
