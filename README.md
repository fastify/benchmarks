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
* __Node:__ `v24.12.0`
* __Run:__ Thu Jan 08 2026 15:26:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.4   | ✗      | 51188.0    | 19.03        | 9.13          |
| restana                  | v5.1.0   | ✓      | 50816.8    | 19.19        | 9.06          |
| h3-router                | 1.15.4   | ✓      | 50683.2    | 19.24        | 9.04          |
| 0http                    | 4.4.0    | ✓      | 46981.6    | 20.81        | 8.38          |
| node-http                | v24.12.0 | ✗      | 46264.0    | 21.12        | 8.25          |
| polka                    | 0.5.2    | ✓      | 46144.0    | 21.17        | 8.23          |
| connect                  | 3.7.0    | ✗      | 45260.8    | 21.60        | 8.07          |
| micro                    | 10.0.1   | ✗      | 44452.0    | 22.01        | 7.93          |
| fastify                  | 5.6.2    | ✓      | 44428.0    | 22.03        | 7.97          |
| connect-router           | 2.2.0    | ✓      | 41216.8    | 23.76        | 7.35          |
| whatwg-node-server       | 0.10.18  | ✗      | 39256.8    | 24.97        | 7.00          |
| koa                      | 3.1.1    | ✗      | 37082.2    | 26.46        | 6.61          |
| hono                     | 4.11.3   | ✓      | 36348.6    | 27.01        | 5.96          |
| koa-router               | 14.0.0   | ✓      | 34140.8    | 28.80        | 6.09          |
| hapi                     | 21.4.4   | ✓      | 32704.0    | 30.08        | 5.83          |
| adonisjs                 | 7.7.0    | ✓      | 30706.8    | 32.08        | 5.48          |
| srvx                     | 0.10.0   | ✗      | 28523.6    | 34.55        | 5.55          |
| express                  | 5.2.1    | ✓      | 27103.6    | 36.38        | 4.83          |
| express-with-middlewares | 5.2.1    | ✓      | 23052.8    | 42.86        | 8.57          |
| microrouter              | 3.1.3    | ✓      | 20193.6    | 49.02        | 3.60          |
| fastify-big-json         | 5.6.2    | ✓      | 12013.6    | 82.69        | 138.23        |
| trpc-router              | 11.8.1   | ✓      | 8634.2     | 115.16       | 1.90          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
