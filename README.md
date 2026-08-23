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
* __Node:__ `v24.19.0`
* __Run:__ Sun Aug 23 2026 22:20:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 62048.8    | 15.59        | 11.07         |
| node-http                | v24.19.0    | ✗      | 58367.2    | 16.65        | 10.41         |
| polka                    | 0.5.2       | ✓      | 57753.6    | 16.81        | 10.30         |
| connect                  | 3.7.0       | ✗      | 57664.8    | 16.84        | 10.28         |
| srvx                     | 0.12.5      | ✗      | 56134.4    | 17.32        | 9.10          |
| fastify                  | 5.12.0      | ✓      | 55604.8    | 17.48        | 9.97          |
| h3                       | 2.0.1-rc.26 | ✓      | 54140.0    | 17.99        | 9.50          |
| restana                  | v6.0.1      | ✓      | 53997.6    | 18.01        | 13.59         |
| hono                     | 4.13.2      | ✓      | 53509.6    | 18.18        | 8.78          |
| micro                    | 10.0.1      | ✗      | 53006.4    | 18.37        | 9.45          |
| connect-router           | 2.2.0       | ✓      | 52597.6    | 18.51        | 9.38          |
| adonisjs                 | 9.2.0       | ✓      | 49871.2    | 19.58        | 8.89          |
| whatwg-node-server       | 0.11.0      | ✗      | 49500.8    | 19.69        | 8.83          |
| koa                      | 3.2.1       | ✗      | 44354.4    | 22.04        | 7.91          |
| koa-router               | 15.7.0      | ✓      | 41352.0    | 23.69        | 7.37          |
| hapi                     | 21.4.10     | ✓      | 39512.0    | 24.80        | 7.05          |
| express                  | 5.2.1       | ✓      | 35745.4    | 27.47        | 6.38          |
| microrouter              | 3.1.3       | ✓      | 33166.2    | 29.64        | 5.91          |
| express-with-middlewares | 5.2.1       | ✓      | 29367.2    | 33.54        | 10.92         |
| fastify-big-json         | 5.12.0      | ✓      | 14468.4    | 68.56        | 166.47        |
| trpc-router              | 11.18.0     | ✓      | 11583.4    | 85.76        | 2.64          |
| elysia                   | 1.4.29      | ✓      | N/A        | N/A          | N/A           |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
