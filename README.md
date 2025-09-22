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
* __Run:__ Mon Sep 22 2025 07:58:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 47151.2    | 20.70        | 8.41          |
| polka                    | 0.5.2    | ✓      | 46113.6    | 21.16        | 8.22          |
| fastify                  | 5.6.0    | ✓      | 46104.0    | 21.18        | 8.27          |
| micro                    | 10.0.1   | ✗      | 45543.2    | 21.45        | 8.12          |
| connect                  | 3.7.0    | ✗      | 44992.8    | 21.74        | 8.02          |
| 0http                    | 4.3.0    | ✓      | 44784.8    | 21.84        | 7.99          |
| h3                       | 1.15.4   | ✗      | 43999.2    | 22.23        | 7.85          |
| connect-router           | 2.2.0    | ✓      | 42380.8    | 23.09        | 7.56          |
| restana                  | v5.1.0   | ✓      | 41460.8    | 23.62        | 7.39          |
| h3-router                | 1.15.4   | ✓      | 41304.0    | 23.71        | 7.37          |
| adonisjs                 | 7.7.0    | ✓      | 41156.0    | 23.80        | 7.34          |
| srvx                     | 0.8.7    | ✗      | 39399.2    | 24.88        | 7.66          |
| whatwg-node-server       | 0.10.12  | ✗      | 38519.4    | 25.47        | 6.87          |
| hono                     | 4.9.8    | ✓      | 36678.2    | 26.76        | 6.02          |
| koa                      | 3.0.1    | ✗      | 34726.0    | 28.29        | 6.19          |
| restify                  | 11.1.0   | ✓      | 34204.8    | 28.74        | 6.17          |
| koa-router               | 14.0.0   | ✓      | 32203.2    | 30.56        | 5.74          |
| hapi                     | 21.4.3   | ✓      | 30864.8    | 31.89        | 5.50          |
| microrouter              | 3.1.3    | ✓      | 30650.0    | 32.12        | 5.47          |
| fastify-big-json         | 5.6.0    | ✓      | 11906.0    | 83.42        | 136.98        |
| express                  | 5.1.0    | ✓      | 9824.4     | 101.20       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8744.3     | 113.69       | 3.25          |
| trpc-router              | 11.5.1   | ✓      | 6234.1     | 159.68       | 1.37          |
