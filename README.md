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
benchmark # Hit [ENTER]
```

# Benchmarks

__Machine:__ MacBook Pro (Retina, 13-inch, Early 2015) **Processor**: 2,7 GHz Intel Core i5 **Memory**: 8 GB 1867 MHz DDR3

__Method:__ `autocannon -c 10 -d 2 -p 1 localhost:3000` * 2, taking the second average


[![asciicast](https://asciinema.org/a/SA9z6g2HjOr0n80KwEvUaWoSS.png)](https://asciinema.org/a/SA9z6g2HjOr0n80KwEvUaWoSS)
