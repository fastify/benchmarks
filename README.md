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
* __Node:__ `v24.14.1`
* __Run:__ Wed Apr 08 2026 19:34:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 54950.4    | 17.71        | 9.80          |
| restana                  | v5.1.0   | ✓      | 53016.8    | 18.36        | 9.46          |
| h3-router                | 1.15.11  | ✓      | 52092.8    | 18.70        | 9.29          |
| h3                       | 1.15.11  | ✗      | 50457.6    | 19.34        | 9.00          |
| node-http                | v24.14.1 | ✗      | 49083.2    | 19.87        | 8.75          |
| micro                    | 10.0.1   | ✗      | 47549.6    | 20.53        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47540.8    | 20.56        | 8.48          |
| connect                  | 3.7.0    | ✗      | 46644.8    | 20.94        | 8.32          |
| fastify                  | 5.8.4    | ✓      | 46644.8    | 20.95        | 8.36          |
| connect-router           | 2.2.0    | ✓      | 43057.6    | 22.72        | 7.68          |
| whatwg-node-server       | 0.10.18  | ✗      | 40686.2    | 24.07        | 7.26          |
| hono                     | 4.12.12  | ✓      | 38037.6    | 25.80        | 6.24          |
| koa                      | 3.2.0    | ✗      | 36825.0    | 26.69        | 6.57          |
| adonisjs                 | 7.8.0    | ✓      | 36412.8    | 26.96        | 6.49          |
| hapi                     | 21.4.8   | ✓      | 35104.2    | 27.99        | 6.26          |
| koa-router               | 15.4.0   | ✓      | 34533.6    | 28.45        | 6.16          |
| srvx                     | 0.11.15  | ✗      | 28744.8    | 34.29        | 5.59          |
| express                  | 5.2.1    | ✓      | 27835.6    | 35.43        | 4.96          |
| microrouter              | 3.1.3    | ✓      | 26558.8    | 37.15        | 4.74          |
| express-with-middlewares | 5.2.1    | ✓      | 22407.2    | 44.11        | 8.33          |
| fastify-big-json         | 5.8.4    | ✓      | 13327.6    | 74.49        | 153.34        |
| trpc-router              | 11.16.0  | ✓      | 9282.3     | 107.13       | 2.12          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
