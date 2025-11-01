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
* __Node:__ `v20.19.5`
* __Run:__ Sat Nov 01 2025 01:42:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.1    | ✓      | 46524.0    | 20.99        | 8.34          |
| polka                    | 0.5.2    | ✓      | 45502.4    | 21.48        | 8.12          |
| node-http                | v20.19.5 | ✗      | 44930.4    | 21.76        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44828.6    | 21.82        | 7.99          |
| 0http                    | 4.3.0    | ✓      | 44159.2    | 22.15        | 7.87          |
| micro                    | 10.0.1   | ✗      | 43188.8    | 22.65        | 7.70          |
| connect-router           | 2.2.0    | ✓      | 42832.0    | 22.84        | 7.64          |
| adonisjs                 | 7.7.0    | ✓      | 41727.2    | 23.47        | 7.44          |
| h3                       | 1.15.4   | ✗      | 41045.6    | 23.86        | 7.32          |
| restana                  | v5.1.0   | ✓      | 40057.6    | 24.46        | 7.14          |
| h3-router                | 1.15.4   | ✓      | 40028.8    | 24.47        | 7.14          |
| whatwg-node-server       | 0.10.13  | ✗      | 38228.8    | 25.67        | 6.82          |
| hono                     | 4.10.4   | ✓      | 37043.2    | 26.50        | 6.08          |
| restify                  | 11.1.0   | ✓      | 34314.2    | 28.64        | 6.18          |
| koa                      | 3.1.1    | ✗      | 33809.6    | 29.07        | 6.03          |
| hapi                     | 21.4.3   | ✓      | 31596.6    | 31.14        | 5.63          |
| koa-router               | 14.0.0   | ✓      | 31380.8    | 31.36        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 28974.8    | 34.01        | 5.17          |
| srvx                     | 0.8.16   | ✗      | 19368.4    | 51.12        | 3.77          |
| fastify-big-json         | 5.6.1    | ✓      | 11504.4    | 86.35        | 132.37        |
| express                  | 5.1.0    | ✓      | 9821.4     | 101.21       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 9113.5     | 109.12       | 3.39          |
| trpc-router              | 11.7.1   | ✓      | 6123.5     | 162.54       | 1.35          |
