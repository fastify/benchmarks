<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* This package shows how fast it is comparatively.
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
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Wed Nov 20 2024 14:16:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.1.0    | ✓      | 47024.8    | 20.75        | 8.43          |
| bare                     | v20.18.0 | ✗      | 47012.0    | 20.77        | 8.38          |
| server-base              | 7.1.32   | ✗      | 46497.6    | 21.02        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 46403.2    | 21.06        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46012.0    | 21.22        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 45948.0    | 21.23        | 8.19          |
| polka                    | 0.5.2    | ✓      | 45917.6    | 21.24        | 8.19          |
| micro                    | 10.0.1   | ✗      | 45882.4    | 21.29        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45280.8    | 21.59        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 44972.8    | 21.74        | 8.02          |
| connect-router           | 1.3.8    | ✓      | 43385.6    | 22.55        | 7.74          |
| micro-route              | 2.5.0    | ✓      | 42613.6    | 22.95        | 7.60          |
| h3                       | 1.13.0   | ✗      | 42283.2    | 23.16        | 7.54          |
| adonisjs                 | 7.2.5    | ✓      | 41852.0    | 23.41        | 7.46          |
| h3-router                | 1.13.0   | ✓      | 41832.8    | 23.41        | 7.46          |
| hono                     | 4.6.11   | ✓      | 40170.4    | 24.40        | 7.16          |
| restana                  | 4.9.9    | ✓      | 39092.0    | 25.09        | 6.97          |
| koa                      | 2.15.3   | ✗      | 37084.2    | 26.44        | 6.61          |
| take-five                | 2.0.0    | ✓      | 35421.4    | 27.74        | 12.73         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34976.4    | 28.07        | 6.24          |
| restify                  | 11.1.0   | ✓      | 34900.4    | 28.14        | 6.29          |
| hapi                     | 21.3.12  | ✓      | 31718.2    | 31.01        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 30120.4    | 32.69        | 5.37          |
| fastify-big-json         | 5.1.0    | ✓      | 12070.6    | 82.28        | 138.87        |
| express                  | 5.0.1    | ✓      | 9969.2     | 99.72        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 9322.9     | 106.65       | 3.47          |
| koa-router               | 13.0.1   | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
