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
* __Run:__ Wed Sep 02 2026 13:12:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| node-http                | v24.20.0    | ✗      | 98864.0    | 9.61         | 17.63         |
| restana                  | v6.0.1      | ✓      | 98804.8    | 9.61         | 17.62         |
| 0http                    | 5.1.0       | ✓      | 98475.2    | 9.66         | 17.56         |
| fastify                  | 5.12.1      | ✓      | 97595.2    | 9.73         | 17.50         |
| connect                  | 3.7.0       | ✗      | 95699.2    | 9.92         | 17.07         |
| polka                    | 0.5.2       | ✓      | 95321.6    | 9.91         | 17.00         |
| micro                    | 10.0.1      | ✗      | 94284.8    | 10.09        | 16.81         |
| srvx                     | 0.12.7      | ✗      | 93523.2    | 10.10        | 15.16         |
| adonisjs                 | 9.3.0       | ✓      | 89836.8    | 10.67        | 16.02         |
| connect-router           | 2.2.0       | ✓      | 88953.6    | 10.79        | 15.86         |
| elysia                   | 1.4.29      | ✓      | 88800.0    | 10.82        | 14.57         |
| hono                     | 4.13.5      | ✓      | 88524.8    | 10.80        | 14.52         |
| h3                       | 2.0.1-rc.29 | ✓      | 88334.4    | 10.88        | 15.50         |
| whatwg-node-server       | 0.11.0      | ✗      | 82854.4    | 11.49        | 14.78         |
| koa                      | 3.2.1       | ✗      | 78662.4    | 12.21        | 14.03         |
| koa-router               | 15.7.0      | ✓      | 73194.0    | 13.21        | 13.05         |
| restify                  | 12.0.0      | ✓      | 70908.8    | 13.57        | 12.78         |
| hapi                     | 21.4.10     | ✓      | 63711.2    | 15.22        | 11.36         |
| express                  | 5.2.1       | ✓      | 59651.2    | 16.25        | 10.64         |
| microrouter              | 3.1.3       | ✓      | 53382.4    | 18.21        | 9.52          |
| express-with-middlewares | 5.2.1       | ✓      | 51264.0    | 19.01        | 19.07         |
| fastify-big-json         | 5.12.1      | ✓      | 19929.2    | 49.65        | 229.31        |
| trpc-router              | 11.18.0     | ✓      | 17703.5    | 55.97        | 4.03          |
