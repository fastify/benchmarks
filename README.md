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
* __Run:__ Sat Oct 04 2025 08:05:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 47288.8    | 20.64        | 8.43          |
| fastify                  | 5.6.1    | ✓      | 47000.8    | 20.76        | 8.43          |
| 0http                    | 4.3.0    | ✓      | 46255.2    | 21.12        | 8.25          |
| connect                  | 3.7.0    | ✗      | 46254.6    | 21.11        | 8.25          |
| polka                    | 0.5.2    | ✓      | 46132.0    | 21.14        | 8.23          |
| micro                    | 10.0.1   | ✗      | 45313.6    | 21.56        | 8.08          |
| h3                       | 1.15.4   | ✗      | 44998.4    | 21.73        | 8.02          |
| restana                  | v5.1.0   | ✓      | 44716.0    | 21.87        | 7.97          |
| h3-router                | 1.15.4   | ✓      | 43818.4    | 22.32        | 7.81          |
| connect-router           | 2.2.0    | ✓      | 43209.6    | 22.63        | 7.71          |
| adonisjs                 | 7.7.0    | ✓      | 42272.8    | 23.16        | 7.54          |
| whatwg-node-server       | 0.10.12  | ✗      | 39126.4    | 25.08        | 6.98          |
| hono                     | 4.9.9    | ✓      | 37399.2    | 26.25        | 6.13          |
| koa                      | 3.0.1    | ✗      | 35473.8    | 27.71        | 6.33          |
| restify                  | 11.1.0   | ✓      | 34802.2    | 28.23        | 6.27          |
| koa-router               | 14.0.0   | ✓      | 32405.6    | 30.36        | 5.78          |
| hapi                     | 21.4.3   | ✓      | 32251.2    | 30.50        | 5.75          |
| microrouter              | 3.1.3    | ✓      | 30560.8    | 32.22        | 5.45          |
| srvx                     | 0.8.9    | ✗      | 20264.8    | 48.84        | 3.94          |
| fastify-big-json         | 5.6.1    | ✓      | 11693.4    | 84.94        | 134.54        |
| express                  | 5.1.0    | ✓      | 10034.8    | 99.08        | 1.79          |
| express-with-middlewares | 5.1.0    | ✓      | 9104.9     | 109.18       | 3.39          |
| trpc-router              | 11.6.0   | ✓      | 6379.6     | 156.00       | 1.41          |
