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
* __Node:__ `v24.13.0`
* __Run:__ Sun Feb 01 2026 02:22:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 57108.8    | 17.02        | 10.18         |
| restana                  | v5.1.0   | ✓      | 54740.8    | 17.78        | 9.76          |
| h3                       | 1.15.5   | ✗      | 52794.4    | 18.44        | 9.41          |
| h3-router                | 1.15.5   | ✓      | 51624.8    | 18.87        | 9.21          |
| node-http                | v24.13.0 | ✗      | 47706.4    | 20.45        | 8.51          |
| polka                    | 0.5.2    | ✓      | 47542.4    | 20.55        | 8.48          |
| connect                  | 3.7.0    | ✗      | 46452.0    | 20.98        | 8.28          |
| micro                    | 10.0.1   | ✗      | 45489.6    | 21.49        | 8.11          |
| fastify                  | 5.7.2    | ✓      | 45090.4    | 21.70        | 8.08          |
| connect-router           | 2.2.0    | ✓      | 43816.8    | 22.27        | 7.81          |
| whatwg-node-server       | 0.10.18  | ✗      | 40149.6    | 24.41        | 7.16          |
| hono                     | 4.11.7   | ✓      | 36755.2    | 26.70        | 6.03          |
| koa                      | 3.1.1    | ✗      | 36651.4    | 26.78        | 6.54          |
| koa-router               | 15.3.0   | ✓      | 34592.8    | 28.40        | 6.17          |
| hapi                     | 21.4.4   | ✓      | 33807.4    | 29.08        | 6.03          |
| adonisjs                 | 7.8.0    | ✓      | 31492.4    | 31.24        | 5.62          |
| srvx                     | 0.10.1   | ✗      | 29473.6    | 33.43        | 5.73          |
| express                  | 5.2.1    | ✓      | 27675.6    | 35.62        | 4.94          |
| express-with-middlewares | 5.2.1    | ✓      | 23443.2    | 42.14        | 8.72          |
| microrouter              | 3.1.3    | ✓      | 21224.8    | 46.58        | 3.79          |
| fastify-big-json         | 5.7.2    | ✓      | 12604.2    | 78.79        | 145.01        |
| trpc-router              | 11.9.0   | ✓      | 9471.0     | 104.98       | 2.09          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
