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
* __Run:__ Wed Nov 20 2024 16:48:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 48138.4    | 20.31        | 8.59          |
| polka                    | 0.5.2    | ✓      | 46678.4    | 20.92        | 8.32          |
| fastify                  | 5.1.0    | ✓      | 46362.4    | 21.06        | 8.31          |
| connect                  | 3.7.0    | ✗      | 46058.4    | 21.21        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 46029.6    | 21.20        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45812.8    | 21.30        | 8.17          |
| server-base-router       | 7.1.32   | ✓      | 45671.2    | 21.38        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45204.0    | 21.62        | 8.06          |
| micro                    | 10.0.1   | ✗      | 45053.6    | 21.70        | 8.03          |
| connect-router           | 1.3.8    | ✓      | 42852.8    | 22.83        | 7.64          |
| h3                       | 1.13.0   | ✗      | 42776.0    | 22.88        | 7.63          |
| 0http                    | 3.5.3    | ✓      | 42246.4    | 23.18        | 7.53          |
| micro-route              | 2.5.0    | ✓      | 41967.2    | 23.33        | 7.48          |
| adonisjs                 | 7.2.5    | ✓      | 41282.4    | 23.73        | 7.36          |
| h3-router                | 1.13.0   | ✓      | 41268.8    | 23.73        | 7.36          |
| hono                     | 4.6.11   | ✓      | 40347.2    | 24.28        | 7.19          |
| restana                  | 4.9.9    | ✓      | 37565.6    | 26.13        | 6.70          |
| koa                      | 2.15.3   | ✗      | 36857.0    | 26.63        | 6.57          |
| take-five                | 2.0.0    | ✓      | 35407.8    | 27.74        | 12.73         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34864.2    | 28.17        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34828.0    | 28.21        | 6.28          |
| koa-router               | 13.1.0   | ✓      | 33419.4    | 29.44        | 5.96          |
| hapi                     | 21.3.12  | ✓      | 32162.8    | 30.58        | 5.74          |
| microrouter              | 3.1.3    | ✓      | 30468.0    | 32.31        | 5.43          |
| fastify-big-json         | 5.1.0    | ✓      | 11977.4    | 82.92        | 137.81        |
| express                  | 5.0.1    | ✓      | 9946.5     | 99.96        | 1.77          |
| express-with-middlewares | 5.0.1    | ✓      | 9301.0     | 106.89       | 3.46          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
