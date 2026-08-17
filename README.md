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
* __Run:__ Mon Aug 17 2026 12:52:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 97019.2    | 9.77         | 17.30         |
| srvx                     | 0.12.5      | ✗      | 92691.2    | 10.34        | 15.03         |
| node-http                | v24.19.0    | ✗      | 92076.8    | 10.40        | 16.42         |
| polka                    | 0.5.2       | ✓      | 92052.8    | 10.40        | 16.42         |
| connect                  | 3.7.0       | ✗      | 89174.4    | 10.76        | 15.90         |
| fastify                  | 5.11.3      | ✓      | 88171.2    | 10.84        | 15.81         |
| restana                  | v6.0.1      | ✓      | 84916.8    | 11.27        | 21.38         |
| micro                    | 10.0.1      | ✗      | 83992.0    | 11.47        | 14.98         |
| h3                       | 2.0.1-rc.26 | ✓      | 82683.2    | 11.56        | 14.51         |
| connect-router           | 2.2.0       | ✓      | 82443.2    | 11.61        | 14.70         |
| hono                     | 4.13.1      | ✓      | 82371.2    | 11.62        | 13.51         |
| whatwg-node-server       | 0.11.0      | ✗      | 80638.4    | 11.94        | 14.38         |
| adonisjs                 | 9.2.0       | ✓      | 79744.0    | 12.05        | 14.22         |
| koa-router               | 15.7.0      | ✓      | 66603.2    | 14.52        | 11.88         |
| hapi                     | 21.4.10     | ✓      | 59754.4    | 16.26        | 10.66         |
| express                  | 5.2.1       | ✓      | 57936.0    | 16.73        | 10.33         |
| koa                      | 3.2.1       | ✗      | 57213.6    | 17.02        | 10.20         |
| microrouter              | 3.1.3       | ✓      | 50352.0    | 19.37        | 8.98          |
| express-with-middlewares | 5.2.1       | ✓      | 46609.6    | 20.95        | 17.34         |
| fastify-big-json         | 5.11.3      | ✓      | 17265.2    | 57.42        | 198.65        |
| trpc-router              | 11.18.0     | ✓      | 15484.9    | 64.04        | 3.53          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
