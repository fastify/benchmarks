<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
site](https://github.com/fastify/fastify/actions/workflows/website.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `bench`:  Benchmark one or more modules.
* `compare`: Get comparative data for your benchmarks.

> Create benchmark before comparing; `benchmark bench`

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Mon May 05 2025 08:52:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.3.2    | ✓      | 45781.6    | 21.34        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45754.4    | 21.35        | 8.16          |
| node-http                | v20.19.1 | ✗      | 45635.2    | 21.42        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45563.8    | 21.44        | 8.13          |
| polka                    | 0.5.2    | ✓      | 45507.2    | 21.48        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 45502.4    | 21.47        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 44886.4    | 21.78        | 8.01          |
| 0http                    | 4.2.0    | ✓      | 44540.8    | 21.96        | 7.94          |
| rayo                     | 1.4.6    | ✓      | 44164.0    | 22.15        | 7.88          |
| micro                    | 10.0.1   | ✗      | 43184.0    | 22.65        | 7.70          |
| h3                       | 1.15.3   | ✗      | 42275.2    | 23.16        | 7.54          |
| connect-router           | 2.2.0    | ✓      | 42099.2    | 23.25        | 7.51          |
| adonisjs                 | 7.6.0    | ✓      | 42047.2    | 23.28        | 7.50          |
| micro-route              | 2.5.0    | ✓      | 41296.0    | 23.72        | 7.36          |
| h3-router                | 1.15.3   | ✓      | 41262.4    | 23.73        | 7.36          |
| hono                     | 4.7.8    | ✓      | 39441.6    | 24.85        | 6.47          |
| restana                  | v5.0.0   | ✓      | 37971.2    | 25.84        | 6.77          |
| koa                      | 2.16.1   | ✗      | 35760.6    | 27.46        | 6.38          |
| take-five                | 2.0.0    | ✓      | 34439.4    | 28.53        | 12.38         |
| restify                  | 11.1.0   | ✓      | 34378.6    | 28.58        | 6.20          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34198.2    | 28.74        | 6.10          |
| koa-router               | 13.1.0   | ✓      | 32029.6    | 30.71        | 5.71          |
| hapi                     | 21.4.0   | ✓      | 31396.0    | 31.35        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 28867.6    | 34.13        | 5.15          |
| fastify-big-json         | 5.3.2    | ✓      | 11689.0    | 84.99        | 134.50        |
| express                  | 5.1.0    | ✓      | 9836.6     | 101.07       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8761.6     | 113.49       | 3.26          |
| trpc-router              | 11.1.2   | ✓      | 6029.6     | 165.06       | 1.33          |
