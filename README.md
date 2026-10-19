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
* __Node:__ `v24.22.0`
* __Run:__ Mon Oct 19 2026 07:23:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.2.0       | ✓      | 88232.0    | 10.78        | 15.74         |
| restana                  | 6.1.0       | ✓      | 85820.8    | 11.15        | 15.31         |
| node-http                | v24.22.0    | ✗      | 81955.2    | 11.75        | 14.62         |
| polka                    | 0.5.2       | ✓      | 80484.8    | 11.94        | 14.35         |
| connect                  | 3.7.0       | ✗      | 80403.2    | 11.91        | 14.34         |
| fastify                  | 5.12.5      | ✓      | 78800.0    | 12.18        | 14.13         |
| hono                     | 4.13.13     | ✓      | 76476.8    | 12.55        | 12.55         |
| connect-router           | 2.2.0       | ✓      | 76081.6    | 12.59        | 13.57         |
| srvx                     | 1.0.5       | ✗      | 75907.2    | 12.65        | 12.31         |
| micro                    | 10.0.1      | ✗      | 75451.2    | 12.72        | 13.46         |
| elysia                   | 1.4.30      | ✓      | 72832.0    | 13.33        | 11.95         |
| h3                       | 2.0.1-rc.32 | ✓      | 72177.6    | 13.32        | 12.67         |
| adonisjs                 | 9.3.1       | ✓      | 70940.8    | 13.64        | 12.65         |
| whatwg-node-server       | 0.13.0      | ✗      | 64100.4    | 15.13        | 11.43         |
| koa                      | 3.2.1       | ✗      | 62103.2    | 15.57        | 11.07         |
| koa-router               | 15.7.0      | ✓      | 57943.2    | 16.81        | 10.33         |
| restify                  | 12.0.0      | ✓      | 56676.8    | 17.11        | 10.22         |
| express                  | 5.3.0       | ✓      | 56272.0    | 17.25        | 10.04         |
| hapi                     | 21.4.10     | ✓      | 52219.2    | 18.62        | 9.31          |
| microrouter              | 3.1.3       | ✓      | 47740.0    | 20.49        | 8.51          |
| express-with-middlewares | 5.3.0       | ✓      | 44380.0    | 22.07        | 16.51         |
| fastify-big-json         | 5.12.5      | ✓      | 19717.6    | 50.22        | 226.86        |
| trpc-router              | 11.19.0     | ✓      | 14279.0    | 69.49        | 3.25          |
