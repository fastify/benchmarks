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
* __Node:__ `v20.19.4`
* __Run:__ Tue Sep 02 2025 13:43:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.4 | ✗      | 47508.8    | 20.55        | 8.47          |
| fastify                  | 5.5.0    | ✓      | 46400.0    | 21.04        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46372.8    | 21.05        | 8.27          |
| polka                    | 0.5.2    | ✓      | 45937.6    | 21.25        | 8.19          |
| micro                    | 10.0.1   | ✗      | 45916.8    | 21.28        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45821.6    | 21.32        | 8.17          |
| server-base              | 7.1.32   | ✗      | 45448.0    | 21.50        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 45212.8    | 21.63        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 45120.8    | 21.66        | 8.05          |
| 0http                    | 4.3.0    | ✓      | 44143.2    | 22.16        | 7.87          |
| h3-router                | 1.15.4   | ✓      | 43372.0    | 22.56        | 7.73          |
| connect-router           | 2.2.0    | ✓      | 43289.6    | 22.59        | 7.72          |
| restana                  | v5.1.0   | ✓      | 43057.6    | 22.73        | 7.68          |
| h3                       | 1.15.4   | ✗      | 42992.8    | 22.76        | 7.67          |
| micro-route              | 2.5.0    | ✓      | 42820.8    | 22.85        | 7.64          |
| adonisjs                 | 7.7.0    | ✓      | 41960.8    | 23.34        | 7.48          |
| srvx                     | 0.8.7    | ✗      | 40087.2    | 24.45        | 7.80          |
| whatwg-node-server       | 0.10.12  | ✗      | 38632.0    | 25.39        | 6.89          |
| hono                     | 4.9.5    | ✓      | 37366.4    | 26.27        | 6.13          |
| take-five                | 2.0.0    | ✓      | 35157.0    | 27.95        | 12.64         |
| koa                      | 3.0.1    | ✗      | 34806.6    | 28.23        | 6.21          |
| restify                  | 11.1.0   | ✓      | 34499.2    | 28.48        | 6.22          |
| koa-router               | 14.0.0   | ✓      | 32287.4    | 30.47        | 5.76          |
| hapi                     | 21.4.3   | ✓      | 31980.8    | 30.77        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30242.0    | 32.56        | 5.39          |
| fastify-big-json         | 5.5.0    | ✓      | 11722.2    | 84.75        | 134.87        |
| express                  | 5.1.0    | ✓      | 10100.8    | 98.42        | 1.80          |
| express-with-middlewares | 5.1.0    | ✓      | 9082.1     | 109.49       | 3.38          |
| trpc-router              | 11.5.0   | ✓      | 6417.9     | 155.08       | 1.41          |
