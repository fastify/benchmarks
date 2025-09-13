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
* __Run:__ Sat Sep 13 2025 21:28:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.0    | ✓      | 45743.2    | 21.36        | 8.20          |
| node-http                | v20.19.5 | ✗      | 44865.6    | 21.79        | 8.00          |
| micro                    | 10.0.1   | ✗      | 44474.4    | 21.98        | 7.93          |
| polka                    | 0.5.2    | ✓      | 44006.4    | 22.23        | 7.85          |
| 0http                    | 4.3.0    | ✓      | 43868.8    | 22.30        | 7.82          |
| connect                  | 3.7.0    | ✗      | 43004.8    | 22.75        | 7.67          |
| h3                       | 1.15.4   | ✗      | 42317.6    | 23.13        | 7.55          |
| h3-router                | 1.15.4   | ✓      | 41026.4    | 23.87        | 7.32          |
| connect-router           | 2.2.0    | ✓      | 41016.0    | 23.88        | 7.31          |
| restana                  | v5.1.0   | ✓      | 40306.4    | 24.30        | 7.19          |
| adonisjs                 | 7.7.0    | ✓      | 40166.4    | 24.40        | 7.16          |
| srvx                     | 0.8.7    | ✗      | 38128.6    | 25.72        | 7.42          |
| hono                     | 4.9.7    | ✓      | 36732.2    | 26.71        | 6.03          |
| whatwg-node-server       | 0.10.12  | ✗      | 36645.6    | 26.78        | 6.54          |
| restify                  | 11.1.0   | ✓      | 34715.6    | 28.29        | 6.26          |
| koa                      | 3.0.1    | ✗      | 34324.8    | 28.63        | 6.12          |
| hapi                     | 21.4.3   | ✓      | 31753.6    | 30.98        | 5.66          |
| koa-router               | 14.0.0   | ✓      | 31663.2    | 31.07        | 5.65          |
| microrouter              | 3.1.3    | ✓      | 29065.2    | 33.90        | 5.18          |
| fastify-big-json         | 5.6.0    | ✓      | 11819.2    | 84.05        | 135.98        |
| express                  | 5.1.0    | ✓      | 9608.8     | 103.46       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 8840.0     | 112.48       | 3.29          |
| trpc-router              | 11.5.1   | ✓      | 5829.8     | 170.65       | 1.28          |
