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
* __Node:__ `v24.15.0`
* __Run:__ Thu May 07 2026 10:21:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 71844.8    | 13.44        | 12.81         |
| restana                  | v5.2.0   | ✓      | 70668.4    | 13.70        | 12.60         |
| h3                       | 1.15.11  | ✗      | 68757.2    | 14.05        | 12.26         |
| polka                    | 0.5.2    | ✓      | 68060.4    | 14.15        | 12.14         |
| node-http                | v24.15.0 | ✗      | 68018.4    | 14.17        | 12.13         |
| h3-router                | 1.15.11  | ✓      | 66322.8    | 14.56        | 11.83         |
| connect                  | 3.7.0    | ✗      | 63330.8    | 15.32        | 11.29         |
| micro                    | 10.0.1   | ✗      | 63112.0    | 15.34        | 11.25         |
| fastify                  | 5.8.5    | ✓      | 62889.2    | 15.39        | 11.28         |
| connect-router           | 2.2.0    | ✓      | 58448.0    | 16.66        | 10.42         |
| whatwg-node-server       | 0.10.18  | ✗      | 55402.4    | 17.52        | 9.88          |
| hono                     | 4.12.18  | ✓      | 52660.8    | 18.49        | 8.64          |
| koa                      | 3.2.0    | ✗      | 52150.4    | 18.67        | 9.30          |
| koa-router               | 15.5.0   | ✓      | 46801.6    | 20.88        | 8.35          |
| hapi                     | 21.4.9   | ✓      | 45474.4    | 21.48        | 8.11          |
| adonisjs                 | 7.8.1    | ✓      | 44261.6    | 22.10        | 7.89          |
| express                  | 5.2.1    | ✓      | 37694.4    | 26.05        | 6.72          |
| srvx                     | 0.11.15  | ✗      | 36705.6    | 26.73        | 7.14          |
| microrouter              | 3.1.3    | ✓      | 34224.4    | 28.71        | 6.10          |
| express-with-middlewares | 5.2.1    | ✓      | 30572.8    | 32.21        | 11.37         |
| fastify-big-json         | 5.8.5    | ✓      | 14545.2    | 68.21        | 167.35        |
| trpc-router              | 11.17.0  | ✓      | 10311.4    | 96.37        | 2.35          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
