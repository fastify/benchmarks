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
* __Node:__ `v24.18.1`
* __Run:__ Sat Aug 01 2026 02:41:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 53972.8    | 18.03        | 9.63          |
| restana                  | v6.0.1      | ✓      | 50208.8    | 19.39        | 12.64         |
| micro                    | 10.0.1      | ✗      | 47397.6    | 20.58        | 8.45          |
| srvx                     | 0.12.5      | ✗      | 46526.4    | 20.96        | 7.54          |
| node-http                | v24.18.1    | ✗      | 46444.8    | 21.02        | 8.28          |
| polka                    | 0.5.2       | ✓      | 46176.0    | 21.17        | 8.24          |
| fastify                  | 5.11.0      | ✓      | 44822.4    | 21.82        | 8.04          |
| connect                  | 3.7.0       | ✗      | 44784.0    | 21.85        | 7.99          |
| adonisjs                 | 9.2.0       | ✓      | 43364.8    | 22.57        | 7.73          |
| h3                       | 2.0.1-rc.25 | ✓      | 42071.2    | 23.31        | 7.46          |
| connect-router           | 2.2.0       | ✓      | 41684.0    | 23.48        | 7.43          |
| whatwg-node-server       | 0.11.0      | ✗      | 39216.0    | 24.98        | 6.99          |
| hono                     | 4.12.33     | ✓      | 38731.2    | 25.30        | 6.35          |
| koa                      | 3.2.1       | ✗      | 35113.8    | 27.95        | 6.26          |
| hapi                     | 21.4.10     | ✓      | 33548.2    | 29.32        | 5.98          |
| koa-router               | 15.7.0      | ✓      | 32732.0    | 30.06        | 5.84          |
| express                  | 5.2.1       | ✓      | 26992.0    | 36.53        | 4.81          |
| microrouter              | 3.1.3       | ✓      | 24999.6    | 39.48        | 4.46          |
| express-with-middlewares | 5.2.1       | ✓      | 22513.6    | 43.90        | 8.37          |
| fastify-big-json         | 5.11.0      | ✓      | 13885.2    | 71.47        | 159.76        |
| trpc-router              | 11.18.0     | ✓      | 10046.3    | 98.94        | 2.29          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
