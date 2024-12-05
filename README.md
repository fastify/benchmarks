<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* __Node:__ `v20.18.1`
* __Run:__ Thu Dec 05 2024 14:49:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 46369.6    | 21.06        | 8.27          |
| fastify                  | 5.1.0    | ✓      | 46315.2    | 21.09        | 8.30          |
| polka                    | 0.5.2    | ✓      | 46036.0    | 21.22        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45401.6    | 21.52        | 8.10          |
| connect                  | 3.7.0    | ✗      | 45092.0    | 21.68        | 8.04          |
| server-base              | 7.1.32   | ✗      | 44644.0    | 21.91        | 7.96          |
| micro                    | 10.0.1   | ✗      | 44632.8    | 21.90        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 44587.2    | 21.93        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44328.0    | 22.06        | 7.91          |
| 0http                    | 3.5.3    | ✓      | 44194.4    | 22.13        | 7.88          |
| connect-router           | 1.3.8    | ✓      | 41908.0    | 23.36        | 7.47          |
| micro-route              | 2.5.0    | ✓      | 41536.8    | 23.57        | 7.41          |
| adonisjs                 | 7.3.0    | ✓      | 41030.4    | 23.87        | 7.32          |
| h3                       | 1.13.0   | ✗      | 40880.8    | 23.96        | 7.29          |
| hono                     | 4.6.12   | ✓      | 40224.8    | 24.35        | 7.17          |
| restana                  | 4.9.9    | ✓      | 39075.2    | 25.09        | 6.97          |
| h3-router                | 1.13.0   | ✓      | 38669.6    | 25.37        | 6.90          |
| koa                      | 2.15.3   | ✗      | 37104.0    | 26.45        | 6.62          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34642.0    | 28.36        | 6.18          |
| restify                  | 11.1.0   | ✓      | 34602.8    | 28.40        | 6.24          |
| take-five                | 2.0.0    | ✓      | 34304.8    | 28.64        | 12.33         |
| koa-router               | 13.1.0   | ✓      | 33248.0    | 29.58        | 5.93          |
| hapi                     | 21.3.12  | ✓      | 31761.2    | 30.97        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 29769.2    | 33.09        | 5.31          |
| fastify-big-json         | 5.1.0    | ✓      | 11801.6    | 84.18        | 135.80        |
| express                  | 5.0.1    | ✓      | 9836.9     | 101.07       | 1.75          |
| express-with-middlewares | 5.0.1    | ✓      | 9367.5     | 106.13       | 3.48          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
