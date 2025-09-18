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
* __Run:__ Thu Sep 18 2025 07:17:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 46496.0    | 21.01        | 8.29          |
| fastify                  | 5.6.0    | ✓      | 46196.0    | 21.14        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46079.2    | 21.19        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45009.6    | 21.72        | 8.03          |
| 0http                    | 4.3.0    | ✓      | 44935.2    | 21.77        | 8.01          |
| micro                    | 10.0.1   | ✗      | 44428.8    | 22.00        | 7.92          |
| connect-router           | 2.2.0    | ✓      | 43295.2    | 22.60        | 7.72          |
| adonisjs                 | 7.7.0    | ✓      | 42274.4    | 23.15        | 7.54          |
| restana                  | v5.1.0   | ✓      | 40724.8    | 24.06        | 7.26          |
| h3                       | 1.15.4   | ✗      | 39999.2    | 24.51        | 7.13          |
| srvx                     | 0.8.7    | ✗      | 39509.6    | 24.81        | 7.69          |
| h3-router                | 1.15.4   | ✓      | 38504.8    | 25.48        | 6.87          |
| whatwg-node-server       | 0.10.12  | ✗      | 38275.2    | 25.61        | 6.83          |
| hono                     | 4.9.7    | ✓      | 36573.4    | 26.85        | 6.00          |
| restify                  | 11.1.0   | ✓      | 34486.6    | 28.49        | 6.22          |
| koa                      | 3.0.1    | ✗      | 34439.0    | 28.54        | 6.14          |
| hapi                     | 21.4.3   | ✓      | 30772.4    | 32.00        | 5.49          |
| koa-router               | 14.0.0   | ✓      | 30734.4    | 32.03        | 5.48          |
| microrouter              | 3.1.3    | ✓      | 29220.0    | 33.71        | 5.21          |
| fastify-big-json         | 5.6.0    | ✓      | 11339.8    | 87.62        | 130.48        |
| express                  | 5.1.0    | ✓      | 10075.4    | 98.68        | 1.80          |
| express-with-middlewares | 5.1.0    | ✓      | 9020.5     | 110.25       | 3.35          |
| trpc-router              | 11.5.1   | ✓      | 6023.7     | 165.23       | 1.33          |
