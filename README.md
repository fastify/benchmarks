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
* __Node:__ `10.1.0`

&nbsp;                   | Router   | Requests/s | Latency | Throughput/Mb
------------------------ | :------: | ---------: | ------: | ------------:
bare                     | &#10007; | 38198.4    | 2.54    | 5.38
connect                  | &#10007; | 38755.2    | 2.51    | 5.47
connect-router           | &#10003; | 33953.6    | 2.87    | 4.78
express                  | &#10003; | 26680      | 3.66    | 4.26
express-route-prefix     | &#10003; | 18804.8    | 5.22    | 6.58
express-with-middlewares | &#10003; | 19739.2    | 4.95    | 7.08
**fastify**              | &#10003; | **37268.81** | **2.55** | **5.95**
fastify-big-json         | &#10003; | 8931.6     | 10.95   | 102.80
hapi                     | &#10003; | 27182.4    | 3.6     | 4.21
koa                      | &#10007; | 30395.2    | 3.21    | 4.72
koa-router               | &#10003; | 27819.2    | 3.51    | 4.36
micro                    | &#10007; | 38928      | 2.5     | 6.13
micro-router             | &#10003; | 23086.4    | 4.23    | 3.59
polka                    | &#10003; | 38340.81   | 2.54    | 4.26
rayo                     | &#10003; | 40291.2    | 2.41    | 4.49
restify                  | &#10003; | 28632      | 3.26    | 4.53
spirit                   | &#10007; | 36969.6    | 2.51    | 5.78
spirit-router            | &#10003; | 34894.4    | 2.67    | 5.47
take-five                | &#10003; | 28305.6    | 3.14    | 9.55
total.js                 | &#10003; | 27176      | 3.59    | 7.75
trek-engine              | &#10007; | 32137.6    | 3.03    | 4.59
trek-engine-router       | &#10003; | 33908.81   | 2.87    | 4.88
