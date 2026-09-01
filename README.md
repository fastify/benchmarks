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
* __Run:__ Tue Sep 01 2026 03:36:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 69406.8    | 13.87        | 12.38         |
| fastify                  | 5.12.1      | ✓      | 66507.2    | 14.56        | 11.92         |
| srvx                     | 0.12.7      | ✗      | 64096.0    | 15.12        | 10.39         |
| node-http                | v24.20.0    | ✗      | 63240.8    | 15.30        | 11.28         |
| polka                    | 0.5.2       | ✓      | 62597.6    | 15.44        | 11.16         |
| restana                  | v6.0.1      | ✓      | 61884.0    | 15.63        | 15.58         |
| connect                  | 3.7.0       | ✗      | 61787.2    | 15.66        | 11.02         |
| micro                    | 10.0.1      | ✗      | 61341.6    | 15.78        | 10.94         |
| h3                       | 2.0.1-rc.26 | ✓      | 59700.8    | 16.30        | 10.48         |
| hono                     | 4.13.4      | ✓      | 59479.2    | 16.37        | 9.76          |
| adonisjs                 | 9.3.0       | ✓      | 59424.8    | 16.31        | 10.60         |
| elysia                   | 1.4.29      | ✓      | 58310.4    | 16.71        | 9.56          |
| connect-router           | 2.2.0       | ✓      | 56562.4    | 17.14        | 10.09         |
| whatwg-node-server       | 0.11.0      | ✗      | 53950.4    | 18.05        | 9.62          |
| koa                      | 3.2.1       | ✗      | 49815.2    | 19.61        | 8.88          |
| koa-router               | 15.7.0      | ✓      | 46900.8    | 20.84        | 8.36          |
| hapi                     | 21.4.10     | ✓      | 43934.4    | 22.23        | 7.83          |
| express                  | 5.2.1       | ✓      | 36487.2    | 26.89        | 6.51          |
| microrouter              | 3.1.3       | ✓      | 33796.0    | 29.10        | 6.03          |
| express-with-middlewares | 5.2.1       | ✓      | 29861.2    | 32.98        | 11.11         |
| fastify-big-json         | 5.12.1      | ✓      | 14716.8    | 67.38        | 169.32        |
| trpc-router              | 11.18.0     | ✓      | 11535.0    | 86.12        | 2.63          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
