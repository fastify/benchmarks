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
* __Run:__ Tue Aug 04 2026 12:19:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 68539.6    | 14.08        | 12.22         |
| node-http                | v24.19.0    | ✗      | 65057.2    | 14.91        | 11.60         |
| restana                  | v6.0.1      | ✓      | 63986.4    | 15.11        | 16.11         |
| polka                    | 0.5.2       | ✓      | 63180.0    | 15.33        | 11.27         |
| srvx                     | 0.12.4      | ✗      | 62920.8    | 15.39        | 10.20         |
| micro                    | 10.0.1      | ✗      | 61622.4    | 15.73        | 10.99         |
| fastify                  | 5.10.0      | ✓      | 59603.2    | 16.27        | 10.69         |
| h3                       | 2.0.1-rc.26 | ✓      | 57977.6    | 16.77        | 10.17         |
| connect                  | 3.7.0       | ✗      | 56903.2    | 17.08        | 10.15         |
| adonisjs                 | 9.1.1       | ✓      | 55218.4    | 17.62        | 9.85          |
| whatwg-node-server       | 0.11.0      | ✗      | 53630.4    | 18.16        | 9.56          |
| hono                     | 4.12.32     | ✓      | 52585.6    | 18.53        | 8.63          |
| connect-router           | 2.2.0       | ✓      | 50665.6    | 19.23        | 9.04          |
| koa                      | 3.2.1       | ✗      | 48133.6    | 20.27        | 8.58          |
| koa-router               | 15.7.0      | ✓      | 44152.0    | 22.15        | 7.87          |
| hapi                     | 21.4.10     | ✓      | 40981.6    | 23.91        | 7.31          |
| express                  | 5.2.1       | ✓      | 34096.0    | 28.82        | 6.08          |
| microrouter              | 3.1.3       | ✓      | 32379.0    | 30.38        | 5.77          |
| express-with-middlewares | 5.2.1       | ✓      | 28541.6    | 34.53        | 10.62         |
| fastify-big-json         | 5.10.0      | ✓      | 14354.8    | 69.11        | 165.16        |
| trpc-router              | 11.18.0     | ✓      | 11067.4    | 89.78        | 2.52          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
