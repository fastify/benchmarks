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

&nbsp;                   | Version | Router | Requests/s | Latency | Throughput/Mb
------------------------ | ------- | :----: | ---------: | ------: | ------------:
bare                     | 8.11.2  | ✗      | 28411.2    | 3.44    | 4.04
connect-router           | 1.3.2   | ✓      | 30328      | 3.22    | 4.36
connect                  | 3.6.6   | ✗      | 32076.8    | 3.04    | 4.53
express-route-prefix     | 4.16.2  | ✓      | 14447.2    | 6.81    | 4.97
express-with-middlewares | 4.16.2  | ✓      | 14988      | 6.53    | 5.42
express                  | 4.16.2  | ✓      | 20776      | 4.7     | 3.24
fastify-big-json         | 1.5.0   | ✓      | 5002.8     | 19.43   | 57.40
**fastify**              | **1.5.0** | ✓    | **33924.81** | **2.87** | **5.33**
hapi                     | 17.5.0  | ✓      | 20116.8    | 4.88    | 3.11
koa-router               | 7.4.0   | ✓      | 22059.2    | 4.44    | 3.44
koa                      | 2.5.0   | ✗      | 25364.8    | 3.86    | 3.99
micro                    | 9.1.0   | ✗      | 31902.4    | 3.06    | 4.97
microrouter              | 3.1.1   | ✓      | 17989.6    | 5.44    | 2.84
polka                    | 0.4.0   | ✓      | 34177.6    | 2.85    | 3.79
rayo                     | 0.5.8   | ✓      | 34238.4    | 2.85    | 3.84
restify                  | 7.1.0   | ✓      | 23956.8    | 3.89    | 3.84
spirit-router            | 0.5.0   | ✓      | 29272      | 3.16    | 4.58
spirit                   | 0.6.1   | ✗      | 30785.6    | 3.01    | 4.83
take-five                | 1.3.4   | ✓      | 24491.2    | 3.7     | 8.07
total.js                 | 2.9.4   | ✓      | 21019.2    | 4.65    | 6.03
trek-engine              | 1.0.5   | ✗      | 28718.4    | 3.4     | 4.06
trek-router              | 1.2.0   | ✓      | 28513.6    | 3.43    | 3.99
