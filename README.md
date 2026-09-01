<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg"
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
* __Node:__ `v24.20.0`
* __Run:__ Tue Sep 01 2026 14:29:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| restana                  | v6.0.1      | ✓      | 47563.2    | 20.54        | 8.48          |
| 0http                    | 5.1.0       | ✓      | 47041.6    | 20.77        | 8.39          |
| fastify                  | 5.12.1      | ✓      | 45033.6    | 21.72        | 8.07          |
| node-http                | v24.20.0    | ✗      | 43311.2    | 22.59        | 7.72          |
| polka                    | 0.5.2       | ✓      | 42513.6    | 23.02        | 7.58          |
| micro                    | 10.0.1      | ✗      | 42179.2    | 23.19        | 7.52          |
| srvx                     | 0.12.7      | ✗      | 42006.4    | 23.31        | 6.81          |
| adonisjs                 | 9.3.0       | ✓      | 42002.4    | 23.30        | 7.49          |
| connect                  | 3.7.0       | ✗      | 40529.6    | 24.18        | 7.23          |
| hono                     | 4.13.4      | ✓      | 39616.0    | 24.75        | 6.50          |
| elysia                   | 1.4.29      | ✓      | 39510.4    | 24.81        | 6.48          |
| h3                       | 2.0.1-rc.26 | ✓      | 38576.8    | 25.41        | 6.77          |
| connect-router           | 2.2.0       | ✓      | 37559.4    | 26.14        | 6.70          |
| whatwg-node-server       | 0.11.0      | ✗      | 35511.0    | 27.67        | 6.33          |
| koa                      | 3.2.1       | ✗      | 35005.6    | 28.05        | 6.24          |
| koa-router               | 15.7.0      | ✓      | 32782.0    | 30.00        | 5.85          |
| hapi                     | 21.4.10     | ✓      | 31666.8    | 31.06        | 5.65          |
| express                  | 5.2.1       | ✓      | 25110.4    | 39.30        | 4.48          |
| microrouter              | 3.1.3       | ✓      | 23921.6    | 41.30        | 4.27          |
| express-with-middlewares | 5.2.1       | ✓      | 21460.8    | 46.08        | 7.98          |
| fastify-big-json         | 5.12.1      | ✓      | 14229.4    | 69.73        | 163.72        |
| trpc-router              | 11.18.0     | ✓      | 10311.4    | 96.38        | 2.35          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
